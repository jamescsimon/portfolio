//three.js imports
import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { RenderPass } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/UnrealBloomPass.js';
import { EffectComposer } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/postprocessing/EffectComposer.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45, // distance from sun
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, // render min distance
    1500 // render max distance
);

const renderScene = new RenderPass(scene, camera);
const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5, // bloom strength
    0.5,
    0.1
);
composer.addPass(bloomPass);
renderer.toneMapping = THREE.CineonToneMapping;
renderer.toneMappingExposure = 0.7; // blurr

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

const ambLight = new THREE.AmbientLight(0x404040, 1.5); 
scene.add(ambLight);

const textureLoader = new THREE.TextureLoader();

function createStar(title, texture, position) {
    const geo = new THREE.SphereGeometry(16, 30, 30);
    const mat = new THREE.MeshBasicMaterial({
        map: textureLoader.load(texture)
    });
    const star = new THREE.Mesh(geo, mat);
    star.name = title;
    star.position.set(position.x, position.y, position.z);
    scene.add(star);
}

const blueStar = createStar("blue", './images/blue.png', { x: 0, y: 0, z: 0 });
const yellowStar = createStar("yellow", './images/yellow.png', { x: 10, y: 10, z: 10 });
const pinkStar = createStar("pink", './images/pink.png', { x: -10, y: -10, z: -10 });

// Generate figure-eight coordinates
function generateFigure8Coordinates(stepSize) {
    const positions = [];
    const fullCycleTime = 2 * Math.PI; // Time for a full cycle of sine functions
    const steps = Math.ceil(fullCycleTime / stepSize);
    const scaleFactor = 100;

    // Generate points for the figure-eight trajectory
    for (let t = 0; t < steps; t++) {
        const time = t * stepSize;

        // Body 1
        const x1 = Math.sin(time) * 6 * scaleFactor; 
        const y1 = 0;
        const z1 = Math.sin(2 * time) * 2 * scaleFactor;

        // Body 2
        const x2 = Math.sin(time + (2 * Math.PI) / 3) * 6 * scaleFactor;
        const y2 = 0; 
        const z2 = Math.sin(2 * (time + (2 * Math.PI) / 3)) * 2 * scaleFactor;

        // Body 3
        const x3 = Math.sin(time + (4 * Math.PI) / 3) * 6 * scaleFactor;
        const y3 = 0;
        const z3 = Math.sin(2 * (time + (4 * Math.PI) / 3)) * 2 * scaleFactor;

        // Append positions for all three bodies at this time step
        positions.push({
            body1: { x: x1, y: y1, z: z1 },
            body2: { x: x2, y: y2, z: z2 },
            body3: { x: x3, y: y3, z: z3 },
        });
    }

    return positions;
}

const stepSize = 0.0001; // Smaller time step for smooth motion
const figure8Positions = generateFigure8Coordinates(stepSize);
let timeStep = 0;
const bs = scene.getObjectByName("blue");
const ys = scene.getObjectByName("yellow");
const ps = scene.getObjectByName("pink");

//glows
const glowBlue = textureLoader.load('./images/blueGlow.png');
const glowBlueMaterial = new THREE.SpriteMaterial({ map: glowBlue, transparent: true });
const glowBlueSprite = new THREE.Sprite(glowBlueMaterial);
scene.add(glowBlueSprite);
glowBlueSprite.visible = false;

const glowYellow = textureLoader.load('./images/yellowGlow.png');
const glowYellowMaterial = new THREE.SpriteMaterial({ map: glowYellow, transparent: true });
const glowYellowSprite = new THREE.Sprite(glowYellowMaterial);
scene.add(glowYellowSprite);
glowYellowSprite.visible = false;

const glowPink = textureLoader.load('./images/pinkGlow.png');
const glowPinkMaterial = new THREE.SpriteMaterial({ map: glowPink, transparent: true });
const glowPinkSprite = new THREE.Sprite(glowPinkMaterial);
scene.add(glowPinkSprite);
glowPinkSprite.visible = false;

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let hoveredStar = null;
window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

