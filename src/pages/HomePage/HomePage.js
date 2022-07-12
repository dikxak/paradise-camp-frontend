import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from '../../components/ui/Navbar/Navbar';
import HomeSection from './HomeSection/HomeSection';

const HomePage = props => {
  const [spotDataPicnic, setSpotDataPicnic] = useState([]);
  const [spotDataCamping, setSpotDataCamping] = useState([]);

  const getSpotData = async type => {
    const res = await axios.get(`http://localhost:90/spots/type=${type}`);
    console.log(res.data);
    return res.data.data;
  };

  useEffect(() => {
    getSpotData('Picnic')
      .then(data => {
        setSpotDataPicnic(data);
      })
      .catch(err => console.log(err));

    getSpotData('Camping')
      .then(data => {
        setSpotDataCamping(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <HomeSection sectionHeading={'Picnic Spots'} spotData={spotDataPicnic} />
      <HomeSection
        sectionHeading={'Camping Spots'}
        spotData={spotDataCamping}
      />
    </React.Fragment>
  );
};

export default HomePage;
