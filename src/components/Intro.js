import React from "react";
import Container from "react-bootstrap/Container";
import "../styles/Intro.css";
import { ReactTyped } from "react-typed";


function Intro() {
    return (
        <div id="intro">
            <Container fluid>
                <h1>
                    <ReactTyped
                        strings={['merhaba, <span class="intro-name">Shadin</span> here :)']}
                        typeSpeed={55}
    
                    />
                </h1>

                <p className="intro-text">I am a software engineer from Austin, Texas. 
                    I am passionate about exploring the various aspects of
                     technological developments through design and full-stack engineering.</p>
            </Container>
        </div>
    );
}
export default Intro