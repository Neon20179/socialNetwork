import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { NavbarLinks } from "@/typing/entities";

interface NavbarProps {
  avatarImage: string;
  activeNavbarLink: string;
}

const Navbar: FC<NavbarProps> = ({ avatarImage, activeNavbarLink }) => {
  return (
    <nav>
      <NavLink to="/feed/">
        <svg
          style={{
            fill:
              activeNavbarLink === NavbarLinks.FEED
                ? "var(--orange)"
                : "var(--light-grey)"
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 222.47 178.38"
        >
          <polygon points="32 101.45 112.34 36.09 192.68 102.13 192.68 173.45 191.32 177.02 188.77 178.38 130.89 178.38 131.06 125.62 94.47 125.79 94.13 178.38 36.77 178.38 33.87 176.34 32 173.45 32 101.45" />
          <polygon points="117.79 0 156.77 31.66 156.77 2.72 158.13 0.85 159.66 0 190.81 0 192.68 2.21 192.68 5.45 192.68 61.45 222.47 87.49 222.47 92.94 220.09 97.87 216.85 102.47 213.96 104.85 209.7 104.85 112.34 23.15 14.64 104.85 10.38 104.85 0 93.45 0 88.68 105.02 0 117.79 0" />
        </svg>
      </NavLink>
      <NavLink to="/chats/">
        <svg
          style={{
            fill:
              activeNavbarLink === NavbarLinks.CHATS
                ? "var(--orange)"
                : "var(--light-grey)"
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 198.13 198.3"
        >
          <polygon points="12.09 33.53 16.34 27.06 21.62 21.45 28.77 15.15 37.96 9.02 47.49 4.25 60.09 1.02 72 0 83.75 0 94.13 2.04 103.15 5.28 110.98 9.36 116.94 13.11 122.72 16.77 128.51 22.3 133.11 28.25 138.04 35.57 141.79 42.89 144.34 48.51 145.19 52.6 148.94 53.62 154.21 55.66 160.51 58.21 165.62 61.79 171.75 66.21 177.19 71.49 180.43 75.4 185.02 81.36 188.6 87.32 193.02 95.49 195.06 103.15 196.6 109.28 198.13 115.92 198.13 130.55 197.28 136 195.57 142.98 193.02 150.81 189.62 158.98 190.64 166.3 192.51 173.96 194.89 182.3 198.13 190.47 198.13 194.21 196.77 197.11 195.23 198.3 191.15 198.3 184.51 196.09 177.02 194.04 170.04 191.66 164.6 189.45 160.85 189.11 156.43 190.47 150.98 192.34 147.4 194.21 143.15 195.23 138.89 196.09 134.47 197.11 131.75 198.3 116.25 198.3 111.49 196.94 104.17 195.23 97.02 192.51 89.19 189.28 82.38 185.36 76.77 180.94 70.3 175.15 65.02 168.68 61.96 163.57 57.7 156.09 54.81 148.94 52.77 144.34 46.81 143.49 43.4 141.79 38.64 138.89 6.13 147.91 2.38 147.91 0 145.7 0 140.94 9.02 110.47 6.64 104.34 3.75 98.04 1.19 88.34 0 81.19 0.85 65.53 2.55 54.81 5.62 45.45 9.19 37.62 12.09 33.53" />
          <polygon
            className="inner-chat-polygon"
            points="55.32 11.74 61.62 10.38 66.89 9.36 82.89 9.36 89.36 10.55 94.98 11.74 100.08 14.13 104.17 16.17 108.77 18.38 112.34 20.94 116.94 25.19 121.53 29.45 125.45 34.38 129.36 40 132.6 45.62 134.98 51.74 136.68 58.04 138.38 64.68 138.38 84.94 137.19 91.92 134.47 100.6 130.72 107.4 126.64 112.85 121.36 118.64 116.25 123.23 109.45 128.34 101.11 132.94 92.94 136.34 84.77 138.55 64.17 138.55 56.68 136.68 49.53 134.47 44.09 132.09 39.49 128.68 12.09 136.17 18.55 111.49 19.4 109.11 19.4 106.72 17.19 104.17 13.96 98.73 11.23 89.87 9.53 83.92 9.53 64.17 11.57 56 14.13 49.36 17.36 42.72 20.94 36.09 27.23 28.43 33.7 22.81 40.68 18.04 47.49 14.13 55.32 11.74"
          />
        </svg>
      </NavLink>
      <NavLink to="/people/">
        <svg
          style={{
            fill:
              activeNavbarLink === NavbarLinks.FRIENDS
                ? "var(--orange)"
                : "var(--light-grey)"
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64.11 53.74"
        >
          <polygon points="8.34 3.92 9.28 2.85 10.38 1.92 11.45 1.15 12.72 0.51 13.87 0.21 15.06 0 16.25 0 17.57 0 18.72 0.26 19.96 0.68 20.89 1.32 21.79 1.96 22.6 2.6 23.32 3.4 23.91 4.21 24.43 5.19 24.94 6.17 25.19 7.32 25.4 8.55 25.4 9.87 24.89 10.21 24.3 10.68 23.66 11.36 23.06 12.21 22.55 13.06 21.91 14.13 21.53 15.19 21.15 16.17 21.11 17.11 20.51 17.53 19.57 17.96 18.38 18.3 17.19 18.6 15.91 18.6 14.72 18.6 13.11 18.25 11.7 17.66 10.17 16.77 8.94 15.49 7.87 14.17 7.11 12.3 6.64 10.47 6.64 7.96 7.32 5.87 7.7 4.81 8.34 3.92" />
          <polygon points="20.72 19.32 10.64 19.32 9.4 19.57 7.92 19.96 6.64 20.6 5.32 21.32 4.21 22.17 3.19 23.19 2.34 24.21 1.45 25.62 0.85 27.11 0.34 28.43 0 30.17 0 41.23 0.89 41.49 2.21 41.87 3.57 42.34 5.15 42.72 6.98 43.15 9.15 43.45 11.45 43.74 14.21 43.96 14.34 39.66 14.51 38 15.06 36.38 15.66 34.81 16.6 33.15 17.66 31.83 18.64 30.81 20.51 29.23 21.91 28.47 23.28 27.83 24.43 27.4 23.66 26.55 22.81 25.45 22.17 24.3 21.49 22.77 20.94 20.85 20.72 19.32" />
          <polygon points="32.51 9.57 34.34 9.79 35.74 10.17 36.85 10.68 37.87 11.23 38.81 12 39.62 12.81 40.26 13.62 40.89 14.72 41.4 15.91 41.74 17.19 41.96 18.6 41.74 20.38 41.49 21.79 40.89 23.32 40.04 24.6 39.11 25.7 38.04 26.6 36.64 27.4 35.11 28.09 33.4 28.43 31.36 28.43 29.83 28.04 28.38 27.45 26.72 26.43 25.4 25.23 24.13 23.32 23.36 21.36 23.15 19.87 23.15 17.49 23.75 15.62 24.64 13.83 25.83 12.3 27.36 11.11 29.15 10.21 30.77 9.79 32.51 9.57" />
          <polygon points="27.57 29.06 37.66 29.06 39.4 29.4 41.15 29.96 42.81 30.81 44.13 31.64 45.11 32.64 46.09 33.7 47.15 35.4 48.04 37.36 48.43 39.4 48.43 50.77 47.15 51.53 45.4 52.04 43.4 52.6 41.36 53.11 38.77 53.45 36.47 53.74 31.62 53.74 28.43 53.49 25.66 53.23 22.94 52.68 19.23 51.83 16.38 50.94 16.6 40.43 16.81 38.43 17.75 35.87 19.02 33.74 20.51 32.26 22.17 30.94 24.6 29.79 26.13 29.36 27.57 29.06" />
          <polygon points="38.68 9.11 38.98 7.28 39.53 5.45 40.55 3.79 41.62 2.43 43.28 1.23 44.55 0.55 46.55 0 49.15 0 51.06 0.26 52.98 1.19 54.34 2.25 55.57 3.57 56.38 4.89 57.19 6.81 57.49 8.68 57.49 10.38 56.94 12.51 55.87 14.47 54.77 15.87 53.45 17.02 51.91 17.79 49.49 18.6 47.11 18.6 45.49 18.38 44.09 17.75 43.74 15.66 43.02 13.83 42.17 12.43 40.94 10.98 39.66 9.79 38.68 9.11" />
          <polygon points="44.17 19.32 52.68 19.32 54.64 19.62 56.55 20.21 57.83 20.77 59.45 21.87 60.77 23.02 61.7 24.21 62.6 25.53 63.23 26.81 63.7 28.43 64.11 29.75 64.11 41.15 62.98 41.66 61.36 42.21 59.7 42.72 58.04 43.15 56 43.53 53.49 43.96 50.81 43.96 50.94 40.21 50.55 37.74 49.62 35.11 48.43 33.11 47.15 31.64 45.87 30.3 44.17 29.06 42.6 28.17 41.4 27.66 40.51 27.32 41.57 26.25 42.47 25.06 43.19 23.53 43.83 21.91 44.13 20.3 44.17 19.32" />
        </svg>
      </NavLink>
      <NavLink to="/add_post/">
        <svg
          style={{
            fill:
              activeNavbarLink === NavbarLinks.ADD_POST
                ? "var(--orange)"
                : "var(--light-grey)"
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 413.96 414.3"
        >
          <polygon points="68.43 50.38 84.08 39.15 107.57 23.83 134.13 10.89 161.02 4.77 184.51 0 214.47 0 238.98 1.7 268.94 8.85 290.72 17.02 308.43 25.19 327.49 36.09 342.13 48.68 355.75 63.32 367.32 75.23 379.23 91.23 389.45 107.57 398.98 128.68 406.64 146.38 411.23 167.49 413.96 190.3 413.96 215.15 412.25 244.77 403.75 274.72 393.53 296.85 376.85 325.79 359.83 347.92 341.11 364.94 322.72 378.89 302.3 391.15 278.47 401.7 252.6 408.85 226.38 414.3 198.47 414.3 178.38 414.3 151.83 406.64 123.92 397.62 91.92 380.25 68.43 361.87 52.09 345.53 36.43 325.79 23.49 304 12.94 281.53 4.77 255.66 0 226.72 0 202.21 1.7 172.25 8.17 143.32 20.09 115.4 39.15 82.38 57.53 61.28 68.43 50.38" />
          <polygon
            className="inner-add-post-polygon"
            points="73.53 71.15 92.94 53.79 113.7 41.53 135.15 30.98 162.04 22.47 188.94 17.36 219.23 17.36 244.43 20.43 271.32 27.23 305.36 44.26 328.17 60.94 344.17 75.92 358.47 92.6 371.06 110.64 382.3 134.47 390.13 156.6 394.55 179.06 396.94 204.6 394.21 236.94 388.08 266.89 376.17 293.45 360.17 319.32 337.36 345.19 312.17 364.25 289.02 377.87 261.45 388.43 232.51 394.21 203.91 397.28 178.72 394.89 145.7 386.04 115.06 373.79 88.51 355.06 69.79 339.06 53.79 320 33.7 285.96 23.49 256.34 17.7 227.4 17.7 197.79 22.13 161.7 31.32 132.09 52.09 95.32 73.53 71.15"
          />
          <polygon points="197.79 198.47 197.79 140.6 201.87 135.83 205.23 134.55 208.81 134.55 211.75 136.34 214.3 139.02 215.53 141.83 215.53 198.47 273.19 198.47 277.53 201.45 278.81 206.64 278.13 210.51 275.49 213.62 271.62 215.57 215.75 215.57 215.75 272.43 212.34 276.6 209.02 278.72 204.51 278.72 200.51 276.13 197.79 272.08 197.79 215.62 141.32 215.62 135.96 212.3 134.17 206.64 135.19 201.45 139.02 198.77 197.79 198.47" />
        </svg>
      </NavLink>
      <NavLink to="/profile/">
        <div
          className="profile"
          style={
            avatarImage
              ? {
                  backgroundImage: `url(${avatarImage})`,
                  border: `2px solid ${
                    activeNavbarLink === NavbarLinks.PROFILE
                      ? "var(--orange)"
                      : "var(--light-grey)"
                  }`
                }
              : {
                  backgroundColor: "var(--orange)",
                  border: `2px solid ${
                    activeNavbarLink === NavbarLinks.PROFILE
                      ? "var(--orange)"
                      : "var(--light-grey)"
                  }`
                }
          }
        ></div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
