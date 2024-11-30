import React from 'react';
import { experiences } from "../About/experiences";
import './Experience.css'; // Import custom CSS file

function Experience() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(null);

    return (
        <div className="experience-container">
            <div className="experience-timeline">
                {/* Creating the dividing line */}
                <div className="line-wrapper">
                    {experiences.map((_, index) => (
                        <div
                            key={index}
                            className={`line-segment ${selectedItemIndex !== null && index <= selectedItemIndex ? 'highlighted' : ''}`}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="experience-items">
                {experiences.map((experience, index) => (
                    <div
                        key={experience._id} // Ensure unique keys for each item
                        className="experience-item"
                        onClick={() => setSelectedItemIndex(index)} // Change the index on click
                        style={{ cursor: 'pointer' }} // Pointer style on hover
                    >
                        <h1
                            className={`experience-period ${selectedItemIndex === index ? 'selected-period' : ''}`}
                        >
                            {experience.period}
                        </h1>
                    </div>
                ))}
            </div>

            {/* Fixed data container */}
            <div className="experience-details-container">
                {selectedItemIndex !== null && (
                    <div className="experience-details">
                        <h2>{experiences[selectedItemIndex].title}</h2>
                        <p>{experiences[selectedItemIndex].description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Experience;
