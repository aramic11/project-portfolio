import { MdMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
    return (
        <section className="contact">
            <a href="mailto:bosnianmula@gmail.com"><MdMail /></a>
            <a href="https://github.com/aramic11"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/ahmed-ramic-1abc/"><FaLinkedin /></a>
        </section>
    );
}

export default Contact;