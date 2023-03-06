import fitnessZone from '../images/fitnessZone.png'
import portfolio from '../images/portfolio.png'
import codeQuiz from '../images/codeQuiz.png'
import shopifyStore from '../images/shopifyStore.png'
import techBlog from '../images/techBlog.png'
import topTunes from '../images/topTunes.png'

let projects = [
    {
        href: "https://github.com/aramic11/workout-app/",
        src: fitnessZone,
        alt: "Workout App Repo.",
        title: "The Fitness Zone",
        tech: "Handlebars, Node, MySQL, Heroku, NodeMailer",
        description: "Fitness Zone is an app that helps users improve their health by tracking exercise data and visualizing progress."
    },
    {
        href: "https://aramic11.github.io/portfolio/",
        src: portfolio,
        alt: "Website with an about me and projects section.",
        title: "Portfolio",
        tech: "HTML, CSS",
        description: "Basic portfoilio with the different projects I've worked on."
    },
    {
        href: "https://aramic11.github.io/code-quiz/",
        src: codeQuiz,
        alt: "Image of Code Quiz.",
        title: "JavaScript Quiz",
        tech: "Javascript, CSS",
        description: "Test your JavaScript knowledge by taking a quick timed quiz."
    },
    {
        href: "https://github.com/aramic11/shopify-store",
        src: shopifyStore,
        alt: "Insomnia page containing backend routes.",
        title: "Shopify Store Backend",
        tech: "express.js, node.js, MySQL",
        description: "Route URL requests to create, read, update, and delete data in your MySQL database."
    },
    {
        href: "https://github.com/aramic11/tech-blog",
        src: techBlog,
        alt: "Tech Blog Dashboard",
        title: "Tech Blog",
        tech: "node.js, javascript, express.js, SQL and Handlebars",
        description: "Tech blog with full posting and commenting capabilities for registered users."
    },
    {
        href: "https://aramic11.github.io/project_top_tunes/",
        src: topTunes,
        alt: "Top Tunes Main Page",
        title: "Top Tunes",
        tech: "Bulma, JavaScript jQuery Server-Side APIs: Deezer APIs and YouTube APIs",
        description: "Website to search up any artist and find their top 5 most popular songs"
    }

];

export default projects;