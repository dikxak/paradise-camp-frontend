import React, { useState, useCallback, useEffect, useContext } from 'react';

import axios from 'axios';

import Footer from '../../components/ui/Footer/Footer';
import Navbar from '../../components/ui/Navbar/Navbar';
import BlogSection from '../HomePage/BlogSection/BlogSection';
import LoadingSpinner from '../../components/ui/LoadingSpinner/LoadingSpinner';
import LoadingContext from '../../context/LoadingSpinnerContext/loading-context';

import styles from './MyBlogsPage.module.css';

const MyBlogsPage = () => {
  const [blogData, setBlogData] = useState([]);
  const { setIsLoading, isLoading } = useContext(LoadingContext);

  const getBlogData = useCallback(async () => {
    const res = await axios.get(
      'https://paradisecamp-backend.herokuapp.com/blogs/get/me',
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      }
    );
    return res.data.data;
  }, [loadingCtx]);

  useEffect(() => {
    const setData = async () => {
      setIsLoading(true);
      const data = await getBlogData();
      setBlogData(data);
      setIsLoading(false);
    };

    setData();
  }, [setIsLoading, getBlogData]);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <React.Fragment>
      <Navbar />
      {blogData.length === 0 ? (
        <p className="warning-msg">No any blog data.</p>
      ) : (
        <BlogSection
          headingStyle={styles['heading-style']}
          heading={`${localStorage.getItem('userFullName')}'s Blogs`}
          blogData={blogData}
        />
      )}
      <Footer />
    </React.Fragment>
  );
};

export default MyBlogsPage;
