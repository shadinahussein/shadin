import React from "react";
import Container from "react-bootstrap/Container";
import TabList from "./TabPanel";
import "../styles/Experience.css";

  
export default function Experience() {
  
    return (    
        <div id="experience"> 
        
            <div className="section-header">    
                <span className="section-title">/ experience</span>
            </div>

            <Container fluid className="experience-content">
                <TabList></TabList>
            </Container>
        </div>
    );
};

