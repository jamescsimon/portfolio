// Shared utility functions for all planet pages
import { getSolarSystemData, getPlanetData, getPlanetCount } from './planetData.js';

// Global variables that will be set by each page
let currentSystem = null;
let planets = [];
let ci = 0; // camera index
let cmax = 0; // camera max (num planets)
let planetObjects = [];
let camera = null;
let screenScaleFactor = 1;
let THREE = null; // Will be set when initializing

// Initialize the solar system with data
export function initializeSolarSystem(systemName, scene, textureLoader, cam, scaleFactor, threeJS) {
    console.log(`Initializing solar system: ${systemName}`);
    
    currentSystem = getSolarSystemData(systemName);
    camera = cam;
    screenScaleFactor = scaleFactor;
    THREE = threeJS; // Store THREE reference
    
    if (!currentSystem) {
        console.error(`Solar system '${systemName}' not found`);
        return false;
    }
    
    cmax = getPlanetCount(systemName);
    console.log(`Created ${cmax} planets`);
    
    // Create planets dynamically
    planetObjects = createPlanets(scene, textureLoader);
    console.log(`Planet objects created:`, planetObjects.length);
    
    // Initialize trailer images from planet data
    initializeTrailerImages();
    
    // Set initial camera position and UI state (sun view)
    console.log('Setting up initial sun view...');
    handleSunView();
    
    // Set initial text for sun view
    updateText();
    
    console.log('Solar system initialization complete');
    return true;
}

// Create planets dynamically based on the data
function createPlanets(scene, textureLoader) {
    if (!currentSystem || !THREE) return [];
    
    const objects = [];
    
    currentSystem.planets.forEach((planetData, index) => {
        if (planetData.isSun) {
            // Create sun
            const sunGeo = new THREE.SphereGeometry(planetData.size, 30, 30);
            const sunMat = new THREE.MeshBasicMaterial({
                map: textureLoader.load(planetData.texture)
            });
            const sun = new THREE.Mesh(sunGeo, sunMat);
            scene.add(sun);
            objects.push({ mesh: sun, obj: sun, isSun: true, data: planetData });
        } else {
            // Create regular planet
            const geo = new THREE.SphereGeometry(planetData.size, 30, 30);
            const mat = new THREE.MeshStandardMaterial({
                map: textureLoader.load(planetData.texture)
            });
            const mesh = new THREE.Mesh(geo, mat);
            const obj = new THREE.Object3D();
            obj.add(mesh);
            scene.add(obj);
            mesh.position.x = planetData.position;
            objects.push({ mesh, obj, isSun: false, data: planetData });
        }
    });
    
    return objects;
}

// Initialize trailer images from planet data
function initializeTrailerImages() {
    if (!currentSystem) return;
    
    // Set the src attributes of gif elements based on planet data
    currentSystem.planets.forEach((planetData, index) => {
        if (!planetData.isSun && planetData.gif) {
            const gifElement = document.getElementById(`gif${index}`);
            if (gifElement) {
                gifElement.src = planetData.gif;
                console.log(`Set gif${index} src to: ${planetData.gif}`);
            }
        }
    });
}

// Update text based on current camera index
export function updateText() {
    if (!currentSystem || ci >= currentSystem.planets.length) return;
    
    const planet = currentSystem.planets[ci];
    
    document.getElementById('planetName').textContent = planet.name;
    document.getElementById('planetDesc').textContent = planet.description;
    
    // Update visitability with clickable functionality if link is available
    const visitabilityElement = document.getElementById('visitability');
    visitabilityElement.textContent = planet.visitability;
    
    // Remove any existing click handlers
    visitabilityElement.onclick = null;
    
    // Add click handler if link exists
    if (planet.link) {
        visitabilityElement.style.cursor = 'pointer';
        visitabilityElement.classList.add('clickable-visitability');
        visitabilityElement.onclick = () => {
            window.open(planet.link, '_blank');
        };
    } else {
        visitabilityElement.style.cursor = 'default';
        visitabilityElement.classList.remove('clickable-visitability');
    }
    
    document.getElementById('overviewDesc').textContent = planet.overview;
    document.getElementById('projectDesc').textContent = planet.projectDesc;
    
    const skillList = document.getElementById('skillList');
    skillList.innerHTML = '';
    planet.skills.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        skillList.appendChild(listItem);
    });
    
    // Adjust description position based on name height
    adjustDescriptionPosition();
}

