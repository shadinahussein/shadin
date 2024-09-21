import React,  { useState } from "react";
import { Tab, Tabs, useMediaQuery } from "@mui/material";
import "../styles/Experience.css";
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';


function ExpTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ flex: 1, padding: 3 }}>{children}</Box>}
      </div>
    );
}

  
ExpTabPanel.propTypes = {
children: PropTypes.node,
index: PropTypes.number.isRequired,
value: PropTypes.number.isRequired,
};

function a11yProps(index) {

    return {
        id: `vertical-tab-${index}`,
    //   'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const TabList = () => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const handleTabChange = (e, tabIndex) => {
        setCurrentTabIndex(tabIndex);
      };
    
    const isSmallScreen = useMediaQuery('(max-width: 800px)');


    const experienceItems =  {
        "Dell Technologies": {
            role: "Software Engineer Intern",
            duration: "May 2024 - August 2024",
            description: [
                "Developed and deployed an XGBoost ML model using Docker to automate the analysis and error triage of validation test suites, enhancing efficiency",
                "Integrated and trained ML analysis models on 1,172 test suites using Python, boosting productivity by 41%",
                "Collaborated with global teams to validate and launch the solution across two business units, ensuring company-wide adoption"
                ]
        },

        "Intel Corporation": {
            role: "Software Engineer Intern",
            duration: "May 2022 - December 2022",
            description: [
                "Modernized build plans and design strategies for a network productivity software product, integrated across all Intel PC products, resulting in a significant 30% performance increase",
                "Built and executed over 50 automated Python and Java scripts to evaluate the functionality of software products, analyze data and quantify business impact",
                "Developed proof-of-concept implementation of automated testing flows to analyze improvements in testing productivity",
                "Managed weekly intern social events as a cohort leader of 36 interns"
            ]
        }, 

        "Austin Technology and Management": {
            role: "Project Manger Intern",
            duration: "May 2018 - August 2018",
            description: ["Coordinated a project in 9 weeks aimed at developing a program using Ruby on Rails to build an interactive web application ensuring paperless and effective communication between over 1,000 employees of the City of Austin Departments",
                "Won 1st place out of 20 team for achieving reduction of 30x in time communication among the resource management team and City of Austin employees"] 
                
        },

        "University of Texas at Austin": {
            role: "Computer Science Academic Student Mentor",
            duration: "August 2021 - May 2024",
            description: ["Lead weekly seminars and conducted one-on-one sessions regarding student resources and professional development to insure freshman and transfer students’ success"]
        }
    }

    return(
        <div clasName= "tablist-container" 
            style={{display: 'flex', flexDirection: isSmallScreen ? "column" : "row"}}>
            <Tabs
                orientation= {isSmallScreen ? "horizontal" : "vertical"}
                variant="scrollable"
                value={currentTabIndex}
                onChange={handleTabChange}
                className="tabs-job-company">
                {Object.keys(experienceItems).map((item, index) => (
                    <Tab className= "exp-tab-title" label={item} {...a11yProps(index)} />
                ))}
            </Tabs>

            {Object.keys(experienceItems).map((key, i) => (
                <ExpTabPanel value={currentTabIndex} index={i}>
                    <span className="tablist-job-role">
                        {experienceItems[key]["role"] + " @"}
                    </span>
                    <br />
                    <span className="tablist-job-company">{key}</span>
                    <div className="tablist-duration">
                        {experienceItems[key]["duration"]}
                    </div>
                    <ul className="job-description">
                        {experienceItems[key]["description"].map(function (descItem, i) {
                        return (
                            <li key={i}>{descItem}</li>
                        );
                        })}
                    </ul>
                </ExpTabPanel>
            ))}            
        </div>
    )
};

  export default TabList;