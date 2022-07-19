import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from '../../components/ui/Navbar/Navbar';
import HomeSection from './HomeSection/HomeSection';
import BlogSection from './BlogSection/BlogSection';
import Footer from '../../components/ui/Footer/Footer';

const HomePage = props => {
  const [spotDataPicnic, setSpotDataPicnic] = useState([]);
  const [spotDataCamping, setSpotDataCamping] = useState([]);
  const [blogData, setBlogData] = useState([]);

  const getSpotData = async type => {
    const res = await axios.get(`http://localhost:90/spots/type=${type}`);
    return res.data.data;
  };

  const getBlogData = async () => {
    const res = await axios.get('http://localhost:90/blogs/all');
    return res.data.data;
  };

  useEffect(() => {
    getSpotData('Picnic')
      .then(data => {
        setSpotDataPicnic(data);
      })
      .catch(err => console.error(err));

    getSpotData('Camping')
      .then(data => {
        setSpotDataCamping(data);
      })
      .catch(err => console.error(err));

    getBlogData()
      .then(data => {
        setBlogData(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <HomeSection sectionHeading={'Picnic Spots'} spotData={spotDataPicnic} />
      <HomeSection
        sectionHeading={'Camping Spots'}
        spotData={spotDataCamping}
      />
      <BlogSection blogData={blogData} />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