// Adjust the description position based on the planet name's height
function adjustDescriptionPosition() {
    const planetName = document.getElementById('planetName');
    const planetDesc = document.getElementById('planetDesc');
    
    if (!planetName || !planetDesc) return;
    
    // Scale font size to fit width for planet name
    scaleTextToFit(planetName, 45); // 45% max width to avoid overlap with container
    
    // Keep description at static position (15% from CSS)
    planetDesc.style.top = '15%';
    
    // Also scale the description text to fit
    scaleTextToFit(planetDesc, 45); // 45% max width
}

// Scale text to fit within a percentage width of the viewport
function scaleTextToFit(element, maxWidthPercent) {
    const maxWidth = (window.innerWidth * maxWidthPercent) / 100;
    
    // Remove any inline font-size to allow CSS clamp to work
    element.style.fontSize = '';
    
    // Get the computed font size after CSS is applied
    const computedFontSize = parseFloat(getComputedStyle(element).fontSize);
    
    // Check if text overflows
    if (element.scrollWidth > maxWidth) {
        // Calculate the scale factor needed with a small buffer
        const scaleFactor = (maxWidth - 20) / element.scrollWidth; // 20px buffer
        const newFontSize = Math.max(computedFontSize * scaleFactor, 8); // Minimum 8px
        element.style.fontSize = newFontSize + 'px';
    }
    // If text doesn't overflow, leave it at the CSS clamp size
}

// Handle camera positioning and UI updates automatically
function handleCameraAndUI() {
    if (ci === 0) {
        // Sun view
        handleSunView();
    } else if (ci <= cmax) {
        // Planet view
        handlePlanetView(ci);
    }
}

// Handle sun view automatically
function handleSunView() {
    console.log('Setting up sun view - camera position and hiding sight');
    
    // Remove camera from all planets FIRST, before positioning
    planetObjects.forEach(planetObj => {
        if (!planetObj.isSun) {
            planetObj.mesh.remove(camera);
        }
    });
    
    // Now position the camera to face the star
    camera.position.set(150 * screenScaleFactor, 0, 0);
    camera.lookAt(0, 0, 0);
    
    // Hide UI elements
    const sight = document.getElementById('sight');
    if (sight) {
        sight.style.display = 'none';
        console.log('Sight hidden');
    } else {
        console.log('Sight element not found');
    }
    
    document.getElementById('overview').textContent = "";
    document.getElementById('description').textContent = "";
    document.getElementById('skillList').style.zIndex = '-101';
    document.getElementById('overviewDesc').style.zIndex = '-101'; 
    document.getElementById('skills').textContent = "";
    document.getElementById('skills').style.zIndex = '-101';
    
    // Hide the entire descContainer
    const descContainer = document.querySelector('.descContainer');
    if (descContainer) {
        descContainer.style.zIndex = '-101';
        descContainer.style.display = 'none';
    }
    
    // Hide all gifs
    for (let i = 1; i <= 10; i++) {
        const gif = document.getElementById(`gif${i}`);
        if (gif) {
            gif.style.display = 'none';
            gif.style.zIndex = '-100';
        }
    }
    
    // Add centered classes for sun view
    const planetName = document.getElementById('planetName');
    const planetDesc = document.getElementById('planetDesc');
    if (planetName && planetDesc) {
        planetName.classList.add('centered-planet-name');
        planetDesc.classList.add('centered-planet-desc');
        console.log('Added centered classes to planetName and planetDesc');
        console.log('planetName classes:', planetName.className);
        console.log('planetDesc classes:', planetDesc.className);
    } else {
        console.log('Could not find planetName or planetDesc elements');
    }
    
    console.log('Sun view setup complete');
}

