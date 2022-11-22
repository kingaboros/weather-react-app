import React from 'react';

import styles from './styles.module.scss';

const Credentials = () => {
  return (
    <div className={styles.credentialsContainer}>
      <p>
        👩‍💻{' '}
        <a href="https://github.com/kingaboros/weather-react-app">
          Open-source code
        </a>{' '}
        by <a href="https://www.linkedin.com/in/kingaboros/">Kinga Boros</a>
      </p>
    </div>
  );
};

export default Credentials;
