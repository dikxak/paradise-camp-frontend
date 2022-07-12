import React from 'react';

import Card from '../../../components/ui/Card/Card';

import styles from './HomeSection.module.css';

const HomeSection = props => {
  console.log(props.spotData);
  return (
    <section className="container overflow-hidden">
      <h3 className={styles['spot-heading']}>{props.sectionHeading}</h3>
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 gx-2 gy-5">
        {props.spotData.map(data => {
          return (
            <div
              className="col p-4 justify-self-stretch align-self-stretch"
              key={data._id}
            >
              <Card
                className={`${styles['picnic-spot-container']} grid grid--2-cols`}
              >
                <img
                  src={data.imageURL}
                  alt="Night Sky"
                  className={styles['picnic-spot-img']}
                />
                <div className="picnic-spot-contents">
                  <h4 className={styles['spot-name']}>{data.name}</h4>
                  <p className={`${styles['spot-description']}`}>
                    {data.description}
                  </p>
                  <p className={styles['spot-address']}>{data.address}</p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeSection;
