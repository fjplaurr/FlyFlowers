import * as React from 'react';
import variables from '../variables.scss';

const Flower = () => (
  <svg width={180} height={180} viewBox="0 0 180 180" fill="none">
    <path
      d="M89.971 54.643L90 172.5"
      stroke={variables.black}
      strokeWidth={6}
    />
    <path
      d="M90 172.5c23.555-.14 74.643-15.714 82.5-86.429-23.571 0-82.5 19.643-82.5 78.572"
      fill={variables.midGreen}
    />
    <path
      d="M90 172.5c23.555-.14 74.643-15.714 82.5-86.429-23.571 0-82.5 19.643-82.5 78.572"
      stroke={variables.black}
      strokeWidth={6}
    />
    <path
      d="M90 172.5c-23.555-.14-74.643-15.714-82.5-86.429 23.571 0 82.5 19.643 82.5 78.572"
      fill={variables.midGreen}
    />
    <path
      d="M90 172.5c-23.555-.14-74.643-15.714-82.5-86.429 23.571 0 82.5 19.643 82.5 78.572"
      stroke={variables.black}
      strokeWidth={6}
    />
    <path
      d="M90 54.643c-.004-35.357-43.214-31.429-43.214-31.429 3.67 5.51 5.625 21.318 6.668 36.594 1.31 19.212 17.26 34.12 36.517 34.12h.058c19.256 0 35.207-14.908 36.517-34.12 1.043-15.276 2.998-31.085 6.668-36.594 0 0-43.218-3.928-43.214 31.429z"
      fill={variables.pink}
      stroke={variables.black}
      strokeWidth={6}
    />
  </svg>
);

export default Flower;