window.addEventListener('click', (event) => {
    // Convert mouse click coordinates to normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the raycaster with the current camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Detect objects that the ray intersects
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        const clickedObject = intersects[0].object;

        // Check if the clicked object is the blue star
        if (clickedObject.name === "blue") {
            // Redirect to blue.html
            window.location.href = "blue.html";
        }
        else if (clickedObject.name === "yellow") {
            // Redirect to yellow.html
            window.location.href = "yellow.html";
        }
        else if (clickedObject.name === "pink") {
            // Redirect to pink.html
            window.location.href = "pink.html";
        }
    }
});

document.getElementById('blueCategory').addEventListener('click', () => {
    window.location.href = 'blue.html';
});

document.getElementById('yellowCategory').addEventListener('click', () => {
    window.location.href = 'yellow.html';
});

document.getElementById('pinkCategory').addEventListener('click', () => {
    window.location.href = 'pink.html';
});

function updateGlows() {
    // Raycasting
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        const firstIntersected = intersects[0].object;

        if (hoveredStar !== firstIntersected) {
            hoveredStar = firstIntersected;

            // Reset visibility for all glow sprites
            glowBlueSprite.visible = false;
            glowYellowSprite.visible = false;
            glowPinkSprite.visible = false;

            // Update glow sprite for the hovered star
            if (hoveredStar.name === "blue") {
                document.getElementById('projectCategory').textContent = 'Interactive Media Design';
                glowBlueSprite.visible = true;
                glowBlueSprite.position.copy(hoveredStar.position);
                glowBlueSprite.scale.set(45, 45, 1);
            } else if (hoveredStar.name === "yellow") {
                document.getElementById('projectCategory').textContent = 'Physics Sims & Game Engines';
                glowYellowSprite.visible = true;
                glowYellowSprite.position.copy(hoveredStar.position);
                glowYellowSprite.scale.set(45, 45, 1);
            } else if (hoveredStar.name === "pink") {
                document.getElementById('projectCategory').textContent = 'AI / ML';
                glowPinkSprite.visible = true;
                glowPinkSprite.position.copy(hoveredStar.position);
                glowPinkSprite.scale.set(45, 45, 1);
            }
        }
    } else {
        // Hide all glows when not hovering over any star
        if (hoveredStar) {
            glowBlueSprite.visible = false;
            glowYellowSprite.visible = false;
            glowPinkSprite.visible = false;
            hoveredStar = null;
        }
    }
}

const clock = new THREE.Clock();

function adjustCameraForDevice() {
    if (window.innerWidth <= 768) { 
        camera.position.set(0, 1000, 0);  
        camera.up.set(1, 0, 0);          
    } else { 
        camera.position.set(0, 1000, 0);  
        camera.up.set(0, 1, 0);          
    }
    camera.lookAt(0, 0, 0); 
}

adjustCameraForDevice();

window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    adjustCameraForDevice();
});

function animate() {

    const deltaTime = clock.getDelta();
    const speed = 10;

    updateGlows();
    
    if (timeStep >= figure8Positions.length) {
        timeStep = 0; //restart
    }

    const positions = figure8Positions[Math.floor(timeStep)];
    bs.position.set(positions.body1.x, positions.body1.y, positions.body1.z);
    ys.position.set(positions.body2.x, positions.body2.y, positions.body2.z);
    ps.position.set(positions.body3.x, positions.body3.y, positions.body3.z);

    glowBlueSprite.position.copy(bs.position);
    glowYellowSprite.position.copy(ys.position);
    glowPinkSprite.position.copy(ps.position);
    
    timeStep += speed * deltaTime * 60;
    
    bs.rotation.y += 0.01;
    ys.rotation.y += 0.01;
    ps.rotation.y -= 0.01;

    composer.render();
    requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Background
const bgst = new THREE.TextureLoader().load('images/stars.jpg');
scene.background = bgst;
