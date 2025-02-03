//three.js imports
import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { RenderPass } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/UnrealBloomPass.js';
import { EffectComposer } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/EffectComposer.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js'; 

//about me info
const aboutMe = "Hello! My name is James, and I am a computer science and game design student based in Los Angeles. I grew up near NASA in Houston, which naturally came along with an affinity for space that influenced much of my work. This website is inspired by the three-body problem, reflecting my attempts to balance my three interest groups. I am deeply passionate about programming intuitive game engines with satisfying physics simulations, utilizing machine learning to generate photorealistic graphics, and enhancing interactive experiences to facilitate emergent mechanics. Thank you for visiting my site!";
document.getElementById('aboutDesc').textContent = aboutMe;

//scene set up
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
const BLOOM_LAYER = 1; // Bloom layer
const DEFAULT_LAYER = 0; // Default layer

//detect if on mobile
function isMobileDevice() {
    return window.innerWidth <= 768;
}

// Function to adjust the camera for mobile
function adjustCameraForMobile() {
    const frame = scene.getObjectByName("FloatingFrame");
    if (frame) {
        // Set the camera position so that it faces the frame directly on mobile
        camera.position.set(frame.position.x - 15, frame.position.y, frame.position.z); // Adjust the Z offset as needed
        camera.lookAt(frame.position.x, frame.position.y - 3, frame.position.z);
        controls.target.set(frame.position); // Set OrbitControls to focus on the frame
    }
}


//load frame with GLBLoader
const loader = new GLTFLoader();
loader.load(
    'images/nonreflective.glb',
    (gltf) => {
        const frame = gltf.scene;
        frame.name = "FloatingFrame"; // Set a name for easy reference
        frame.position.set(1, -1, 2.5);
        frame.layers.set(DEFAULT_LAYER);
        scene.add(frame);

         if (isMobileDevice()) {
            adjustCameraForMobile();
        }
    },
    (xhr) => {
        console.log(`Loading progress: ${(xhr.loaded / xhr.total) * 100}%`);
    },
    (error) => {
        console.error('An error occurred:', error);
    }
);

