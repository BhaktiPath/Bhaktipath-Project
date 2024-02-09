/* eslint-disable react/no-unknown-property */

import ExploreCards from "../components/ExploreCards";
import GalleryCards from "../components/GalleryCards";
import FamousCard from "../components/FamousCards";
import AstrologyImage from "../assets/img/astrology.png";
import CalendarImage from "../assets/img/calender.png";
import MandirImage from "../assets/img/Mandir.png";
import granthImage from "../assets/img/granth.png";
import jyotishImage from "../assets/img/jyotish.png";
import kathaImage from "../assets/img/katha.png";
import panchangImage from "../assets/img/panchang.png"
import ramImage from "../assets/img/ram.png"
import hanumanImage from "../assets/img/hanuman.png"
import lakshmiImage from "../assets/img/lakshmi.png"
import krishnaImage from "../assets/img/krishna.png"
import durgaImage from "../assets/img/durga.png"
import kaliImage from "../assets/img/kali.png"
import { FaYoutube, FaInstagram } from "react-icons/fa";
import Shlokcard from "../components/Shlokcard";


export default function HomaePage() {
  return (
    <>
      <section className="hero-section">
        <div className="header">
          <div className="thoughts">
            <marquee>
              <p className="thought">
                आपका कर्तव्य ही धर्म है, प्रेम ही ईश्वर है, सेवा ही पूजा है, और
                सत्य ही भक्ति है।
              </p>
            </marquee>
          </div>
          <div className="navbar">
            <div className="logo">
              <h1 className="web-logo">Prabhu Prem</h1>
            </div>
            <ul className="nav-elements">
              <a href="/aarti" className="nav-item">
                <li>home</li>
              </a>
              <a href="/" className="nav-item">
                <li>aarti</li>
              </a>
              <a href="/" className="nav-item">
                <li>bhajan</li>
              </a>
              <a href="/" className="nav-item">
                <li>chalisa</li>
              </a>
              <a href="/" className="nav-item">
                <li>katha</li>
              </a>
              <a href="/" className="nav-item">
                <li>stories</li>
              </a>

            </ul>
          </div>
        </div>
        <div className="container">
          <div className="quotes">
            <h1 className="heading-hero">GOD IS TRUTH</h1>
            <p className="quote">
              शांति ईश्वर की वेदी है, वह स्थिति जिसमें सुख मौजूद है।
            </p>
          </div>
          <div className="quotesX">
            <h1 className="heading-hero">GOD IS SUPREME</h1>
            <p className="quote">
              जो वेद और शास्त्र के ग्रंथों को याद कर लेता है किंतु उनके यथार्थ
              तत्व को नहीं समझता, उसका वह याद रखना व्यर्थ है।
            </p>
          </div>
        </div>
      </section>
      <section className="gallery">
        <div className="other-container">
          <div className="heading">
            <h1 className="section-heading-primary">Shlok</h1>
          </div>
          <div className="card-container">

            <marquee className="card-containerin"
              onMouseOver={(e) => {
                e.target.stop();
              }}
              onMouseOut={(e) => {
                e.target.start();
              }}
            >

              <Shlokcard image={ramImage} alt="Test Alt"
                mantra="योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।

सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते।।"
              />



              <Shlokcard image={krishnaImage} alt="Test Alt"
                mantra="न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।

तत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति॥"
              />

              <Shlokcard image={hanumanImage} alt="Test Alt"
                mantra="वेदाविनाशिनं नित्यं य एनमजमव्ययम्‌ ।

कथं स पुरुषः पार्थ कं घातयति हन्ति कम्‌ ॥"
              />


            </marquee>
          </div>
        </div>
      </section>
      <section className="explore">
        <div className="other-container">
          <div className="heading">
            <h1 className="section-heading-primary">explore more bhakti</h1>
          </div>
          <div className="grid grid-three-columns">
            <a href="/test_redirect" target="_blank" className="explore-more">
              <ExploreCards
                image={AstrologyImage}
                alt="Know The Your Astrology"
                about="Astrolgy"
                description="
                Astrology is an ancient belief system that interprets celestial positions to understand human behavior and predict events. It explores connections between the cosmos and individual destinies, providing insights into personality traits and life paths"
              />
            </a>
            <a href="/test_redirect" target="_blank" className="explore-more">
              <ExploreCards
                image={CalendarImage}
                alt="Know The Your Astrology"
                about="Calendar"
                description="rajat is great"
              />
            </a>
            <a href="/test_redirect" target="_blank" className="explore-more">
              <ExploreCards
                image={granthImage}
                alt="Know The Your Astrology"
                about="Granth"
                description="rajat is great"
              />
            </a>
            <a href="/test_redirect" target="_blank" className="explore-more">
              <ExploreCards
                image={kathaImage}
                alt="Know The Your Astrology"
                about="Katha"
                description="rajat is great"
              />
            </a>
            <a href="/test_redirect" target="_blank" className="explore-more">
              <ExploreCards
                image={panchangImage}
                alt="Know The Your Astrology"
                about="Panchang"
                description="rajat is great"
              />
            </a>
            <a href="/test_redirect" target="_blank" className="explore-more">
              <ExploreCards
                image={jyotishImage}
                alt="Know The Your Astrology"
                about="Jyotish"
                description="rajat is great"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="gallery">
        <div className="other-container">
          <div className="heading">
            <h1 className="section-heading-primary">our gallery</h1>
          </div>
          <marquee
            onMouseOver={(e) => {
              e.target.stop();
            }}
            onMouseOut={(e) => {
              e.target.start();
            }}
          >
            <GalleryCards image={ramImage} alt="Test Alt" />
            <GalleryCards image={krishnaImage} alt="Test Alt" />
            <GalleryCards image={kaliImage} alt="Test Alt" />
            <GalleryCards image={kathaImage} alt="Test Alt" />
            <GalleryCards image={lakshmiImage} alt="Test Alt" />
            <GalleryCards image={hanumanImage} alt="Test Alt" />
          </marquee>
        </div>
      </section>
      <section className="gallery">
        <div className="other-container">
          <div className="heading">
            <h1
              className="section-heading-primary"
              style={{ textAlign: "left" }}
            >
              famous pooja
            </h1>
            <ul className="navigate">
              <a href="/" className="navigate-links">
                <li>All</li>
              </a>
              <a href="/" className="navigate-links">
                <li>Festivals</li>
              </a>
              <a href="/" className="navigate-links">
                <li>Days</li>
              </a>
            </ul>
          </div>
        </div>
      </section>
      <section className="famous-pooja">
        <div className="other-container">
          <div className="grid grid-three-columns">
            <FamousCard
              image={kaliImage}
              alt="Mamdir Image"
              text="Kali Chalisa"
            />
            <FamousCard
              image={durgaImage}
              alt="Mamdir Image"
              text="Durga Chalisa"
            />
            <FamousCard
              image={krishnaImage}
              alt="Mamdir Image"
              text="Krishna Chalisa"
            />
            <FamousCard
              image={hanumanImage}
              alt="Mamdir Image"
              text="Hanuman Chalisa"
            />
            <FamousCard
              image={ramImage}
              alt="Mamdir Image"
              text="Ram Chalisa"
            />
            <FamousCard
              image={lakshmiImage}
              alt="Mamdir Image"
              text="Lakshmi Chalisa"
            />
          </div>
        </div>
      </section>
      <section className="footer-section">
        <footer className="footer">
          <div className="container">
            <div className="about grid grid-two-columns">
              <div className="about-us">
                <h1 className="heading-footer">about us</h1>
                <p className="about-text">
                  We are one of the leading Hinduism websites and non-profit
                  organizations offering you both essential and detailed
                  information as well as news from the world of this religion.
                  We aim to help everyone discover Hinduism.
                </p>
                <h1 className="queries">for queries</h1>
                <p className="email">support@bhaktipath.com</p>
                <h1 className="queries">for bug report</h1>
                <p className="email">security@bhaktipath.com</p>
                <div className="socials">
                  <FaInstagram />
                  <FaYoutube />
                </div>
              </div>
              <div className="about-links">
                <h1 className="heading-footer">quick help</h1>
                <div className="quick-links">
                  <a href="/" className="quick-nav">
                    home
                  </a>
                  <a href="/" className="quick-nav">
                    faq
                  </a>
                  <a href="/" className="quick-nav">
                    donation
                  </a>
                </div>
              </div>
              <div className="comment-box about-links">
                <textarea placeholder="Write your comment here..."></textarea>
                <button onclick="submitComment()">Submit</button>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright">
          © 2024 All Rights Reserved.{" "}
          <a href="/" className="privacy">
            Privacy Policy
          </a>
        </div>
      </section>
    </>
  );
}


