import React, { useEffect, useState } from 'react';
import './AboutUs.css';

function AboutUs() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);


  return (
    // <div className="about-page">
    //   <h1>About Give & Game</h1>
    //   <p>
    //   The idea for Give&Game started in Baltimore, Maryland. The Give&Game team,
    //     comprised of Army, Air Force and Space Force Veterans, came together with a shared
    //     passion: Making a difference in the community by giving kids and families equal
    //     opportunities to participate in Youth Sports and Activities.
    //     The expenses for Youth Sports, Organizations, Charities, Veterans Groups, Churches,
    //     Teachers, School Clubs/ organizations, and activities are often very high, with a lot of
    //     work going into fundraising. Families have difficulty maximizing fundraising from
    //     community members, family, friends and coworkers with the traditional fundraising
    //     methods such as car washes, bake sales, raffles, benefit dinners, etc. Many families
    //     (including Military) move to new areas, where they need to reach out to family and
    //     friends across the country for support.
    //     The efforts year after year to traditionally raise funds for numerous activities sparked the
    //     idea: “There MUST be a better way!” Regardless of where kids and families live or what
    //     sport, activity or organization they want to participate in, cost should not be a barrier.
    //     Our goal is to make the fundraising experience easy, for as many teams, kids and
    //     families as possible. Give&Game wants to provide the opportunity for everyone to
    //     participate, connecting Teams or Organizations (Gamers) with those donors who want
    //     to help (Givers). The Give&Game platform allows for Basic Fundraising, Advanced
    //     Options to receive equipment through Amazon, and a total Premium Version that serves
    //     as the team Social Media platform – no more need to create your own!
    //     Our team strives to make your fundraising needs and goals easy so the kids, parents
    //     and coaches can concentrate on what matters – playing, learning, growing, friendship,
    //     and fun!
    //     ***A portion of the proceeds received by Give&Game will go to funding disadvantaged
    //     organizations/teams – Follow for more information (August 2025 Launch!)***
    //     “Be A Giver to Help Them Game!”

    //     The Give&Game Team!
    //   </p>
    // </div>

    <div className={`about-page ${fadeIn ? 'fade-in' : ''}`}>
      <div className="about-hero">
        <h1>About <span className="highlight">Give</span><span className="amp">&</span><span className="highlight-red">Game</span></h1>
        <p className="tagline">Be a Giver to Help Them Game!</p>
      </div>

      <div className="about-content">
        <p>
          The idea for Give&Game started in Baltimore, Maryland. The Give&Game team,
          comprised of Army, Air Force and Space Force Veterans, came together with a shared
          passion: making a difference in the community by giving kids and families equal
          opportunities to participate in Youth Sports and Activities.
        </p>

        <p>
          The expenses for Youth Sports, Organizations, Charities, Veterans Groups, Churches,
          Teachers, School Clubs, and activities are often high. Traditional fundraising methods
          like car washes, raffles, and benefit dinners can be time-consuming and limited.
        </p>

        <p>
          Many families (including Military) move frequently and need ways to reach family and
          friends across the country. These challenges sparked the idea: “There MUST be a better way!”
        </p>

        <blockquote className="quote">
          “Cost should not be a barrier.”
        </blockquote>

        <p>
          Give&Game connects <strong>Givers</strong> (supporters) with <strong>Gamers</strong> (teams or organizations) through an all-in-one platform offering basic and advanced fundraising, Amazon equipment
          registries, and even a premium team social hub—no more piecing together tools.
        </p>

        <p>
          A portion of proceeds will go to support disadvantaged teams. Stay tuned for our
          official launch in August 2025!
        </p>

        <h3 className="closing-line">Join the Movement. Make a Difference.</h3>
      </div>
    </div>
  );
}

export default AboutUs;