import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import Button from '../../components/ui/Button/Button';
import Card from '../../components/ui/Card/Card';
import Footer from '../../components/ui/Footer/Footer';
import Navbar from '../../components/ui/Navbar/Navbar';
import LoadingSpinner from '../../components/ui/LoadingSpinner/LoadingSpinner';

import LocationIcon from '../../components/icons/LocationIcon';
import MobileIcon from '../../components/icons/MobileIcon';
import UserIcon from '../../components/icons/UserIcon';
import EmailIcon from '../../components/icons/EmailIcon';
import CheckIcon from '../../components/icons/CheckIcon';

import LoadingContext from '../../context/LoadingSpinnerContext/loading-context';

import styles from './SpotPage.module.css';

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en-US');

const SpotPage = props => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  const [individualSpotData, setIndividualSpotData] = useState([]);
  const [reviewData, setReviewData] = useState([]);

  const { pathname } = useLocation();
  // console.log(location.pathname.split('/')[2]);

  useEffect(() => {
    const id = pathname.split('/')[2];

    const getAllData = async () => {
      setIsLoading(true);

      const data = await Promise.all([
        axios.get(`http://localhost:90/spots/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }),
        axios.get(`http://localhost:90/reviews/get/all/${id}`),
      ]);

      setIsLoading(false);

      setIndividualSpotData(data[0].data.spotData);
      setReviewData(data[1].data.reviewData);
    };

    getAllData();
  }, [pathname, isLoading, setIsLoading]);

  return individualSpotData.length !== 0 ? (
    <React.Fragment>
      <Navbar />
      <section className={`container row mx-auto ${styles['spot-section']}`}>
        <div className="col-lg-6">
          <Card>
            <img
              src={individualSpotData.imageURL}
              alt="Switzerland Lake"
              className={styles['spot-img']}
            />
            <div className={styles['card-content']}>
              <div>
                <h3 className={styles['spot-heading']}>
                  {individualSpotData.name}
                </h3>
                <p className={styles['spot-price']}>
                  Rs.{individualSpotData.price}/visit
                </p>
              </div>
              <Button className={styles['button-book']}>Book Spot</Button>
            </div>
            <ul className={styles['spot-info-list']}>
              <li className={styles['spot-info']}>
                <LocationIcon className={styles['spot-icon']} />{' '}
                {individualSpotData.address}
              </li>
              <li className={styles['spot-info']}>
                <MobileIcon className={styles['spot-icon']} />{' '}
                {individualSpotData.phoneNo}
              </li>
              <li className={styles['spot-info']}>
                <EmailIcon className={styles['spot-icon']} />{' '}
                {individualSpotData.email}
              </li>
              <li className={styles['spot-info']}>
                <CheckIcon className={styles['spot-icon']} />{' '}
                {individualSpotData.availableSpotNo} Spots
              </li>
              <li className={styles['spot-info']}>
                <p className={styles['spot-description']}>
                  {individualSpotData.description}
                </p>
              </li>
              <li className={styles['spot-info']}>
                <UserIcon className={styles['spot-icon']} />{' '}
                {`Posted by: ${individualSpotData.authorName}`}
              </li>
            </ul>
            {localStorage.getItem('userId') === individualSpotData.userId ? (
              <ul className={styles['user-control-list']}>
                <Button className={styles['button-update']}>Update Spot</Button>
                <Button className={styles['button-delete']}>Delete Spot</Button>
              </ul>
            ) : (
              ''
            )}
          </Card>
        </div>
        <div className="col-lg-6">
          <Card>
            <MapContainer
              id="map"
              center={[
                +individualSpotData.latitude,
                +individualSpotData.longitude,
              ]}
              zoom={15}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
              />
              <Marker
                position={[
                  +individualSpotData.latitude,
                  +individualSpotData.longitude,
                ]}
              >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>

            <div className={styles['review-control']}>
              <form className={styles['review-form']}>
                <label htmlFor="reviewText">Leave a review</label>
                <textarea
                  id="reviewText"
                  placeholder={
                    individualSpotData.userId === localStorage.getItem('userId')
                      ? 'You are not allowed to review on your own spot.'
                      : 'Enter your review here...'
                  }
                  disabled={
                    individualSpotData.userId === localStorage.getItem('userId')
                  }
                ></textarea>
                <Button
                  disabled={
                    individualSpotData.userId === localStorage.getItem('userId')
                  }
                  className={styles['button-review']}
                  type="submit"
                >
                  Submit Review
                </Button>
              </form>
            </div>
            <div className={styles['review-container']}>
              <h3 className="tertiary-heading">Reviews</h3>
              {reviewData.map(review => {
                return (
                  <div key={review.id} className={styles['review']}>
                    <p className={styles['review-text']}>{review.reviewText}</p>
                    <p className={styles['review-info']}>
                      <span className={styles['review-author']}>
                        &mdash; {review.userFullName}
                      </span>{' '}
                      |{' '}
                      <span className={styles['review-date']}>
                        {timeAgo.format(+new Date(review.reviewedDate))}
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  ) : isLoading ? (
    <LoadingSpinner />
  ) : (
    ''
  );
};

export default SpotPage;
