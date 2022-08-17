import React, { useEffect, useState, useCallback, useContext } from 'react';

import axios from 'axios';

import Footer from '../../components/ui/Footer/Footer';
import Navbar from '../../components/ui/Navbar/Navbar';
import HomeSection from '../HomePage/HomeSection/HomeSection';
import LoadingContext from '../../context/LoadingSpinnerContext/loading-context';
import LoadingSpinner from '../../components/ui/LoadingSpinner/LoadingSpinner';

import styles from './MySpotsPage.module.css';

const MySpotsPage = () => {
  const [spotData, setSpotData] = useState([]);
  const loadingCtx = useContext(LoadingContext);

  const getSpots = useCallback(async () => {
    try {
      loadingCtx.setIsLoading(true);
      const res = await axios.get(
        'https://paradisecamp-backend.herokuapp.com/spots/get/me',
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      );
      loadingCtx.setIsLoading(false);
      return res.data.data;
    } catch (err) {
      console.error(err.message);
    }
  }, [loadingCtx]);

  useEffect(() => {
    const setSpot = async () => {
      const data = await getSpots();
      setSpotData(data);
    };

    setSpot();
  });

  return loadingCtx.isLoading ? (
    <LoadingSpinner />
  ) : (
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
