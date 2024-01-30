/* eslint-disable react/no-unknown-property */
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
            <blockquote className="quote1">
              <p className="test1">Test1</p>
              <p className="test2">Test2</p>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
