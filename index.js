//three.js imports
import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { RenderPass } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/UnrealBloomPass.js';
import { EffectComposer } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/EffectComposer.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45, // distance from sun
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, // render min distance
    1000 // render max distance
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//controls
const controls = new OrbitControls(camera, renderer.domElement);

//lock camera
controls.update = function() {};
camera.position.set(0, 0, 75);
camera.lookAt(0, 0, 0);

//effects
const renderScene = new RenderPass(scene, camera);
const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.5, // bloom strength
    0.5,
    0.1
);
composer.addPass(bloomPass);
renderer.toneMapping = THREE.CineonToneMapping;
renderer.toneMappingExposure = 0.7; // blurr

let shootingStars = [];
let deltaElev = 25;

const textureLoader = new THREE.TextureLoader();

const glowTexture = textureLoader.load('./images/cometTrail.png');
const glowMaterial = new THREE.SpriteMaterial({ map: glowTexture, color: 0xffffff, blending: THREE.AdditiveBlending });

function createComet(size, elevation) {
    const cometGeo = new THREE.SphereGeometry(size / 2, 6, 6);
    const cometMat = new THREE.MeshBasicMaterial({ map: textureLoader.load('./images/white.png') });
    const comet = new THREE.Mesh(cometGeo, cometMat);
    comet.position.set(-100, elevation - 5, 0);
    scene.add(comet);

    const glowSprite = new THREE.Sprite(glowMaterial); // Reuse material
    glowSprite.scale.set(100 * size, 2.5 * size, size);
    glowSprite.position.copy(comet.position);
    scene.add(glowSprite);

    shootingStars.push({ star: comet, light: glowSprite });
}

function animate() { 
    renderer.render(scene, camera); 
    controls.update(); 
    composer.render(); 
    requestAnimationFrame(animate); 
    
    let n = Math.random(); 
    
    if (n < 0.001) { 
        createComet(n * 1000, (-1 * deltaElev) + (n * 100000)); 
    } 
    
    shootingStars = shootingStars.filter(comet => {
        if (comet.star.position.x > 75) {
            scene.remove(comet.star);
            scene.remove(comet.light);
            return false; // Remove from the array
        }
        comet.star.position.x += 1;
        comet.light.position.copy(comet.star.position);
        return true; // Keep in the array
    });    
}
animate();

const ambLight = new THREE.AmbientLight(0x404040, 1); 
scene.add(ambLight);

window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener('keydown', function (event) { 
    if (event.code === 'Space') { 
        const size = Math.random() * 0.5 + 0.1; 
        const elevation = Math.random() * 40 - 20; 
        createComet(size, elevation); 
    }
});
// Background
const bgst = new THREE.TextureLoader().load('images/stars.jpg');
scene.background = bgst;
