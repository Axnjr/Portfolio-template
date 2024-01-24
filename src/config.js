// - Change the site title and icon in the index.html file before deploying
// - If found usefull, then be kind and give it a star and fork on github :)

export const portfolioConfig = {
    // message to show on loading
    welcomeMessage: `Your welcome message !`,

    name:"Your Name",

    // title to be displayed only 4 words not more not less due to 
    // limited screen size and responsiveness isssues
    title:[
        "Add",
        "Your",
        "Title",
        "Here"
    ],

    // second section of the portfolio
    showcaseBreif: `
        A developer dedicated to crafting websites with great attention to scalability,
        performance and details, living on planet Earth, based in Mumbai, India.
    `,

    // list all your skills as a string seprated with a space
    skills:"React React-native Next TypeScript nodeJs express Css Gsap Python",

    aboutYou1: `
        Indeed a fresher in the industry, but I already have 4+ years of experience in programming,
        30+ meaningful projects no clones. Above is my overflowing tech stack. 
        I'm currently working on Blazze.js
    `,

    aboutYou2: `
        I'm pursing engineering in AIML, currently in my third year of college.
        Feel free to contact me if you have a referral for me, want to collaborate on future projects,
        or have a little chat.
    `,

    // Add upto 7 projects ...
    // - First value of array : Project year
    // - Second value of array: project name
    // - Third value of array : Project tags
    // - Fourth value of array: Project link
    projects:[
        [
            "2024",
            "Blazze.js",
            "Backend, Core Development, Express, Nodejs, Typescript",
            "https://github.com/Axnjr/Blazze.js"
        ],
        [
            "2024",
            "Portfolio Template",
            "Design, opensource, template, UI, Portfolio",
            "https://github.com/Axnjr/",
        ],
        [
            "2023",
            "Free AI",
            "Full-Stack, SAAS, AI, API's",
            "https://github.com/Axnjr/FreeAI-APIServices",
        ],
    ],

    // link to your socials add upto 5
    links:[
        {
            name:"Github",
            href:""
        },
        {
            name:"Resume",
            href:""
        },
        {
            name:"LinkedIn",
            href:""
        }
    ],

    // A array of arrays having the two color combinations
    // ex: [ ["black", "deeppink"], ["white", "purple"], ... ]
    // let it be undefined if you want default color configurations
    yourColorSchema: undefined

    // - Change the site title and icon in the index.html file before deploying
}