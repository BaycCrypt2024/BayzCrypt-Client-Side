import React from "react";
import crytoLogo from "../../assets/crytoPhone.png";
import "./Home.scss";
import Loader from "../../components/loader/Loader";
import { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <section className="container hero">
            <div className="containers">
            <div className="hero-text">
              <h2>BayzCrypt Decentralized Cryptocurrency Wallet</h2>
              <p>Safeguard your crypto with bayzCrypt today !!!</p>
              <p>
                At BayzCrypt, we have made the user experience more enjoyable by developing 
                the platform to include GIFs. This enhances the user's experience and makes 
                using the platform more fun.
              </p>

              <div className="hero-buttons --flex-start">
                <Link to='/register'><button className="--btn --btn-danger">Register</button></Link>
                <Link to='/login'><button className="--btn --btn-primary">Login</button></Link>
              </div>
            </div>
            <div className="hero-image">
              <img src={crytoLogo} alt="loginImg" />
            </div>
            </div>
          {/* <div>h1</div> */}
          </section>
          
        </Layout>
      )}
    </>
  );
};

export default Home;
