import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../styles/AboutMe.css";


export default function About() {
    const bio = ( <p> I am currently a <b>software engineering intern</b> at <a href='https://www.dell.com'>Dell Technologies</a>, working under the OEM sector. Subsequently, I am pursuing a <b> Bachelor's of Science in Computer Science</b> at the <a href='https://www.utexas.edu'>University of Texas at Austin</a>. </p>);

    const techStack = [
    "Python",
    "React.js", 
    "JavaScript ES6+",
    "Java",
    "Swift"];

    const funFacts = ( <p> Outside of work, I love tricking myself into being active outdoors by rewarding myself with exploring new coffee shops afterwards. I also enjoy reconnecting with my culture through pottery and crafting.</p>);

    return (    
        <div id="about"> 
        
            <div className="section-header">    
                <span className="section-title">/ about me</span>
            </div>

            <Container fluid className="about-content">
                {/* <Row> */}
                <Col className="section-body">
                    {bio}
                    <p>Some technologies I've been recently working with:</p>

                        {/* <div className="tech-stack-container"> */}
                            <Row className="tech-stack-row">
                                <Col >
                                    <ul className="tech-stack">
                                        {techStack.slice(0,3).map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </Col>
                                <Col>
                                    <ul className="teck-stack">
                                        {techStack.slice(3).map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </Col>
                            </Row>
                        {/* </div> */}

                        {funFacts}

                </Col>

                <Col className="section-image">
                    <img src={`${process.env.PUBLIC_URL}/Shadin.png`} alt="Shadin Hussein"></img>
                </Col>


                
               {/* </Row>  */}

            </Container>
        </div>
    );
}