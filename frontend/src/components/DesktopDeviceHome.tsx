import React from 'react';
import { Level1Animation, Level3Animation } from '../images';
function DesktopDeviceHome() {
  return (
    <div
      style={{
        marginTop: '5rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      <img
        height="375px"
        width="190px"
        src={Level1Animation}
        alt="level1.gif"
      />
      <div>
        <p style={{ fontWeight: 'bold', fontSize: '2rem', color: 'darkred' }}>
          PLAY ON A MOBILE DEVICE WITH THE ACCELEROMETER!
        </p>
        <p
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
          }}
        >
          Tilt device in any direction
        </p>
        <p
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
          }}
        >
          Collect items
        </p>
        <p
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
          }}
        >
          Avoid enemies
        </p>
        <p
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
          }}
        >
          Dont forget to finish on time
        </p>
        <p style={{ fontWeight: 'bold', fontSize: '2rem', color: 'darkred' }}>
          USE LOGIC TO SOLVE PUZZLE AND BE FIRST ON THE SCOREBOARD!!
        </p>
      </div>
      <img
        height="375px"
        width="190px"
        src={Level3Animation}
        alt="level3.gif"
      />
    </div>
  );
}

export default DesktopDeviceHome;
