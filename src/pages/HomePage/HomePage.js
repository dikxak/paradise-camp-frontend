import React, { useState, useEffect, useCallback, useContext } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Navbar from '../../components/ui/Navbar/Navbar';
import HomeSection from './HomeSection/HomeSection';
import BlogSection from './BlogSection/BlogSection';
import Footer from '../../components/ui/Footer/Footer';
import Message from '../../components/ui/Message/Message';

import ShowMessageContext from '../../context/ShowMessageContext/show-message-context';

const HomePage = props => {
  const showMessageCtx = useContext(ShowMessageContext);

  const [spotDataPicnic, setSpotDataPicnic] = useState([]);
  const [spotDataCamping, setSpotDataCamping] = useState([]);
  const [blogData, setBlogData] = useState([]);

  const getSpotData = useCallback(async type => {
    const res = await axios.get(`http://localhost:90/spots/type=${type}`);
    return res.data.data;
  }, []);

  const getBlogData = useCallback(async () => {
    const res = await axios.get('http://localhost:90/blogs/all');
    return res.data.data;
  }, []);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const data = await Promise.all([
          getSpotData('Picnic'),
          getSpotData('Camping'),
          getBlogData(),
        ]);

        setSpotDataPicnic(data[0]);
        setSpotDataCamping(data[1]);
        setBlogData(data[2]);
      } catch (err) {
        console.error(err.message);
      }
    };

    getAllData();
  }, [getBlogData, getSpotData]);

  const removeMessageHandler = () => {
    showMessageCtx.setShowMessage(false, '');
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Message
          containerName={'success-message-container'}
          state="success"
          className={showMessageCtx.showMessage ? 'reveal' : ''}
          message={showMessageCtx.message}
          onClick={removeMessageHandler}
        />,
        document.getElementById('message-root')
      )}
      <Navbar />
      <HomeSection
        sectionHeading={'Picnic Spots'}
        spotData={spotDataPicnic.slice(0, 10)}
      />
      <HomeSection
        sectionHeading={'Camping Spots'}
        spotData={spotDataCamping.slice(0, 10)}
      />
      <BlogSection blogData={blogData.slice(0, 6)} />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
