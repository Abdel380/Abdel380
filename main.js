import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(3, 1, 4);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = true;
controls.minDistance = 3;
controls.maxDistance = 10;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 0.3, 0);
controls.update();

const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x000000,
  side: THREE.DoubleSide
});
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.castShadow = false;
groundMesh.receiveShadow = true;
scene.add(groundMesh);


// LIGHT
let isLightOn = true; // Variable pour suivre l'état de la lumière
const transitionDuration = 800; // Durée de la transition en millisecondes

const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
const spotLight2 = new THREE.SpotLight(0xffffff, 3000, 100, 0.3, 1);
spotLight.position.set(0, 15, 15);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
spotLight2.position.set(5, 1, 15);
spotLight2.castShadow = true;
spotLight2.shadow.bias = -0.0001;
scene.add(spotLight);
scene.add(spotLight2);

function transitionColor(light, targetColor) {
  return new Promise((resolve) => {
    const currentColor = light.color.getHex();
    const startColor = new THREE.Color(currentColor);
    const endColor = new THREE.Color(targetColor);
    
    let startTime = null;

    function updateColor(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / transitionDuration, 1); // Limite à 1 pour éviter les dépassements
      
      const newColor = new THREE.Color().lerpColors(startColor, endColor, progress);
      light.color.copy(newColor);

      if (progress < 1) {
        requestAnimationFrame(updateColor);
      } else {
        resolve(); // Résoudre la promesse une fois la transition terminée
      }
    }
    requestAnimationFrame(updateColor);
  });
}

// PATHs
let currentCar = null;

// Fonction pour charger le modèle
// Fonction pour charger le modèle
function loadModel(ecurie) {
  (transitionColor(spotLight, 0x000000),
  transitionColor(spotLight2, 0x000000))
    .then(() => {
      const path = `${ecurie}/`;
      const loader = new GLTFLoader().setPath(path);
      
      // Ajout de l'événement onProgress pour suivre le chargement du modèle
      loader.load('scene.gltf', 
        (gltf) => {
          console.log('loading model');
          // Vérifie s'il y a une voiture actuellement chargée
          if (currentCar !== null) {
            // Retire la voiture actuellement chargée de la scène
            scene.remove(currentCar);
            currentCar = null;
          }
          const mesh = gltf.scene;

          mesh.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          mesh.position.set(0, 0, 0);
          scene.add(mesh);

          // Attribue la nouvelle voiture à la variable currentCar
          currentCar = mesh;
          document.querySelector('h1').innerText = ecurie.charAt(0).toUpperCase() + ecurie.slice(1);
          
          // Transition des lumières en fonction de l'état actuel (allumé/éteint)
          transitionColor(spotLight, 0xffffff)
            .then(() => transitionColor(spotLight2, 0xffffff))
            .then(() => {
              document.getElementById('progress-container').style.display = 'none';
            });
        }, 
        // Gestion de l'événement onProgress
        (xhr) => {
          // Calcul du pourcentage de chargement
          const percentLoaded = (xhr.loaded / xhr.total * 100).toFixed(2);
          // Affichage du pourcentage dans le conteneur de progression
          document.getElementById('progress-text').textContent = `${percentLoaded}%`;
        },
        (error) => {
          console.error(error);
        });
    });
}


loadModel("ferrari");
const ecurieButtons = document.querySelectorAll('.ecurieButton');

ecurieButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const ecurie = button.dataset.ecurie.trim().toLowerCase();
    loadModel(ecurie);
  });
});


// Création d'une géométrie de mur
const wallGeometry = new THREE.BoxGeometry(600, 200, 1); // Largeur, hauteur, épaisseur du mur
const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x111111 }); // Couleur grise pour le mur
const wallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
wallMesh.position.set(0, 5, -5); // Position du mur derrière la voiture
scene.add(wallMesh); // Ajout du mur à la scène



window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);


  controls.update();
  renderer.render(scene, camera);
}

animate();




// POUR LE MENU
document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("mousemove", function(event) {
      var mouseX = event.clientX;
      var windowWidth = window.innerWidth;
      var rightBoundary = windowWidth * 0.97; // 10% les plus à droite

      if (mouseX >= rightBoundary) {
          document.querySelector(".menu").classList.add("display");
      } else {
          document.querySelector(".menu").classList.remove("display");
      }
  });
});