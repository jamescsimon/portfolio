//three.js imports
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
orbit.update();

const ambLight = new THREE.AmbientLight(0x404040, 1.5); 
scene.add(ambLight);

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

// Initialize the yellow solar system - this creates all planets automatically
initializeSolarSystem('yellow', scene, textureLoader, camera, screenScaleFactor, THREE);

// Initialize resize listener for dynamic description positioning
initializeResizeListener();

// Initialize skills section
window.addEventListener('DOMContentLoaded', initializeSkillsSection);
document.getElementById('skills').textContent = 'Skills';

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

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('rB').addEventListener('click', camNext);
  document.getElementById('lB').addEventListener('click', camPrev);
});

// Background
const bgst = new THREE.TextureLoader().load('images/stars.jpg');
scene.background = bgst;
