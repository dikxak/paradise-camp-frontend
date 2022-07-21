import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { useLocation } from 'react-router-dom';

import Navbar from '../../components/ui/Navbar/Navbar';
import Button from '../../components/ui/Button/Button';
import Footer from '../../components/ui/Footer/Footer';

import styles from './BlogPage.module.css';

const BlogPage = props => {
  const [individualBlogData, setIndividualBlogData] = useState();

  const { pathname } = useLocation();

  useEffect(() => {
    const id = pathname.split('/')[2];

    const getBlogData = async () => {
      const res = await axios.get(`http://localhost:90/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      console.log(res.data.data);
      setIndividualBlogData(res.data.data);
    };

    getBlogData();
  }, [pathname]);

  return individualBlogData !== undefined ? (
    <React.Fragment>
      <Navbar />
      <section className={`container ${styles['blog-container']}`}>
        <header>
          <h2 className={`secondary-heading ${styles['blog-heading']}`}>
            {individualBlogData.title}
          </h2>
          <h4 className={styles['blog-subtitle']}>
            {individualBlogData.subtitle}
          </h4>
          <p className={styles['blog-meta-info']}>
            Posted by <b>{individualBlogData.authorName}</b> on{' '}
            {new Date(individualBlogData.writtenDate).toLocaleDateString(
              'en-US',
              { dateStyle: 'full' }
            )}
          </p>
        </header>

        <main>
          <img
            src={individualBlogData.imageURL}
            alt="Bitcoin"
            className={styles['blog-img']}
          />
          {/* <div className={styles['blog-description-container']}>
            {individualBlogData.description
              .split('\n\n')
              .map((paragraph, i) => {
                return <p key={i}>{paragraph}</p>;
              })}
          </div> */}
          <p className={styles['blog-description']}>
            {individualBlogData.description}
          </p>
        </main>
        <footer>
          {localStorage.getItem('userId') === individualBlogData.userId ? (
            <ul className={styles['user-control-list']}>
              <Button className={styles['button-update']}>Update Blog</Button>
              <Button className={styles['button-delete']}>Delete Blog</Button>
            </ul>
          ) : (
            ''
          )}
        </footer>
      </section>
      <Footer />
    </React.Fragment>
  ) : (
    ''
  );
};

export default BlogPage;
