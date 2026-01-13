import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { RenderPass } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/UnrealBloomPass.js';
import { EffectComposer } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/EffectComposer.js';
import { initializeSolarSystem, updateText, initializeSkillsSection, camNext, camPrev, getCurrentCameraIndex, getPlanetObjects, animatePlanets, initializeResizeListener } from './planetUtils.js';

const container = document.getElementById('threejs-container');
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45, // distance from sun
    container.clientWidth / container.clientHeight, // aspect ratio
    0.1, // render min distance
    1000 // render max distance
);

const renderScene = new RenderPass(scene, camera);
const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(container.clientWidth, container.clientHeight),
    1.5, // bloom strength
    0.5,
    0.1
);
composer.addPass(bloomPass);
renderer.toneMapping = THREE.CineonToneMapping;
renderer.toneMappingExposure = 0.7; // blurr

function onResize() {
  const w = container.clientWidth;
  const h = container.clientHeight;
  renderer.setSize(w, h);
  composer.setSize(w, h);
  bloomPass.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', onResize);
onResize();

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.enableZoom = false;
orbit.enableRotate = false;  // Disable rotation
orbit.enablePan = false;     // Disable panning
orbit.enableDamping = false; // Disable damping for immediate response
orbit.update();

const ambLight = new THREE.AmbientLight(0x404040, 0.5); 
scene.add(ambLight);

const sunLight = new THREE.PointLight(0xffffff, 1);
sunLight.position.set(0, 0, 0);
scene.add(sunLight);

const textureLoader = new THREE.TextureLoader();

function getScreenScaleFactor() {
  const width = window.innerWidth;
  const baseScale = width / 1000;

  let factor = 2 / baseScale;

  // Clamp between 1 and 3.5 normally
  factor = Math.max(Math.min(factor, 3.5), 1);

  // If very narrow screen (portrait phones), scale further back
  if (width < 500) {
    factor += 0.5; // pull farther away on very thin screens
  }

  return factor;
}

let screenScaleFactor = getScreenScaleFactor();

// Initialize the blue solar system - this creates all planets automatically
initializeSolarSystem('blue', scene, textureLoader, camera, screenScaleFactor, THREE);

// Initialize resize listener for dynamic description positioning
initializeResizeListener();

// Initialize skills section
window.addEventListener('DOMContentLoaded', initializeSkillsSection);

function animate() {
    // Animate all planets automatically
    animatePlanets();

    composer.render(scene, camera);

    // Update screen scale factor
    screenScaleFactor = getScreenScaleFactor();

    composer.render();
    requestAnimationFrame(animate);
}
animate();

// Set up UI elements
const sight = document.getElementById('petitesight');
const launchButton = document.getElementById('launch'); 
const lArrow = document.getElementById('leftArrow'); 
const rArrow = document.getElementById('rightArrow');

sight.style.zIndex = '-101';
launchButton.style.zIndex = '-101';
lArrow.style.zIndex = '101'; 
rArrow.style.zIndex = '101';

// Make camera functions available globally - now completely automatic
window.camNext = camNext;
window.camPrev = camPrev;

// Logo hover and click sounds
const hoverSounds = [
    new Audio('./sounds/hover-planet1.mp3'),
    new Audio('./sounds/hover-planet2.mp3'),
    new Audio('./sounds/hover-planet3.mp3')
];
hoverSounds.forEach(sound => {
    sound.volume = 0.3;
});

const selectSound = new Audio('./sounds/select-planet.mp3');
selectSound.volume = 0.3;

// Cooldown for all sounds on page load
let soundsEnabled = false;
setTimeout(() => {
    soundsEnabled = true;
}, 1500); // 1.5 second cooldown

let logoHovered = false;

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('rB').addEventListener('click', camNext);
  document.getElementById('lB').addEventListener('click', camPrev);
  
  // Logo hover and click sounds
  const logoLink = document.querySelector('#logo a');
  if (logoLink) {
      // Hover sound for logo
      logoLink.addEventListener('mouseenter', () => {
          if (!logoHovered && soundsEnabled) {
              logoHovered = true;
              const randomSound = hoverSounds[Math.floor(Math.random() * hoverSounds.length)];
              randomSound.currentTime = 0;
              randomSound.play().catch(err => {});
          }
      });
      
      logoLink.addEventListener('mouseleave', () => {
          logoHovered = false;
      });
      
      // Click sound for logo - wait for sound to finish before redirecting
      logoLink.addEventListener('click', (e) => {
          e.preventDefault();
          const targetUrl = logoLink.getAttribute('href');
          
          if (soundsEnabled) {
              selectSound.currentTime = 0;
              selectSound.play().then(() => {
                  selectSound.onended = () => {
                      window.location.href = targetUrl;
                  };
              }).catch(err => {
                  window.location.href = targetUrl;
              });
          } else {
              window.location.href = targetUrl;
          }
      });
  }
  
  // Hover and select sounds for navbar tabs
  const navbarLinks = document.querySelectorAll('#navbar li a');
  navbarLinks.forEach(link => {
      let navHovered = false;
      
      link.addEventListener('mouseenter', () => {
          if (!navHovered && soundsEnabled) {
              navHovered = true;
              const randomSound = hoverSounds[Math.floor(Math.random() * hoverSounds.length)];
              randomSound.currentTime = 0;
              randomSound.play().catch(err => {});
          }
      });
      
      link.addEventListener('mouseleave', () => {
          navHovered = false;
      });
      
        // Click sound for navbar links - wait for sound to finish before redirecting
        link.addEventListener('click', (e) => {
            const targetUrl = link.getAttribute('href');
            // Don't prevent default for download links or external links
            if (targetUrl && !targetUrl.startsWith('#') && !link.hasAttribute('download')) {
                e.preventDefault();
                
                if (soundsEnabled) {
                    selectSound.currentTime = 0;
                    selectSound.play().then(() => {
                        selectSound.onended = () => {
                            window.location.href = targetUrl;
                        };
                    }).catch(err => {
                        window.location.href = targetUrl;
                    });
                } else {
                    window.location.href = targetUrl;
                }
            }
        });
  });
});

// Background
const bgst = new THREE.TextureLoader().load('images/stars.jpg');
scene.background = bgst;
