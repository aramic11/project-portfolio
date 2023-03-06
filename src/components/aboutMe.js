import resume from '../images/Resume.pdf'
import Button from 'react-bootstrap/Button';

function AboutMe() {
    return (
        <section id= "aboutMe" className="aboutMe">
            <h2>"Be the change you wish to see in the world" - Gandhi</h2>
            <p>
            Hello, I'm Ahmed, a software engineer based in New Hampshire. My passion lies in developing creative and practical solutions to real-world problems using my coding expertise. I have a diverse set of skills and am proficient in working with a variety of programming languages and frameworks, such as HTML, CSS, JavaScript, React, and Node.js. I'm always eager to learn and tackle new challenges, consistently pushing my limits to expand my skillset and knowledge. Prior to my transition into software development, I spent several years working as an accountant, honing my knowledge of business operations and financial management. This experience has equipped me with a well-rounded problem-solving mindset and an ability to work collaboratively with teams. When I'm not programming, I indulge in sports, traveling, and trying out new culinary delights. I am also passionate about giving back to the community and actively volunteer at local charities and non-profit organizations.
            </p>
            <a href={resume} download="resume" target="_blank" rel="noreferrer">
                <Button variant="outline-secondary">Download Resume</Button>
            </a>
        </section>
    );
}

export default AboutMe;