import Head from 'next/head';
import React from 'react';
import Link from 'next/link'; // Import the Link component


export default function Home() {
  return (
    <div style={{ fontFamily: 'Lato, sans-serif', color: '#f0f0f0' }}>
<style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background-color: rgb(33, 33, 33);
          color: #fff;
          font-family: Arial, sans-serif;
        }
        /* Add a general rule for mobile-first responsiveness */
        @media (max-width: 767px) {
          /* ... Other styles ... */
          .body::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgb(33, 33, 33) /* Adjust the opacity as needed */
            z-index: -1; /* Place the overlay below the content */
          }
          /* Rest of your styles ... */
        }

        /* Larger screens */
        @media (min-width: 768px) {
          /* ... Other styles ... */
          .body::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgb(33, 33, 33); /* Adjust the opacity as needed */
            z-index: -1; /* Place the overlay below the content */
          }
          /* Rest of your styles ... */
        }

        /* Tablet and larger screens */
        @media (min-width: 1024px) {
          /* ... Other styles ... */
          .body::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgb(33, 33, 33); /* Adjust the opacity as needed */
            z-index: -1; /* Place the overlay below the content */
          }
          /* Rest of your styles ... */
        }

        /* Large screens and beyond */
        @media (min-width: 1200px) {
          /* ... Other styles ... */
          .body::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgb(33, 33, 33); /* Adjust the opacity as needed */
            z-index: -1; /* Place the overlay below the content */
          }
          /* Rest of your styles ... */
        }

        /* Your existing CSS goes here... */

        .nav {
          display: flex;
          background-color: rgba(0, 0, 0, 0.9);
          height: 100px;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
        }

        .button-c {
          font-family: "Arial", sans-serif;
          margin-top: 10px;
          align-self: self-start;
          padding: 0.6em 2em;
          border: none;
          outline: none;
          color: #fff;
          background: rgba(0, 0, 0, 0.6);
          cursor: pointer;
          position: relative;
          z-index: 0;
          border-radius: 5px;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          transition: background-color 0.3s;
        }

        .button-c:hover {
          background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00);
        }

        .button {
          align-items: end;
          gap: 30px;
          display: flex;
          list-style: none;
        }

        .name {
          margin-top: 30px;
          font-family: "Impact", sans-serif;
          text-align: center;
          font-size: 60px;
          color: #fff;
          text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
        }

        .pre-container {
          margin: 15px;
          padding: 25px;
          border-radius: 10px;
          white-space: pre-wrap;
          font-family: "Courier New", monospace;
          font-size: 20px;
          color: #f0f0f0;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
          background-color: rgba(0, 0, 0, 0.7);
        }
      `}</style>
        <div className="nav">
        <ul className="button">
          <li className="item"><Link href="/"><a className="button-c">Home</a></Link></li>
          <li className="item"><Link href="/joinus"><a className="button-c">Join us</a></Link></li>
          <li className="item"><Link href="/social"><a className="button-c">Socials</a></Link></li>
          <li className="item"><Link href="/about"><a className="button-c">About Us</a></Link></li>
        </ul>
      </div>
      <header>
        <div>
          <p className="name">TryOut Esports</p>
        </div>
        <pre className="pre-container">
          Welcome to TryOut Esports,
          your gateway to an exhilarating world of competitive gaming.
        As avid gamers ourselves, we understand the thrill of the virtual battleground and the camaraderie that comes with it.
          At TryOut Esports, we've created a dynamic community where players of all levels can come together to test their skills, forge new connections, and rise to the top of their game.
          Our commitment to fostering an inclusive and supportive environment ensures that whether you're a casual player or a seasoned pro, there's a place for you here.
          Explore our featured games, participate in intense tournaments, and stay updated on upcoming events that will challenge and excite you.
          Join us in embracing the spirit of esports and embark on a journey of competition, growth, and shared passion.
          Let's level up together!
        </pre>
      </header>
    </div>
  );
}
