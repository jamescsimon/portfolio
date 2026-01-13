// Skill consolidation mapping
// Maps old skill names to their consolidated versions
// Skills that should be removed entirely are mapped to null

export const skillConsolidation = {
    // 3D Graphics & Modeling consolidation
    "3D Modeling": "3D Graphics",
    
    // API consolidation
    "API Integration": "API Development",
    
    // Algorithm consolidation
    "Algorithm Optimization": "Algorithm Development",
    
    // Technical Writing consolidation
    "Technical Writing/Documentation": "Technical Writing",
    "Technical Communication": "Technical Writing",
    "Technical Documentation": "Technical Writing",
    
    // Quality Assurance consolidation
    "QA": "Quality Assurance",
    "Quality Assurance & Data Analysis": "Quality Assurance",
    "Quality Assurance (QA)": "Quality Assurance",
    "Quality Control": "Quality Assurance",
    
    // Natural Language Processing consolidation
    "Natural Language Processing (NLP)": "Natural Language Processing",
    
    // Game Development consolidation
    "Game Design/Development": "Game Development",
    
    // Collaboration consolidation
    "Team Collaboration/Communication": "Team Collaboration",
    "Cross-Team Collaboration": "Team Collaboration",
    "Cross-Functional Collaboration": "Team Collaboration",
    "Cross-functional Leadership": "Team Collaboration",
    "Remote Collaboration": "Team Collaboration",
    "Academic Collaboration": "Collaboration",
    "Research Collaboration": "Collaboration",
    
    // Cloud consolidation
    "Cloud Integration": "Cloud",
    
    // Clinical/Research consolidation
    "Clinical Decision Support": "Clinical Research",
    
    // Cognitive Science consolidation
    "Cognitive Neuroscience": "Cognitive Science",
    
    // Data consolidation
    "Data Processing": "Data Cleaning",
    "Data Collection": "Data Engineering",
    "Data Integrity": "Data Quality Assurance",
    
    // Analytics consolidation
    "User Analytics": "Analytics",
    
    // Architecture consolidation
    "System Architecture": "Architecture Design",
    "Software Architecture & Development": "Software Architecture",
    
    // System Design consolidation
    "Systems Design": "System Design",
    
    // Testing consolidation
    "Usability Testing": "User Testing",
    
    // Research consolidation
    "Scientific Research": "Research",
    
    // Leadership/Management consolidation
    "Team Management": "Leadership",
    "Long-term Project Management": "Project Management",
    
    // Performance consolidation
    "Performance Analysis": "Performance Optimization",
    
    // Presentation consolidation
    "Public Speaking": "Presentation Skills",
    
    // Problem Solving consolidation
    "Troubleshooting": "Problem Solving",
    
    // Excel consolidation
    "Microsoft Excel": "Excel",
    
    // RESTful API consolidation
    "RESTful APIs": "RESTful API",
    
    // Task Queue consolidation
    "Task Queuing": "Task Queue Management",
    
    // Telemetry consolidation
    "Telemetry Collection": "Telemetry",
    
    // PLS Regression consolidation
    "PLS Regression": "Partial Least Squares Regression",
    
    // Statistical consolidation
    "Statistical Modeling": "Statistical Analysis",
    
    // Feature Engineering consolidation
    "Feature Extraction": "Feature Engineering",
    "Feature Importance": "Feature Engineering",
    "Feature Selection": "Feature Engineering",
    
    // Model consolidation
    "Model Architecture": "Model Evaluation",
    "Model Calibration": "Model Evaluation",
    "Model Comparison": "Model Evaluation",
    "Model Optimization": "Model Evaluation",
    "Model Validation": "Model Evaluation",
    
    // Financial consolidation
    "Financial Technology": "Financial Planning",
    "FinTech": "Financial Planning",
    "Financial Budgeting": "Financial Modeling",
    
    // Revenue consolidation
    "Revenue Projection": "Revenue Prediction",
    
    // Game consolidation
    "Game Design": "Game Development",
    
    // Narrative consolidation
    "Narrative Analysis": "Narrative Design",
    
    // Physics consolidation
    "Physics Programming": "Physics Simulation",
    
    // Quantum consolidation
    "Quantum Interference": "Quantum Physics",
    "Quantum Mechanics": "Quantum Physics",
    
    // Software consolidation
    "Software Engineering": "Software Architecture",
    
    // Excel consolidation
    "Excel Integration": "Excel",
    
    // Image consolidation
    "Image Generation": "Image Processing",
    
    // Real-time consolidation
    "Real-time Data Visualization": "Real-time Systems",
    
    // Web Development consolidation
    "Full Stack Web Development": "Web Development",
    
    // Product consolidation
    "Product Demo": "Product Development",
    "Product Design": "Product Development",
    
    // Research consolidation
    "Research Methods": "Research",
    
    // Survey consolidation
    "Survey Weights": "Survey Data Analysis",
    
    // Text Processing consolidation
    "Text Vectorization": "Natural Language Processing",
    "TF-IDF": "Natural Language Processing",
    "Bag of Words": "Natural Language Processing",
    "N-gram": "Natural Language Processing",
    
    // Machine Learning technique consolidation
    "Classification": "Machine Learning",
    "Clustering": "Machine Learning",
    "Linear Regression": "Regression Analysis",
    "Ridge Regression": "Regression Analysis",
    "Gradient Boosting": "Machine Learning",
    "Random Forest": "Machine Learning",
    "XGBoost": "Machine Learning",
    "Reinforcement Learning": "Machine Learning",
    "Deep Learning": "Machine Learning",
    "Spiking Neural Networks": "Neural Networks",
    "Neural Architecture": "Neural Networks",
    
    // Remove project-specific outcomes (not skills)
    "BMI Prediction": null,
    "Revenue Prediction": null,
    "Break-even Analysis": null,
    "ROI Analysis": null,
    "Risk Assessment": null,
    "Risk Stratification": null,
    
    // Remove domain knowledge that isn't developer skills
    "Health Equity": "Fairness",
    "Population Health": null,
    "Public Health": null,
    "Clinical Research": null,
    "Anxiety Research": null,
    "Attention Bias": null,
    "Behavioral Assessment": null,
    "Temperament Research": null,
    "Infant Research": null,
    "Developmental Psychology": null,
    "Psychology": null,
    "Neuroscience": null,
    "Neuroimaging": null,
    "Neuron Models": null,
    "Cognitive Science": null,
    "Computational Neuroscience": null,
    "Biological Neural Networks": null,
    "Sensory Integration": null,
    "Connectome Modeling": null,
    "Quantum Physics": null,
    "Quantum Chemistry": null,
    "Quantum Circuit Optimization": null,
    "Entanglement": null,
    "Superposition": null,
    "Wave Function": null,
    "Physics Education": null,
    "Environmental Science": null,
    "Computational Chemistry": null,
    "Sustainable Development Goals": null,
    "STEM Education": null,
    "Educational Content": null,
    "Educational Outreach": null,
    "Film Production": null,
    "Interdisciplinary Research": null,
    "Market Research": null,
    
    // Remove too-specific technical details
    "Precision": null,
    "Recall": null,
    "Heteroscedasticity": null,
    "Weighted Least Squares": null,
    "Partial Least Squares Regression": null,
    "Gradient Descent": null,
    "Genre Classification": null,
    "Save & Load Systems": null,
    "CSV Processing": null,
    "Parquet": null,
    "Image Upload": null,
    "Export Functionality": null,
    "Order Management": null,
    "Inventory Systems": null,
    "Cost Tracking": null,
    "Budget Planning": null,
    "Calculation Engine": null,
    
    // Remove soft skills that are too generic
    "Individual Contribution": null,
    "Time Management": null,
    "Innovation": null,
    
    // Remove non-skills (datasets, data sources, abbreviations that aren't skills)
    "CDC Data": null,
    "BRFSS": null,
    "SDG": null,
    "MNIST": null,
    "IMDb Data": null,
    "Census Data": null,
    "Google Trends": null,
    "LIF": null,
    "Microsoft Project Malmo": null,
    "Minecraft": null
};

// Function to consolidate a skill
export function consolidateSkill(skill) {
    if (skillConsolidation.hasOwnProperty(skill)) {
        return skillConsolidation[skill]; // Returns null if should be removed, or new name if consolidated
    }
    return skill; // Keep as-is if not in mapping
}

// Function to consolidate an array of skills
export function consolidateSkills(skills) {
    const consolidated = new Set();
    
    for (const skill of skills) {
        const consolidatedSkill = consolidateSkill(skill);
        if (consolidatedSkill !== null) {
            consolidated.add(consolidatedSkill);
        }
    }
    
    return Array.from(consolidated).sort((a, b) => 
        a.toLowerCase().localeCompare(b.toLowerCase())
    );
}

