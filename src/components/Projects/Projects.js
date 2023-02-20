import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import newsapp from "../../Assets/Projects/newsApp.png";
import textutils from "../../Assets/Projects/textUtils.png";
import todolist from "../../Assets/Projects/todoList.png";
import tictac from "../../Assets/Projects/ticTacT.png";
import pfolio from "../../Assets/Projects/pfolio.png";
import emotion from "../../Assets/Projects/emotion.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsapp}
              isBlog={false}
              title="NewsApp"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/NikhilPal002/NewsApp"
              // demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isBlog={false}
              title="TextUtils"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/NikhilPal002/TextUtils"
              // demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="ToDo-List Application"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/NikhilPal002/ToDoListApp"
              // demoLink=" "              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictac}
              isBlog={false}
              title="TicTacToe Game App"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/NikhilPal002/TicTacToe"
              // demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pfolio}
              isBlog={false}
              title="Portfolio"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/NikhilPal002/portfolio_website"
              // demoLink=" " <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
