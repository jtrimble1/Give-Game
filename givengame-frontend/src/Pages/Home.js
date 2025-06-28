import React from 'react'
import { Link } from "react-router-dom";
import Banner from '../Components/Banner';
import InfoSections from '../Components/InfoSections';
import HomeSections from '../Components/HomeSections';

function Home () {



    return (
        <div>
            <Banner />
            {/* <InfoSections /> */}
            <HomeSections />
        </div>
    )
};

export default Home;