/* eslint-disable react/no-unknown-property */
import Card from "../components/Card";
import GaneshJi from "../assets/img/ganesha.png";
import gita from "../assets/img/gita.png"

export default function HomaePage() {
  return (
    <>
      <section className="hero-section">
        <div className="thoughts">
          <marquee scrollamount="5" className="thought">
            परिपक्वता (Maturity) गरिमा की सीमा के भीतर अपनी भावनाओं को सोचने,
            बोलने और कार्य करने की क्षमता है। आपकी परिपक्वता का माप यह है कि आप
            अपनी कुंठाओं के बीच कितने आध्यात्मिक हो जाते हैं। – सैमुअल उलेमान
          </marquee>
        </div>
        <header className="header">
          <nav className="navbar">
            <div className="logo">
              <h1 className="logo-text">Bhakti Path</h1>
            </div>
            <ul className="nav-links">
              <a href="/" className="nav-items">
                <li className="relative">home</li>
              </a>
              <a href="/" className="nav-items">
                <li className="relative">aarti</li>
              </a>
              <a href="/" className="nav-items">
                <li className="relative">bhajan</li>
              </a>
              <a href="/" className="nav-items">
                <li className="relative">chalisa</li>
              </a>
              <a href="/" className="nav-items">
                <li className="relative">panchanj</li>
              </a>
              <a href="/" className="nav-items">
                <li className="relative">lok katha</li>
              </a>
            </ul>
          </nav>
        </header>
        <div className="container">
          <div className="quotes">
            <blockquote className="quote">
              Our mission is to share the good of{" "}
              <span className="highlight-text"> Hindusim.</span>
            </blockquote>
          </div>
        </div>
      </section>
      <section className="mantras">
        <Card
          image={GaneshJi}
          alt="Gyatri Mantra"
          mantra="
          ऊँ भूर्भुव: स्व: 
          तत्सवितुर्वरेण्यं 
          भर्गो देवस्य धीमहि। 
          धियो यो न: प्रचोदयात्"
        />
         <Card
          image={gita}
          alt="Gyatri Mantra"
          mantra="
          यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।
अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्‌॥"
        />
      </section>
    </>
  );
}