// Handle planet view automatically
function handlePlanetView(planetIndex) {
    const planetObj = planetObjects[planetIndex];
    if (!planetObj) return;
    
    // Remove camera from all planets first
    planetObjects.forEach((obj, index) => {
        if (!obj.isSun) {
            obj.mesh.remove(camera);
        }
    });
    
    // Position camera for planet view - using the original positioning logic
    camera.position.set(0, 0, 50 * screenScaleFactor);
    camera.lookAt(0.25 * screenScaleFactor, 0.8 * screenScaleFactor, 0);
    
    // Add camera to current planet
    planetObj.mesh.add(camera);
    
    // Show UI elements
    document.getElementById('skillList').style.zIndex = '101';
    document.getElementById('overviewDesc').style.zIndex = '101'; 
    document.getElementById('overview').textContent = "Job Overview";
    document.getElementById('description').textContent = "Project Description";
    document.getElementById('skills').textContent = "Skills";
    
    // Show the descContainer
    const descContainer = document.querySelector('.descContainer');
    if (descContainer) {
        descContainer.style.zIndex = '100';
        descContainer.style.display = 'flex';
    }
    
    // Show sight
    const sight = document.getElementById('sight');
    if (sight) sight.style.display = 'block';
    
    // Handle gif visibility - show only the gif for the current planet
    for (let i = 1; i <= 10; i++) {
        const gif = document.getElementById(`gif${i}`);
        if (gif) {
            if (i === planetIndex) {
                gif.style.display = 'block';
                gif.style.zIndex = '100';
            } else {
                gif.style.display = 'none';
            }
        }
    }
    
    // Remove centered classes for planet view
    const planetName = document.getElementById('planetName');
    const planetDesc = document.getElementById('planetDesc');
    if (planetName && planetDesc) {
        planetName.classList.remove('centered-planet-name');
        planetDesc.classList.remove('centered-planet-desc');
    }
}

// Camera next function - completely automatic
export function camNext() {
    if (ci < cmax) {
        ci += 1;
        console.log("ci=", ci);
        updateText();
        handleCameraAndUI();
    }
}

// Camera previous function - completely automatic
export function camPrev() {
    if (ci > 0) {
        ci -= 1;
        console.log("ci=", ci);
        updateText();
        handleCameraAndUI();
    } else if (ci == 0) {
        window.location.href = "index.html";
        return;
    }
}

// Initialize skills section with URL parameters
export function initializeSkillsSection() {
    const urlParams = new URLSearchParams(window.location.search);
    const ciNew = urlParams.get('ci');

    console.log('CI from query string:', ciNew);

    if (ciNew) {
        if (ciNew == 1) {
            camNext();
        } else {
            camNext();
            ci = parseInt(ciNew, 10);
            console.log('Global CI set to:', ci);
            ci -= 1;
            camNext();
        }
    }
}

// Get current camera index
export function getCurrentCameraIndex() {
    return ci;
}

// Get current planet data
export function getCurrentPlanetData() {
    if (!currentSystem || ci >= currentSystem.planets.length) return null;
    return currentSystem.planets[ci];
}

// Get planet objects for animation
export function getPlanetObjects() {
    return planetObjects;
}

// Animate all planets automatically
export function animatePlanets() {
    planetObjects.forEach((planetObj, index) => {
        if (planetObj.isSun) {
            planetObj.mesh.rotateY(0.00125);
        } else {
            // Self-rotation - different speeds for variety
            planetObj.mesh.rotateY(0.002 + (index * 0.0005));
            // Around-sun-rotation - different speeds for variety
            planetObj.obj.rotateY(0.001 + (index * 0.0002));
        }
    });
}

// Add resize event listener to adjust description position when window is resized
export function initializeResizeListener() {
    window.addEventListener('resize', () => {
        // Use a small delay to ensure the DOM has updated
        setTimeout(adjustDescriptionPosition, 100);
    });
}
