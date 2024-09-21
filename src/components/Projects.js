import React from "react";
import OpenInBrowserRoundedIcon from '@mui/icons-material/OpenInBrowserRounded';
import "../styles/Projects.css";
import Card from 'react-bootstrap/Card';



const projectsList = () => {
    const projects = {
        "Momento": {
            type: "iOS App",
            description: "An iOS app that allows users to share their favorite moments with their friends through daily entries",
            techStack: ["Figma", "Swift", "Firebase"]
        },

        "Jamify" : {
            type: "Andriod App",
            description: "An Android app that allows users to share their favorite tracks and opinions with their friends",
            techStack: ["Figma", "Kotlin", "Firebase", "Api"]

        },

        "PrepUp" : {
            type: "Web Design",
            description: "A website application enabling recipe search and seamless meal prep planning using Google Firebase and meal APIs",
            techStack: ["Figma", "HTML", "CSS", "JavaScript", "Firebase"],
            externalLink: "https://www.figma.com/proto/DhKTR0UhmuGecT03Y3QBZr/PrepUp-Design?node-id=1-482&node-type=frame&t=aLbO5gWShKsq0pJ1-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
        },

        "Distributed MapReduce": {
            type: "Algorithm",
            description: "Developed and executed big dataset sorting and map reduction analysis in Hadoop utilizing socket servers connections and concurrency to distribute computation among 5 Google Cloud machines", 
            techStack: ["Google Cloud", "Java" ]
        }

    }

    return (
        <div id="projects">
            < div className="section-header">    
                <span className="section-title">/ projects</span>
            </div>

            <div className="projects-grid">
                {Object.keys(projects).map((key) => (
                    <Card className="project-card">
                        <Card.Body className="project-card-body">
                            <div className="project-header">
                                <Card.Title className="project-title">
                                    {key}</Card.Title>
                               
                                {projects[key]["externalLink"] && <a href={projects[key]["externalLink"]}> <OpenInBrowserRoundedIcon /> </a> 
                                }
                            </div>
                            {/* <Card.Subtitle className="mb-2 text-muted">{projects[key]["type"]}</Card.Subtitle> */}
                            <Card.Text className= "project-description">
                                {projects[key]["description"]}
                            </Card.Text>
                            <Card.Text className= "project-tech-stack">
                                {projects[key]["techStack"].join(', ')}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>

        </div>
    )
}

export default projectsList;