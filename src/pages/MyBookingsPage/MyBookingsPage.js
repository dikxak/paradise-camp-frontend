import React, { useState, useEffect, useCallback, useContext } from 'react';
import axios from 'axios';

import Footer from '../../components/ui/Footer/Footer';
import Navbar from '../../components/ui/Navbar/Navbar';
import Card from '../../components/ui/Card/Card';
import LoadingSpinner from '../../components/ui/LoadingSpinner/LoadingSpinner';
import LoadingContext from '../../context/LoadingSpinnerContext/loading-context';

import styles from './MyBookingsPage.module.css';

const MyBookingsPage = () => {
  const [bookingData, setBookingData] = useState([]);
  const loadingCtx = useContext(LoadingContext);

  const getBookingData = useCallback(async () => {
    loadingCtx.setIsLoading(true);
    const res = await axios.get(
      'https://paradisecamp-backend.herokuapp.com/bookings/get',
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    loadingCtx.setIsLoading(false);
    return res.data.bookingData;
  }, [loadingCtx]);

  useEffect(() => {
    const setData = async () => {
      const data = await getBookingData();
      setBookingData(data);
    };

    setData();
  }, [getBookingData]);

  return loadingCtx.isLoading ? (
    <LoadingSpinner />
  ) : (
    <React.Fragment>
      <Navbar />
      <section className="container overflow-hidden">
        <h3 className={styles['booking-heading']}>
          {`${localStorage.getItem('userFullName')}'s Bookings`}
        </h3>
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 gx-3 gy-5">
          {bookingData.map(item => {
            return (
              <div
                className="col p-4 justify-self-stretch align-self-stretch"
                key={item._id}
              >
                <Card
                  className={`${styles['booking-container']} grid grid--2-cols`}
                >
                  <img
                    src={item.spotData[0].imageURL}
                    alt="Night Sky"
                    className={`${styles['booking-img']}`}
                  />
                  <div className={styles['booking-contents']}>
                    <h4 className={styles['spot-name']}>
                      Spot Name: {item.spotData[0].name}
                    </h4>
                    <p className={styles['booking-date']}>
                      Booking Date:{' '}
                      {new Date(item.date).toLocaleDateString('en-US', {
                        dateStyle: 'full',
                      })}
                    </p>
                    <p className={styles['booking-id']}>
                      Booking ID: {item._id}
                    </p>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
};

export default MyBookingsPage;