//orbiting stars
const center = { x: 1, y: -0.25, z: 2.5 };
const radius = 2;
function createStar(title, size, texture, position, lightColor) {
    const geo = new THREE.SphereGeometry(size, 30, 30);
    const mat = new THREE.MeshStandardMaterial({
        map: new THREE.TextureLoader().load(texture),
        emissive: new THREE.Color(lightColor), 
        emissiveIntensity: 5,
        emissiveMap: new THREE.TextureLoader().load(texture),
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.name = title;
    mesh.position.set(position.x, position.y, position.z);
    scene.add(mesh);

    const pointLight = new THREE.PointLight(lightColor, 2, 50);
    pointLight.position.set(position.x, position.y, position.z);
    scene.add(pointLight);

    return {star:mesh, light:pointLight }; // Return the created star
}
const blue = createStar('Blue', 0.15, 'images/blue.png', center, 0x0000ff);
const orange = createStar('Orange', 0.15, 'images/yellow.png', center, 0xffa500);
const red = createStar('Red', 0.15, 'images/pink.png', center, 0xff0000);

blue.star.layers.set(BLOOM_LAYER);
blue.light.layers.set(BLOOM_LAYER);
orange.star.layers.set(BLOOM_LAYER);
orange.light.layers.set(BLOOM_LAYER);
red.star.layers.set(BLOOM_LAYER);
red.light.layers.set(BLOOM_LAYER);


const textureLoader = new THREE.TextureLoader();

//glows
const glowBlue = textureLoader.load('./images/blueGlow.png');
const glowBlueMaterial = new THREE.SpriteMaterial({ map: glowBlue, transparent: true });
const glowBlueSprite = new THREE.Sprite(glowBlueMaterial);
glowBlueSprite.scale.set(0.4, 0.4, 0.4);
scene.add(glowBlueSprite);
glowBlueSprite.visible = true;

const glowYellow = textureLoader.load('./images/yellowGlow.png');
const glowYellowMaterial = new THREE.SpriteMaterial({ map: glowYellow, transparent: true });
const glowYellowSprite = new THREE.Sprite(glowYellowMaterial);
glowYellowSprite.scale.set(0.45, 0.45, 0.45);
scene.add(glowYellowSprite);
glowYellowSprite.visible = true;

const glowPink = textureLoader.load('./images/pinkGlow.png');
const glowPinkMaterial = new THREE.SpriteMaterial({ map: glowPink, transparent: true });
const glowPinkSprite = new THREE.Sprite(glowPinkMaterial);
glowPinkSprite.scale.set(0.45, 0.45, 0.45);
scene.add(glowPinkSprite);
glowPinkSprite.visible = true;

let angleBlue = 0; // Vertical orbit
let angleRed = 0;  // Orbital X movement
let angleOrange = Math.PI / 2; // Offset by 90 degrees
const speed = 0.009;

//lock camera
controls.update = function() {};

//position frame
camera.position.set(-7, 0, 5);
camera.lookAt(0, 0, 0);

// Set up two render passes: one for bloom and one for the final render
const renderScene = new RenderPass(scene, camera);
const bloomComposer = new EffectComposer(renderer);
bloomComposer.addPass(renderScene);

const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    5, // bloom strength
    0.5,
    0.1
);
bloomComposer.addPass(bloomPass);
renderer.toneMapping = THREE.CineonToneMapping;
renderer.toneMappingExposure = 0.7; // blurr

const finalComposer = new EffectComposer(renderer);
finalComposer.addPass(renderScene);

// Override material to render only bloom objects
const darkMaterial = new THREE.MeshBasicMaterial({ color: "black" });
const materials = {}; // Store original materials

function renderBloom(mask) {
    scene.traverse((obj) => {
        if (obj.isMesh) {
            if (mask) {
                // Render only bloom objects
                if (obj.layers.test(BLOOM_LAYER)) {
                    materials[obj.uuid] = obj.material;
                    obj.material = darkMaterial;
                }
            } else if (materials[obj.uuid]) {
                // Restore original materials
                obj.material = materials[obj.uuid];
                delete materials[obj.uuid];
            }
        }
    });
    bloomComposer.render();
}

function render() {
    // 1. Render bloom objects
    camera.layers.set(BLOOM_LAYER);
    renderBloom(true);

    // 2. Render non-bloom objects
    camera.layers.set(DEFAULT_LAYER);
    renderBloom(false);

    // 3. Combine layers and render final scene
    camera.layers.enableAll(); // Enable all layers for the final render
    finalComposer.render();
}

//animation constants
const frameHMax = -1;
const frameHMin = -2;
let upwards = true;

function animate() {
    controls.update();
    render(); // Use the custom render function
    requestAnimationFrame(animate);


    // Find the frame object
    const frame = scene.getObjectByName("FloatingFrame");

    // Proceed only if the frame is found
    if (frame) {
        if (upwards === 1) {
            frame.position.y += 0.002; // Move up
        } else {
            frame.position.y -= 0.002; // Move down
        }

        // Reverse direction at bounds
        if (frame.position.y >= frameHMax) {
            upwards = 0; // Start moving down
        } else if (frame.position.y <= frameHMin) {
            upwards = 1; // Start moving up
        }
    }

     // Calculate blue's position (vertical orbit)
     if (blue) {
        blue.star.position.x = center.x - radius * Math.cos(angleBlue);
        blue.star.position.y = center.y - radius * Math.sin(angleBlue);
        blue.star.rotation.z += 0.01;
        blue.light.position.copy(blue.star.position);
        glowBlueSprite.position.copy(blue.star.position);
        angleBlue += speed; // Increment angle
    }

    // Calculate red's position (orbital X movement)
    if (red) {
        red.star.position.x = center.x + radius * Math.cos(angleRed);
        red.star.position.y = center.y + radius * Math.sin(angleRed);
        red.star.position.z = center.z + radius * Math.sin(angleRed);
        red.star.rotation.z += 0.01;
        red.star.rotation.y += 0.01;
        red.light.position.copy(red.star.position);
        glowPinkSprite.position.copy(red.star.position);
        angleRed += speed; // Increment angle
    }

    // Calculate orange's position (orbital X movement, offset)
    if (orange) {
        orange.star.position.x = center.x + radius * Math.cos(angleOrange);
        orange.star.position.y = center.y - radius * Math.sin(angleOrange);
        orange.star.position.z = center.z + radius * Math.sin(angleOrange);
        orange.star.rotation.z += 0.01;
        orange.star.rotation.y -= 0.01;
        orange.light.position.copy(orange.star.position);
        glowYellowSprite.position.copy(orange.star.position);
        angleOrange += speed; // Increment angle
    }

}
animate();

const ambLight = new THREE.AmbientLight(0x404040, 5); 
scene.add(ambLight);

window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Re-adjust camera if screen switches to mobile dimensions
    if (isMobileDevice()) {
        adjustCameraForMobile();
    }
});

// Background
const bgst = new THREE.TextureLoader().load('images/stars.jpg');
scene.background = bgst;
