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
    
    // Set initial text for sun view AFTER CSS classes are applied
    // Use a small delay to ensure CSS classes are properly applied
    setTimeout(() => {
        updateText();
    }, 10);
    
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
            const texture = textureLoader.load(planetData.texture);
            
            // Determine which instance of this texture this planet is
            let textureInstance = 0;
            for (let i = 0; i < index; i++) {
                if (!currentSystem.planets[i].isSun && currentSystem.planets[i].texture === planetData.texture) {
                    textureInstance++;
                }
            }
            
            // Apply color variations based on texture and instance - very pronounced colors
            let colorTint = new THREE.Color(1, 1, 1); // Default white
            let emissiveColor = new THREE.Color(0, 0, 0);
            let emissiveIntensity = 0;
            let roughness = 0.7;
            let metalness = 0.1;
            
            if (planetData.texture === './images/venus.jpg') {
                const venusColors = [
                    [1.0, 1.0, 1.0],    // Original - no tint
                    [1.0, 0.7, 0.4],    // Strong orange tint
                    [1.0, 0.4, 0.8],    // Strong pink tint
                    [0.4, 1.0, 0.6]     // Strong green tint
                ];
                const colorValues = venusColors[textureInstance % venusColors.length];
                colorTint = new THREE.Color(colorValues[0], colorValues[1], colorValues[2]);
                if (textureInstance % venusColors.length > 0) {
                    emissiveColor = new THREE.Color(colorValues[0] * 0.4, colorValues[1] * 0.4, colorValues[2] * 0.4);
                    emissiveIntensity = 0.3;
                }
            } else if (planetData.texture === './images/mercury.jpg') {
                const mercuryColors = [
                    [1.0, 1.0, 1.0],    // Original - no tint
                    [0.4, 0.6, 1.0],    // Strong blue tint
                    [1.0, 1.0, 0.4],    // Strong yellow tint
                    [1.0, 0.6, 1.0],    // Strong pink tint
                    [0.6, 0.8, 1.0]     // Strong light blue tint
                ];
                const colorValues = mercuryColors[textureInstance % mercuryColors.length];
                colorTint = new THREE.Color(colorValues[0], colorValues[1], colorValues[2]);
                if (textureInstance % mercuryColors.length > 0) {
                    emissiveColor = new THREE.Color(colorValues[0] * 0.4, colorValues[1] * 0.4, colorValues[2] * 0.4);
                    emissiveIntensity = 0.25;
                }
            } else if (planetData.texture === './images/earth.jpg') {
                const earthColors = [
                    [1.0, 1.0, 1.0],    // Original - no tint
                    [0.4, 1.0, 1.0],    // Strong cyan tint
                    [1.0, 1.0, 0.6],    // Strong yellow tint
                    [1.0, 0.8, 0.4]     // Strong orange tint
                ];
                const colorValues = earthColors[textureInstance % earthColors.length];
                colorTint = new THREE.Color(colorValues[0], colorValues[1], colorValues[2]);
                if (textureInstance % earthColors.length > 0) {
                    emissiveColor = new THREE.Color(colorValues[0] * 0.4, colorValues[1] * 0.4, colorValues[2] * 0.4);
                    emissiveIntensity = 0.3;
                }
            } else if (planetData.texture === './images/mars.jpg') {
                const marsColors = [
                    [1.0, 1.0, 1.0],    // Original - no tint
                    [1.0, 0.6, 0.4],    // Strong orange tint
                    [1.0, 0.4, 0.4],    // Strong red tint
                    [1.0, 0.5, 0.5]     // Strong coral tint
                ];
                const colorValues = marsColors[textureInstance % marsColors.length];
                colorTint = new THREE.Color(colorValues[0], colorValues[1], colorValues[2]);
                if (textureInstance % marsColors.length > 0) {
                    emissiveColor = new THREE.Color(colorValues[0] * 0.5, colorValues[1] * 0.5, colorValues[2] * 0.5);
                    emissiveIntensity = 0.35;
                }
            }
            
            const mat = new THREE.MeshStandardMaterial({
                map: texture,
                color: colorTint,
                emissive: emissiveColor,
                emissiveIntensity: emissiveIntensity,
                roughness: roughness,
                metalness: metalness
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
        if (!planetData.isSun) {
            const gifElement = document.getElementById(`gif${index}`);
            if (gifElement) {
                if (planetData.gif) {
                    gifElement.src = planetData.gif;
                    console.log(`Set gif${index} src to: ${planetData.gif}`);
                } else {
                    // Clear the src if no gif is specified
                    gifElement.src = '';
                    console.log(`Cleared gif${index} src (no gif specified)`);
                }
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
            // Play visit sound (only if cooldown has passed)
            if (visitSound && soundsEnabled) {
                visitSound.currentTime = 0;
                visitSound.play().catch(err => {
                    console.log('Visit sound play failed:', err);
                });
            }
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
    
    // Check if we're in sun view (centered text)
    const isSunView = planetName.classList.contains('centered-planet-name');
    
    if (isSunView) {
        // For sun view, use wider constraints since text is centered
        scaleTextToFit(planetName, 80); // 80% max width for centered text
        scaleTextToFit(planetDesc, 80); // 80% max width for centered text
    } else {
        // For planet view, use tighter constraints to avoid overlap
        scaleTextToFit(planetName, 45); // 45% max width to avoid overlap with container
        scaleTextToFit(planetDesc, 45); // 45% max width
    }
    
    // Keep description at static position (15% from CSS)
    planetDesc.style.top = '15%';
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
    for (let i = 1; i <= 20; i++) {
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
    for (let i = 1; i <= 20; i++) {
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
        // Play navigation sound (only if cooldown has passed)
        if (planetNavSound && soundsEnabled) {
            planetNavSound.currentTime = 0;
            planetNavSound.play().catch(err => {
                console.log('Navigation sound play failed:', err);
            });
        }
        updateText();
        handleCameraAndUI();
    }
}

// Sound effect for going back to select page
let backToSelectSound = null;
if (typeof Audio !== 'undefined') {
    backToSelectSound = new Audio('./sounds/back-to-select.mp3');
    backToSelectSound.volume = 0.3; // Set volume to 30%
}

// Sound effect for planet navigation
let planetNavSound = null;
if (typeof Audio !== 'undefined') {
    planetNavSound = new Audio('./sounds/planet-nav.mp3');
    planetNavSound.volume = 0.3; // Set volume to 30%
}

// Sound effect for visit button
let visitSound = null;
if (typeof Audio !== 'undefined') {
    visitSound = new Audio('./sounds/visit.mp3');
    visitSound.volume = 0.3; // Set volume to 30%
}

// Cooldown for all sounds on page load
let soundsEnabled = false;
setTimeout(() => {
    soundsEnabled = true;
}, 1500); // 1.5 second cooldown

// Camera previous function - completely automatic
export function camPrev() {
    if (ci > 0) {
        ci -= 1;
        console.log("ci=", ci);
        // Play navigation sound (only if cooldown has passed)
        if (planetNavSound && soundsEnabled) {
            planetNavSound.currentTime = 0;
            planetNavSound.play().catch(err => {
                console.log('Navigation sound play failed:', err);
            });
        }
        updateText();
        handleCameraAndUI();
    } else if (ci == 0) {
        // Play sound and wait for it to finish before redirecting (only if cooldown has passed)
        if (backToSelectSound && soundsEnabled) {
            backToSelectSound.currentTime = 0; // Reset to start
            backToSelectSound.play().then(() => {
                // Wait for sound to finish before redirecting
                backToSelectSound.onended = () => {
                    window.location.href = "index.html";
                };
            }).catch(err => {
                // If sound fails to play, redirect immediately
                console.log('Sound play failed:', err);
                window.location.href = "index.html";
            });
        } else {
            // If sound not available or cooldown active, redirect immediately
            window.location.href = "index.html";
        }
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
