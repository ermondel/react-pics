import React from 'react';

const Inactive = () => (
  <div className="ui icon message">
    <i className="exclamation circle icon"></i>
    <div className="content">
      <div className="header">Limit Exceeded</div>
      <p>
        Hourly server request limit exceeded. Please try again in
        an hour. Thank you for understanding.
      </p>
    </div>
  </div>
);

export default Inactive;
