import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import projects from './projects';

function ProjectSection() {
  const renderProject = (project, index) => (
    <Col xs={12} md={6} key={index}>
      <Card>
        <a href={project.href} target="_blank" rel="noopener noreferrer">
          <Card.Img variant="top" src={project.src} alt={project.alt} />
        </a>
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>
            {project.tech}
            <br />
            <span className='card-subtext'>{project.description}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <section className='projects'>
      <h2 id= "projects">Projects</h2>
      <Row>
        {projects.map((project, index) => renderProject(project, index))}
      </Row>
    </section>
  );
}

export default ProjectSection;
