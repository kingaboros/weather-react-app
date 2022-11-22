import React from 'react';

import styles from './styles.module.scss';

const Header = () => {
  return (
    <div>
      <div>
        {/* <img src={'../../assets/images/illustration.svg'} alt="illustration" /> */}
      </div>
      <div>
        <h1 className={styles.mainHeading}>What's the weather like today?</h1>
      </div>
    </div>
  );
};

export default Header;
