import React from 'react';

const Forecast = () => {
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-2">
            <h3>Thu</h3>
            <ul>
              <li>
                <i className="fas fa-cloud-showers-heavy"></i>
              </li>
              <li>
                <strong>
                  11
                  <sup>
                    <a href="/">&#176;C</a> | <a href="/">&#176;F</a>
                  </sup>
                </strong>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h3>Fri</h3>
            <ul>
              <li>
                <i className="fas fa-cloud-sun"></i>
              </li>
              <li>
                <strong>
                  11
                  <sup>
                    <a href="/">&#176;C</a> | <a href="/">&#176;F</a>
                  </sup>
                </strong>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h3>Sat</h3>
            <ul>
              <li>
                <i className="fas fa-cloud-showers-heavy"></i>
              </li>
              <li>
                <strong>
                  14
                  <sup>
                    <a href="/">&#176;C</a> | <a href="/">&#176;F</a>
                  </sup>
                </strong>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h3>Sun</h3>
            <ul>
              <li>
                <i className="fas fa-cloud-showers-heavy"></i>
              </li>
              <li>
                <strong>
                  12
                  <sup>
                    <a href="/">&#176;C</a> | <a href="/">&#176;F</a>
                  </sup>
                </strong>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h3>Mon</h3>
            <ul>
              <li>
                <i className="fas fa-cloud-sun"></i>
              </li>
              <li>
                <strong>
                  12
                  <sup>
                    <a href="/">&#176;C</a> | <a href="/">&#176;F</a>
                  </sup>
                </strong>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h3>Tue</h3>
            <ul>
              <li>
                <i className="fas fa-cloud-showers-heavy"></i>
              </li>
              <li>
                <strong>
                  14
                  <sup>
                    <a href="/">&#176;C</a> | <a href="/">&#176;F</a>
                  </sup>
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
