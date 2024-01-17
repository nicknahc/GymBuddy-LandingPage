import "./App.css";
function App() {
  return (
    <div className="App">
      <header>
        <div className="header">
          <div>
            <img src="logo.png" alt=""></img>
          </div>
          <ul className="header-buttons">
            <li className="header-link">Features</li>
            <li className="header-link">About Us</li>
            <li className="header-link">Contact</li>
            <li>
              <button className="button">Download ✨</button>
            </li>
          </ul>
        </div>
      </header>

      <section className="landing-page">
        <div className="landing-page-content side-padding">
          <h1 className="fs-900">gym together!</h1>
          <img src="landing-image.png" alt=""></img>
        </div>
      </section>
      <section className="stats side-padding">
        <h2 className="fs-900">1 3 8 2+</h2>
        <p className="stats-caption">matches made at</p>
        <div className="school-logos">
          <img src="davis-logo.png" alt=""></img>
          <img src="berkeley-logo.png" alt=""></img>
          <img src="stanford-logo.png" alt=""></img>
        </div>
      </section>

      <section className="feature-brief side-padding">
        <p className="section-caption">How It Works</p>
        <h3 className="fs-800">Find people who motivate you 🏋️</h3>
        <ol>
          <li className="feature-brief-item">
            <img alt="" src="phone-1.png"></img>
            <div className="feature-brief-step">
              <div className="numbered-circle">
                <div className="circle-number">1</div>
              </div>
              <div className="feature-brief-text">
                <h7 className="numbered-item fs-700">Set Your Gym Style</h7>
                <p className="feature-brief-step-caption ">
                  matches are made based on your schedule, goals, and interests
                </p>
              </div>
            </div>
          </li>
          <li className="feature-brief-item reverse">
            <div className="feature-brief-step">
              <div className="numbered-circle">
                <div className="circle-number">2</div>
              </div>
              <div className="feature-brief-text">
                <h7 className="numbered-item fs-700">Get Matched</h7>
                <p className="feature-brief-step-caption ">
                  through friend requests or our Quick Pair auto-matching system
                </p>
              </div>
            </div>
            <img alt="" src="phone-2.png"></img>
          </li>
          <li className="feature-brief-item">
            <img alt="" src="phone-3.png"></img>
            <div className="feature-brief-step">
              <div className="numbered-circle">
                <div className="circle-number">3</div>
              </div>
              <div className="feature-brief-text">
                <h7 className="numbered-item fs-700">Gym Together!</h7>
                <p className="feature-brief-step-caption ">
                  chat, send invites, and meet up for a pumped session
                </p>
              </div>
            </div>
          </li>
        </ol>
      </section>
      <section className="testimonials side-padding">
        <div>
          <p className="section-caption">What Our Users Say</p>
          <h4 className="fs-800">Find your community 💙</h4>
          <ul className="slider">
            <li>
              <img src="testimonial-1.png" alt=""></img>
            </li>
            <li>
              <img src="testimonial-2.png" alt=""></img>
            </li>
            <li>
              <img src="testimonial-2.png" alt=""></img>
            </li>
            <li>
              <img src="testimonial-4.png" alt=""></img>
            </li>
            <li>
              <img src="testimonial-2.png" alt=""></img>
            </li>
          </ul>
        </div>
      </section>
      <section className="about-us side-padding">
        <p className="section-caption">About Us</p>
        <h5 className="fs-800">Made for students, by students 👨🏻‍💻</h5>
        <p className="about-us-paragraph">
          It all started when Matthew couldn’t make gym day, and Eugene didn’t
          want to go alone. They realized the importance of having a buddy to
          work out with consistently. Since then, they have embarked on a
          mission to help every student on their fitness journey.
        </p>
        <div className="founders-text">
          <img alt="" src="founders-text.png"></img>
        </div>
      </section>
      <footer className="side-padding">
        <p className="section-caption">The Grind Doesn't Stop</p>
        <div>
          <div className="contact-us">
            <h6 className="fs-800">Become a GymBuddy today!</h6>
            <button className="button">Download 🔥</button>
          </div>
        </div>
        <div className="footer-resources">
          <p>gymbuddy@support.com</p>
          <div className="logo-links">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
