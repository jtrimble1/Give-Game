import React, { useEffect, useState, useRef } from 'react';
import './HomeSections.css'


const teamMembers = [
    {
        name: 'Matthew Friters',
        role: 'Founder & CEO',
        favorite_sport: 'Football, Baseball',
        background: 'Johns Hopkins University (MBA) and United States Military Academy (BS Econ), US Army (17 Years), US Space Force (3 Years)',
        bio: `Matt came up with the concept of Give&Game, as a father that went through multiple moves during his career. During his time at Johns Hopkins MBA, he created Give&Game. He’s passionate about helping his community and getting kids involved in activities, sports and STEM programs.`,
        image: '/Assets/Facebook.png'
    },

    {
        name: 'Jamiel Trimble',
        role: 'Lead Developer & CTO',
        favorite_sport: 'Football, Track & Field, Basketball',
        background: 'Maryville University (MS Cybersecurity) and United States Air Force Academy (BS Geoscience), US Space Force (7 Years)',
        bio: 'Former collegiate and professional track & field athlete, represented Team USA on multiple occasions. I have been involved in sports essentially my entire life. I am passionate about finding ways to give back and helping others achieve their athletic goals',
        image: '/Assets/IMG_3358_Original.JPG'
    },

    {
        name: 'Stephen Sallan',
        role: 'Co-Founder and CTO',
        background: `King's College London (MA), Hamilton College (BA)`,
        favorite_sport: 'Hockey, Baseball',
        bio: `Stephen brings extensive experience from both private and public sectors, along with years of administering millions of grant dollars in the non-profit sector. As a former middle school baseball coach and current Army Reserve member, he understands the importance of youth development and community service. He's passionate about civics and impacting communities at the local level.`,
        image: '/Assets/1516975634508.jpg'
    }
]



function HomeSections() {
    // const [fadeIn, setFadeIn] = useState(false);
  
    // useEffect(() => {
    //   const timeout = setTimeout(() => setFadeIn(true), 300);
    //   return () => clearTimeout(timeout);
    // }, []);

    const missionRef = useRef(null);
    const teamRef = useRef(null);

    const [missionVisible, setMissionVisible] = useState(false);
    const [teamVisible, setTeamVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === missionRef.current && entry.isIntersecting) {
            setMissionVisible(true);
          }
          if (entry.target === teamRef.current && entry.isIntersecting) {
            setTeamVisible(true);
          }
        });
      },
      { threshold: 0.2 } // Adjust sensitivity here
    );

    if (missionRef.current) observer.observe(missionRef.current);
    if (teamRef.current) observer.observe(teamRef.current);

    return () => {
      if (missionRef.current) observer.unobserve(missionRef.current);
      if (teamRef.current) observer.unobserve(teamRef.current);
    };
  }, []);
  
    return (
        <div className="home-sections">
        <section
          ref={missionRef}
          className={`mission-section ${missionVisible ? 'fade-in' : ''}`}
        >
        <div className='mission-content'>
        <h2 className="mission-title">Our Mission</h2>
          <p className="mission-text">
                The idea for Give&Game started in Baltimore, Maryland. The Give&Game team,
                comprised of Army, Air Force and Space Force Veterans, came together with a shared
                passion: Making a difference in the community by giving kids and families equal
                opportunities to participate in Youth Sports and Activities.
          </p>
        </div>
        </section>
        <div className="divider"></div>
        <section
          ref={teamRef}
          className={`team-section ${teamVisible ? 'fade-in' : ''}`}
        >
          <h2 className="section-title meet-title">Meet the Team</h2>
          {teamMembers.map((member, index) => (
            <div
              className={`team-member ${index % 2 === 0 ? 'left' : 'right'}`}
              key={index}
            >
              <img src={member.image} alt={member.name} />
              <div className="bio-text">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
  
  export default HomeSections;