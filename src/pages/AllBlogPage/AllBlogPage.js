import React, { useState, useEffect, useCallback } from "react";

import axios from "axios";

import Footer from "../../components/ui/Footer/Footer";
import Navbar from "../../components/ui/Navbar/Navbar";
import BlogSection from "../HomePage/BlogSection/BlogSection";

import styles from "./AllBlogPage.module.css";

const AllBlogPage = () => {
  const [blogData, setBlogData] = useState([]);

  const getBlogData = useCallback(async () => {
    const res = await axios.get(
      "https://paradisecamp-backend.herokuapp.com/blogs/all"
    );
    return res.data.data;
  }, []);

  useEffect(() => {
    const setData = async () => {
      const data = await getBlogData();
      setBlogData(data);
    };

    setData();
  }, [getBlogData]);

  return (
    <React.Fragment>
      <Navbar />
      {blogData.length === 0 ? (
        ""
      ) : (
        <BlogSection
          headingStyle={styles["heading-style"]}
          heading={"All Blogs"}
          blogData={blogData}
        />
      )}
      <Footer />
    </React.Fragment>
  );
};

export default AllBlogPage;
