import React, { useEffect, useState, useCallback } from 'react';

import axios from 'axios';

import Footer from '../../components/ui/Footer/Footer';
import Navbar from '../../components/ui/Navbar/Navbar';
import HomeSection from '../HomePage/HomeSection/HomeSection';

import styles from './MySpotsPage.module.css';

const MySpotsPage = () => {
  const [spotData, setSpotData] = useState([]);

  const getSpots = useCallback(async () => {
    try {
      const res = await axios.get('http://localhost:90/spots/get/me', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      return res.data.spotData;
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  useEffect(() => {
    const setSpot = async () => {
      const data = await getSpots();
      setSpotData(data);
    };

    setSpot();
  });

  return (
    <React.Fragment>
      <Navbar />
      {spotData.length === 0 ? (
        <p className="warning-msg">No any spot available.</p>
      ) : (
        <HomeSection
          headingStyle={styles['heading-style']}
          spotData={spotData}
          sectionHeading={`${localStorage.getItem('userFullName')}'s Spots`}
        />
      )}
      <Footer />
    </React.Fragment>
  );
};

export default MySpotsPage;
