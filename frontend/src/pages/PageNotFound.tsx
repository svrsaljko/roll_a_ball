import React from 'react';
import Header from '../components/Header';
function PageNotFound() {
  return (
    <div>
      <Header />
      <div
        style={{
          fontSize: '3rem',
          color: 'darkred',
          fontWeight: 'bold',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '3rem',
        }}
      >
        {' '}
        PAGE NOT FOUND{' '}
      </div>
    </div>
  );
}

export default PageNotFound;
