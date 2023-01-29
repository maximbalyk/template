import React from 'react'

export default function Main() {
  return (
    <main className="main">

      <section className="benefits">
        <div className="benefit">
          <img
            src="/images/befefitDesign.png"
            alt="Benefir befefitDesign"
            className="benefit__logo"
          />
          <h2 className="benefit__title">Futuristic Design</h2>
          <p className="benefit__text"
          >
            To give Luna a truly flawless look, we specifically
            picked aircraft grade aluminum as its material and
            adopted both three-dimensional stretch-bending technology
            and a high precision cold forging technique.
          </p>
        </div>
        <div className="benefit">
          <img
            src="/images/benefitSpeakerSystem.png"
            alt="Benefir befefitDesign"
            className="benefit__logo"
          />
          <h2 className="benefit__title">Tweeter Speaker System</h2>
          <p className="benefit__text"
          >
          To deliver a more layered sound performance better than
          a sole full-range speaker, our team equipped Luna with one
          more tweeter speaker responsible for high-frequency sound independently.
          </p>
        </div>
        <div className="benefit">
          <img
            src="/images/benefitMultiroom.png"
            alt="Benefir befefitDesign"
            className="benefit__logo"
          />
          <h2 className="benefit__title">Multiroom System </h2>
          <p className="benefit__text"
          >
            Luna is natively compatible with your home Wi-Fi.
            Set up multiple speakers in different rooms to expand your
            music experience into the entire house.
          </p>
        </div>
        <div className="benefit">
          <img
            src="/images/benefitLighting.png"
            alt="Benefir befefitDesign"
            className="benefit__logo"
          />
          <h2 className="benefit__title">Intuitive Lighting System</h2>
          <p className="benefit__text"
          >
            An intuitive user interface allows you to adjust the hue
            and saturation of color for lighting that fits any mood
            and situation.
          </p>
        </div>
      </section>
      <section className="presentation" id="presentation">
        <video
          className="video video__full-width"
          src="/video/intro.mp4"
          poster="./images/about-usVideo.png"
          controls
        >
        </video>
      </section>

      <section className="about-us" id="aboutUS">
        <h2 className="about-us__title">DESIGNED FOR THE FUTURE</h2>

        <img
          src="/images/about-usImage.png"
          alt="about"
          className="about-us__image"
        />
        <p className="about-us__text"
        >
          In 2014, a group of geeky industrial designers, engineering veterans and acoustic
          experts formed crazybaby. This is a bunch of passionate people who are crazy enough
          to think they can challenge the industry with disruptive audio products.
        </p>
        <a href="1" className="about-us__link">See more about us</a>
      </section>

      <section className="technology" id="technology">
        <h2 className="technology__title">technology</h2>
        <img
          src="/images/technologyImageDesktop.png"
          alt="technology of speaker"
          className="technology__image"
        />

      </section>

      <section className="testimonials">
        <div className="testimonials__quote">
          <p className="testimonials__text">
            “It really took me by surprise honestly to have such full beautiful sound that coming out of this small compact device. And with the brush aluminum surface, it feels so familiar. Like my iPhone.”
          </p>
        </div>
        <img
          className="testimonials__avatar"
          src="/images/martin.png"
          alt="Garrett Martin"
        />
        <p className="testimonials__name">
          Garrett Martin
        </p>
        <p className="testimonials__position">
          Creative Director
        </p>
      </section>

      <section className="features" id="features">
        <div className="features__container">

          <h2 className="features__title">FEATURES</h2>

          <div className="features--1">
            <h3 className="features__title-small">Sound & Music</h3>
            <ul className="features__list">
              <li className="features__link">Feel-in-chest Base Power</li>
              <li className="features__link">Lossless Digital Audio Transmission</li>
              <li className="features__link">Easy & Stable Stereo Pairing</li>
              <li className="features__link">Crisp and Clear High Frequency Sound</li>
              <li className="features__link">Streams from Cloud Music and Local Library</li>
              <li className="features__link">Auto Music Playback from Last Song Stopped</li>
            </ul>
          </div>

          <div className="features--2">
            <h3 className="features__title-small">Connectivity</h3>
            <ul className="features__list">
              <li className="features__link">Hands Free Wireless Audio</li>
              <li className="features__link">Bluetooth 4.0 LE</li>
              <li className="features__link">Wi-Fi 2.4 GHz (802.11 b/g/n)</li>
              <li className="features__link">Smart Multiroom System Set Up</li>
              <li className="features__link">Party Mode with 6.0 Units and above</li>
              <li className="features__link">Powerful MESHNET Multi Speaker Network</li>
            </ul>
          </div>

          <div className="features--3">
            <h3 className="features__title-small">App Features</h3>
            <ul className="features__list">
              <li className="features__link">Customize Music Schedule</li>
              <li className="features__link">Wake Up with Favorite Songs</li>
              <li className="features__link">Home Detection Auto Wake Up</li>
              <li className="features__link">Color Wheel & Saturation Change</li>
            </ul>
          </div>


          <div className="features__slide">
            <img
              className="features__slide-left"
              src="/images/slide-left.svg"
              alt="go-left"
            />
            <img src="/images/slide-right.svg" alt="go right"/>
            {/* <!-- <span className="features__slide-right"></span> --> */}
          </div>
          <div className="features__slide features__slide--text">
            <span className="features__slide--text-first">01</span>
            <span className="features__slide--text-second">/ 03</span>
          </div>
          <img
            src="/images/features.png"
            alt="features speakers"
            className="features__image"
          />
        </div>
      </section>

      <section className="questions" id="questions">
        <div className="grid">
          <h2 className="questions__title grid__item--1-4 grid__item--desktop-2-6"
          >
            DO YOU HAVE ANY QUESTIONS?
          </h2>
          <form
            action=""
            className="grid__item--5-8 grid__item--desktop-8-10"
          >
            <input
              required
              name="email"
              type="email"
              placeholder="Your email"
              className="questions__field"
            />
            <textarea
              required
              name="message"
              placeholder="Your message..."
              className="questions__field questions__textarea"
          ></textarea>
            <button className="questions__button">
              SEND
            </button>
          </form>
        </div>
      </section>

    </main>
  )
}
