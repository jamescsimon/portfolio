// Centralized planet data for all solar systems
// This file contains all the project information for each planet in each solar system

export const solarSystemData = {
    blue: {
        name: "Interactive Media Design",
        sunTexture: './images/blue.png',
        planets: [
            {
                name: "Interactive Media Design",
                description: "Projects Timeline",
                visitability: "Explore!",
                overview: "",
                projectDesc: "",
                skills: [],
                size: 16,
                position: 0,
                texture: './images/blue.png',
                gif: null,
                isSun: true
            },
            {
                name: "BREAK",
                description: "Passion project | 2023+",
                visitability: "In Progress",
                overview: "As Technical Director and Co-Founder I led a multifaceted team of game engine programmers, game designers, scriptwriters, among others. I mapped out system architecture and mitigated potential issues, tailored U.I./U.X. to experience goals using Q.A. feedback data, and aided game programming/designing when needed.",
                projectDesc: "A 2-4 hour long slasher horror game that draws inspiration from both Until Dawn and Mean Girls. Most of the game was shot with film, and then put into a game engine to construct a branching story with 33 endings. Still in production, we plan on finishing the game in 2026.",
                skills: ["C# for Unity", "Game Design/Development", "Project Planning/Management", "Software Architecture & Development", "Team Collaboration/Communication", "U.I./U.X. Design"],
                size: 4,
                position: 119,
                texture: './images/mercury.jpg',
                gif: '/images/BREAK.gif'
            },
            {
                name: "Cat Counselor",
                description: "Sloan Grant application | 2023-24",
                visitability: "Demo Only",
                overview: "Advised by educational pyschologist Dr. Eun Park, I wrote out a detailed design document outlining all facets of the mobile game. I used this document as reference to make a Unity game alongside a game artist to develop a demo.",
                projectDesc: "A mobile game first developed from a Sloan Grant games pitch that aimed to teach children anxiety coping mechanisms. It follows a retired psychologist guiding feline clientele through cognitive behaviour therapies with hopes to empower kids to utilize them to conquer their own anxieties.",
                skills: ["C# for Unity", "Game Design/Development", "iOS Mobile App Development", "Project Planning/Management", "Technical Writing/Documentation", "U.I./U.X. Design"],
                size: 4.3,
                position: 270,
                texture: './images/venus.jpg',
                gif: '/images/CatCounselor.gif'
            },
            {
                name: "Butterflies",
                description: "First game on Steam! | 2023",
                visitability: "Visit",
                overview: "Made alongside amazing film, game art, and screenwriting students as part of school curriculum to construct a transmedia project. I designed the game mechanics, programmed the game in Unity with C#, and integrated playtester feedback to best meet user experience goals. From this opertunity we were allowed to present at a showcase event.",
                projectDesc: "A branching story following a girl navigating the stereotypical experiences that go along with moving into college. The choices you make change the medium itself, if you remove her autonomy the player too loses control and it becomes a movie.",
                skills: ["C# for Unity", "Game Design/Development", "Project Planning/Management", "Q.A. Testing & Data Analysis", "Team Collaboration/Communication", "Technical Writing/Documentation", "U.I./U.X. Design"],
                size: 4.4,
                position: 360,
                texture: './images/earth.jpg',
                gif: '/images/ButterfliesTrailer.gif'
            },
            {
                name: "Blackout",
                description: "First passion project | 2019-23",
                visitability: "Visit",
                overview: "My first game conquest, made in Roblox Studio with Lua, saw me write up a design document, make assets in Blender, familarize myself with post-processessing and shader programming, and the semantics of game development as a whole. I give much credit to this project for unlocking my passions for game design/development and gameplay programming, even if it was horribly overscoped.",
                projectDesc: "The game follows an intergalactic newspaper boy on a quest to save his robot companion. Along the way, he collects memory fragments that, when combined, reveal the story was a coma-induced dream being narrated by his mother reading a storybook at the hospital.",
                skills: ["Blender Modeling", "Lua for Roblox Studio", "Game Design/Development", "Post-Processing and Shaders", "Technical Writing/Documentation", "U.I./U.X. Design"],
                size: 4.2,
                position: 480,
                texture: './images/mars.jpg',
                gif: '/images/blackout.gif'
            },
        ]
    },
    
    pink: {
        name: "Artificial Intelligence / Machine Learning",
        sunTexture: './images/pink.png',
        planets: [
            {
                name: "Artificial Intelligence / Machine Learning",
                description: "Projects Timeline",
                visitability: "",
                overview: "",
                projectDesc: "",
                skills: [],
                size: 16,
                position: 0,
                texture: './images/pink.png',
                gif: null,
                isSun: true
            },
            {
                name: "Preliminary Script Scorer (PSS)",
                description: "AI Engineer Internship | Summer 2025",
                visitability: "Visit",
                overview: "I was tasked with building a more technologically robust Preliminary Script Scorer model that starts by leveraging NLP but is set up to train itself further using human feedback within a web application and deduce which patterns are most indicative of a decorated screenplay.",
                projectDesc: "I combined TF-IDF text vectorization, regression algorithms (Random Forest, Gradient Boosting, Linear/Ridge), ensemble methods, and custom feature engineering on a dataset of 1,455 screenplays and their respective metadata. This new model improved accuracy by 24.41% over the legacy version and now predicts critic reception within 1 point (out of 10) for 97% of scripts, with 85% of predictions falling within half a point. This gave the studio a much more trustworthy greenlighting tool at the preliminary stages.",
                skills: ["Python", "Natural Language Processing", "SQLite", "Web Development", "U.I./U.X. Design", "User Analytics", "Machine Learning", "Data Engineering", "Technical Writing/Documentation", "Team Collaboration/Communication", "Project Planning/Management"],
                size: 3.2,
                position: 119,
                texture: './images/mercury.jpg',
                gif: '/images/new_tower.png'
            },
            {
                name: "Genre Distribution Coefficients (GDC)",
                description: "AI Engineer Internship | Summer 2025",
                visitability: "Visit",
                overview: "I realized boolean genre tags were not sufficient to capture the nuances of a screenplay's genre, as stories almost always span many. I therefore created an NLP model that quantifies the distribution of genres within a screenplay by clustering narrative flow patterns and determining variance, using the same 1,455 labeled script dataset as the PSS model.",
                projectDesc: "N-gram, Bag of Words, and TF-IDF text vectorization based models were used to determine the alignment of a screenplay's narrative flow to major genre tags. After experimenting with the different models, I was both surprised and pleased to find that the Bag of Words model alone was enough to determine genre-related insights, while the other models provided impressive but unnecessary detail.",
                skills: ["Python", "Natural Language Processing", "SQLite", "Machine Learning", "Data Engineering", "Technical Writing/Documentation", "Team Collaboration/Communication", "Project Planning/Management"],
                size: 4.2,
                position: 270,
                texture: './images/venus.jpg',
                gif: '/images/GDC_ex.gif'
            },
            {
                name: "Target Audience Calculator (TAC)",
                description: "AI Engineer Internship | Summer 2025",
                visitability: "Visit",
                overview: "With the PSS and GDC models in hand, I set out to design a model that would determine the demographic makeup of a script's target audience based on THEME Reports on demographics of known titles as well as IMDb's regional demographic data. This tool helped with the financial planning of film production, as it aimed to quantify the total addressable market to the ticket count using the multimodal input of the screenplay's logline and historical demographic and market data.",
                projectDesc: "I experimented with a range of models to determine the optimal granularity of features based on my limited sample set from THEME Reports, historical market and demographic data. After iterating through approaches, I found that Partial Least Squares Regression was the most effective model given the sample size. By expanding the model, doing extensive feature relevance analysis, and introducing loglines as a stand-in for screenplay contents, I was able to bring the model’s confidence interval to sensible results.",
                skills: ["Python", "Natural Language Processing", "SQLite", "Machine Learning", "Data Engineering", "Technical Writing/Documentation", "Team Collaboration/Communication", "Project Planning/Management"],
                size: 4.5,
                position: 360,
                texture: './images/earth.jpg',
                gif: '/images/TAC_ex.gif'
            },
            {
                name: "Cast & Crew Payments (CCP), Non-Personnel Cost Projection (NCP)",
                description: "AI Engineer Internship | Summer 2025",
                visitability: "Visit",
                overview: "To help my colleague with their financial planning interface, I designed a model that would predict the budget of a film based on historical IMDb cast and crew data combined with internet presence metrics. The Non-Personnel Cost Projection was derived from the difference between the predicted budget and the standard rates of the cast and crew found by my colleague's research.",
                projectDesc: "After downloading nearly the entirety of IMDb, I designed a model that incorporated cast and crew’s estimated internet prevalence using Google Trends data prior to release. In collaboration with my colleague, we separated the cast into brackets of expected payments and then used historical industry rates to fill in all needed crew and investor returns. While further work is needed to automate this process from the script alone, this provided a strong starting framework.",
                skills: ["Python", "SQLite", "Web Development", "Machine Learning", "Data Engineering", "Technical Writing/Documentation", "Team Collaboration/Communication", "Financial Budgeting", "Microsoft Excel"],
                size: 3.8,
                position: 450,
                texture: './images/mars.jpg',
                gif: '/images/new_tower.png'
            },
            {
                name: "Funding vs Revenue Graph (FRG)",
                description: "AI Engineer Internship | Summer 2025",
                visitability: "Visit",
                overview: "With the goal of being able to visualize all possible financial outcomes of a film, I designed one graph to plot not just budget and projection but also confidence interval, min and max projections, break-even point, maximum return on investment, year of release, and genres for marketing.",
                projectDesc: "Using a self-curated dataset of 3,062 films (1,455 with screenplays), I compared XGBoost, Random Forest, and Gradient Boosting Regressor models, and found that a combination of models was most effective. I then trained a simple network on the model predictions to weight them appropriately by screenplay context, improving accuracy by 8% to an R² of 0.58.",
                skills: ["Python", "Natural Language Processing", "SQLite", "Machine Learning", "Data Engineering", "Technical Writing/Documentation", "Team Collaboration/Communication", "Project Planning/Management", "Financial Budgeting", "Microsoft Excel"],
                size: 4.2,
                position: 540,
                texture: './images/venus.jpg',
                gif: '/images/FRG_ex.png'
            },
            {
                name: "Reader Sentiment Estimator (RSE) & Reader Retention Estimator (RRE)",
                description: "AI Engineer Internship | Summer 2025",
                visitability: "Visit",
                overview: "INTERDEPENDENT Studios is a startup that leverages real human feedback using embedded telemetry and surveys to train machine learning models for greenlighting decisions from the script alone. Two of the most important signals are reader sentiment and retention, so I designed a model to predict both directly from screenplay content, without requiring human feedback.",
                projectDesc: "I developed a model using NLP feature extraction and regression techniques to predict the likelihood of a reader's sentiment and retention. While we do not yet have a large enough labeled dataset to validate accuracy with statistical significance, the framework is ready and will improve as more human feedback is collected.",
                skills: ["Python", "Natural Language Processing", "SQLite", "Machine Learning", "Data Engineering", "Technical Writing/Documentation", "Team Collaboration/Communication", "Project Planning/Management", "User Analytics", "U.I./U.X. Design"],
                size: 4.5,
                position: 630,
                texture: './images/mercury.jpg',
                gif: '/images/RSERRE_ex.gif'
            },
            {
                name: "Theatrical Localization Prioritization (TLP)",
                description: "AI Engineer Internship | Summer 2025",
                visitability: "Visit",
                overview: "I was tasked with designing a model to rank theatrical markets for each film based on the screenplay data and prior models, so the marketing team could prioritize resources for maximum impact down to the theatre level.",
                projectDesc: "The most difficult challenge was achieving the requested granularity without detailed theater data. For now, I used Partial Least Squares Regression to match a screenplay’s target market with city demographics, supported by historical census data to improve confidence. The prototype successfully identified promising markets, with future work focused on adding real-world theater datasets for precision targeting.",
                skills: ["Python", "SQLite", "Web Development", "Machine Learning", "Data Engineering", "Technical Writing/Documentation", "Team Collaboration/Communication", "Microsoft Excel"],
                size: 3.8,
                position: 720,
                texture: './images/mars.jpg',
                gif: '/images/new_tower.png'
            },
        ]
        
    },
    
    yellow: {
        name: "Physics Simulations & Game Engines",
        sunTexture: './images/yellow.png',
        planets: [
            {
                name: "Physics Simulations & Game Engines",
                description: "Projects Timeline",
                visitability: "",
                overview: "",
                projectDesc: "",
                skills: [],
                size: 16,
                position: 0,
                texture: './images/yellow.png',
                gif: null,
                isSun: true
            },
            {
                name: "Fluid Sim",
                description: "Personal project | 2025+",
                visitability: "",
                overview: "This project provided a foundation in simulating realistic fluid behaviors, improving my understanding of physics-based rendering and dynamics programming.",
                projectDesc: "Followed tutorials online to self-instruct basics on fluid dynamics simulations, along with course work on physics programming and rendering for game engines. Not yet at a stage of completion.",
                skills: ["C# for Unity", "Physics Programming", "Simulation Development"],
                size: 3.2,
                position: 119,
                texture: './images/mercury.jpg',
                gif: '/images/inProgress.gif'
            },
            {
                name: "Quant.io",
                description: "Harvard Quantumn Shorts Submission | 2025",
                visitability: "",
                overview: "3D multiplayer .io game inspired by Agar.io, incorporating quantum mechanics principles into its core gameplay. The goal is to teach quantum mechanics in a fun and engaging way through strategic interactions.",
                projectDesc: "Prospective submission to the Harvard Quantumn Shorts Contest, which has yet to be announced for 2025. Not yet at a stage of completion.",
                skills: ["C# for Unity", "Game Design/Development", "Physics Programming", "Quantum Mechanics", "Simulation Development", "Technical Writing/Documentation"],
                size: 5.8,
                position: 270,
                texture: './images/venus.jpg',
                gif: '/images/quant.gif'
            },
            {
                name: "Three-body Portfolio",
                description: "Portfolio Website | 2024+",
                visitability: "",
                overview: "Designed, programmed, and deployed--this was my first attempt at making a perfesional website from scratch. This project taught me the basics of both web development and simulating complex celestial systems.",
                projectDesc: "Developed from scratch using modern web technologies, this website showcases my ability to integrate 3D simulations with three.js while building a (hopefully) clean and responsive portfolio.",
                skills: ["Blender Modeling", "Full Stack Web Development", "Physics Programming", "Post-Processing and Shaders", "Three.js", "U.I./U.X. Design"],
                size: 6,
                position: 360,
                texture: './images/earth.jpg',
                gif: '/images/inProgress.gif'
            },
            {
                name: "Sims & DI",
                description: "USC Rocket Propulsion Lab | 2024+",
                visitability: "",
                overview: "Refactor dated code to be more concise and efficient within modern infrastructure, generated simulations for engine combustion based on fuel composition, and updated online materials ordering service for the engineering teams.",
                projectDesc: "Membership in this club at my university has tasked me with familarizing myself with git, collaborative coding enviroments, and aerospace engineering in general.",
                skills: ["Collaborative Coding", "Full Stack Web Development", "Git Workflows", "Physics Programming", "Simulation Development", "U.I./U.X. Design"],
                size: 4,
                position: 480,
                texture: './images/mars.jpg',
                gif: '/images/inProgress.gif'
            }
        ]
    }
};

// Helper function to get data for a specific solar system
export function getSolarSystemData(systemName) {
    return solarSystemData[systemName] || null;
}

// Helper function to get planet data for a specific solar system
export function getPlanetData(systemName, planetIndex) {
    const system = solarSystemData[systemName];
    if (system && system.planets[planetIndex]) {
        return system.planets[planetIndex];
    }
    return null;
}

// Helper function to get the number of planets in a solar system
export function getPlanetCount(systemName) {
    const system = solarSystemData[systemName];
    return system ? system.planets.length - 1 : 0; // -1 because first is the sun
}
