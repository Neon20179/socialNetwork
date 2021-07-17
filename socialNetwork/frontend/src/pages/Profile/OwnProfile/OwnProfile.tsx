import React, { FC } from "react";
import { Link } from "react-router-dom";

const OwnProfile: FC = ({ children }) => {
  return (
    <section className="own-profile-page">
      <div className="set-not">
        <Link to="/settings/" className="settings-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 389.66 390.34">
            <path
              d="M40.85,54.51l11.87-14.3L62.3,29.62l8.42-8.68L78,17.11l7-1.54,5.49,1.28,5.62,4.72,4.47,4.86,1.91,5.36v7l-2.17,5.36-4.6,6.13-7,6-6.38,6.89-5.87,7.15-6.13,9.32L64,89.49l-5.62,10.85-5.11,13L49,125.11l-2.55,11L44,150l-.76,3.32-4,4.34-5.75,4.6-6,2.29H20s-5.61-3.19-6-3.19-4.72-4.21-4.72-4.21l-3.45-5.24-.64-8.17,1.28-10,2.68-11.62,4.34-12.64,5-12.89L25.79,80.3l8.3-16.47Z"
              transform="translate(-5.23 -4.26)"
            />
            <polygon points="307.11 13.79 318.68 13.11 325.66 16.68 331.79 22.64 338.43 30.13 344.04 37.62 350.51 45.62 357.83 57.53 366 70.64 373.49 82.89 379.45 97.53 385.75 114.72 388.64 127.49 389.66 135.15 389.66 146.38 386.94 152.85 382.68 156.94 377.57 159.66 366.17 159.66 360.04 157.11 353.06 149.79 350.34 132.77 346.43 118.3 340.98 102.64 334.34 89.87 327.7 77.45 319.7 65.7 311.02 56.17 301.83 46.98 295.19 37.79 293.32 34.38 293.32 26.04 298.43 18.21 303.7 14.81 307.11 13.79" />
            <polygon points="181.83 3.4 174.34 11.32 168.55 19.4 166.17 29.28 166.17 44.6 160.04 47.32 148.13 51.06 137.57 56.17 125.66 65.02 112.04 76.25 102.51 86.38 94.34 99.4 87.19 113.7 82.77 129.02 78 148.09 78 264.85 78 271.66 71.87 279.49 60.98 289.7 50.43 299.23 37.49 311.83 37.49 329.87 352.72 329.87 352.72 312.85 313.57 272 313.23 157.28 310.85 135.83 304.38 116.08 295.19 97.36 282.6 79.66 267.62 65.36 251.62 55.49 232.21 46.98 224.38 43.23 225.06 26.21 222.34 18.04 217.91 11.32 211.11 3.4 198.17 0 190 0 181.83 3.4" />
            <polygon points="156.38 352.81 233.62 352.81 233.62 360.47 231.7 365.96 229.15 370.94 225.32 377.32 220.34 381.66 213.7 386.25 204.77 390.34 186.25 390.34 174.89 386.13 167.36 379.75 162 372.72 158.17 365.19 156.38 360.72 156.38 352.81" />
          </svg>
        </Link>
        <Link to="/notifications/" className="notifications-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 289.08 302.25">
            <path
              d="M56,151.66c1-3.43,13.8-25,32-54.13l2.55-1.36h5.79l32.68,14,1.87.68,2.05-.51L156.6,96.17l1-1.36,6.12-41.36,1.71-3.07L168,49.7l63.15-.7,2,1,1.87,2.56,6.3,43.06,23.32,13.45,1.53,1.53h3.24L305,95.15l2.47-.34,2.38,1.79,32,55.66.51,2.46-1.44,3.41-32.13,25.06-.77,2.17,1.79,28.47.77,1.91,31.78,25.15,1.66,3.2.71,3.44L313,301.4l-3.83,2.17h-4.08l-34.34-14.29-1.66-.51-25.79,15.44-6.26,42.13-1.78,2.81-4,2.1H170.94l-3.71-1.34-1.66-2.68-8-43.4-26.81-15.32-37,16.09-2.81.25-3.06-1.79L56,248.43v-2.3L57.19,242l33.19-26.55.26-31.92L58.47,158.81A6.12,6.12,0,0,1,56,156,7,7,0,0,1,56,151.66Z"
              transform="translate(-55.67 -49)"
            />
            <polygon points="107.74 126.83 113.69 119.85 121.18 114.06 129.69 110.15 137.01 108.62 149.1 108.62 155.22 109.64 162.71 111.68 169.86 116.45 174.63 120.53 178.03 124.96 181.44 130.23 184.33 136.02 186.54 143.68 186.54 158.49 184.84 164.62 182.46 170.4 179.74 175.17 176.16 179.94 171.56 184.19 167.14 187.43 162.37 189.98 157.1 192.02 150.97 193.72 135.99 193.72 128.67 192.02 121.52 188.79 116.08 184.87 110.12 179.09 105.86 173.3 102.8 166.83 100.42 157.13 100.42 143.85 102.29 136.36 105.01 130.57 107.74 126.83" />
          </svg>
        </Link>
      </div>
      {children}
    </section>
  );
};

export default OwnProfile;
