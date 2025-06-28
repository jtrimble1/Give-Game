import React from 'react';
import './InfoSections.css'


function InfoSections () {

    const sections = [
        {
            title: 'Team',
            image: '/Assets/team_icon.png',
            description: 'Provides landing pages. Allows teams to build their own profile to include a picture, roster information, and fundraising goals.'

        },
        {
            title: 'Donors',
            image: '/Assets/piggy_bank_icon.png',
            description: 'Provides opportunities to give to their favorite teams and receive financial records acknowledging their donations. Allows donors to build their own page for teams they support.'
        },
        {
            title: 'Sponsors',
            image: '/Assets/sponsor_icon.png',
            description: 'Provides valuable advertising opportunites while simultaneously maximizing goodwill throughout the community.'
        }
    ];

    return (
        <div className="info-sections">
            {sections.map((section, index) => (
                <div key={index} className="info-card">
                    <img src={section.image} alt={section.title} className="info-logo" />
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                </div>
            ))}

        </div>


    )
}

export default InfoSections;