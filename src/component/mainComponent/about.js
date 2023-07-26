import MyImage from '../images/home/home page.jpg'
import './about.css'
const About = () => {
  return (
    <>
      <div className="card-body ">
        <div className='row'>
          <div className='col-md-12 col-sm-12 col-lg-1 col-xl-1 col-xxl-2'>
          </div>
          <div className='col-md-12 col-sm-12 col-lg-8 col-xl-8 col-xxl-8 m-5'>
            <div class="card-body">
              <h3 class="card-title  text-center m-3">About Me</h3>
              <h5 class="card-title  m-3">Introduction</h5>
              <p class="card-text">
                As You Know I my name is Shivam Bhatt and i am a software  developer. My love for coding and problem-solving has driven me to pursue a career where I can create meaningful applications that positively impact people's lives. With a commitment to excellence and a constant thirst for knowledge, I strive to stay at the forefront of the ever-evolving tech world. Through my work, I aim to leave a lasting impression, contributing to the advancement of the digital landscape.
              </p>
              <h5 class="card-title  m-3">Skills</h5>
              <ul>
              <li>
                  Strong knowledge of (HTML, CSS, JS, Bootstrap)
                </li>
                <li>
                  Dot net developer (asp.net, c#, MVC, Web API)
                </li>
                <li>
                   Database Tools (SQL, postgresql, knowledge of Mongodb)
                </li>
                <li>
                  knowledge of (React, Node js, Express for Node API )
                </li>
              </ul>
              <h5 class="card-title  m-3">Expirience</h5>
              <p class="card-text">
              I have total 1.5<sup>+</sup> years of Expirience. as follow:
              </p>
              <ul>
              <li>
              3 months of Expirience as a SEO engineer.
                </li>
                <li>
                1.7 years of Expirience as a Software developer.
                </li>
              </ul>
              
            </div>
          </div>
          <div className='col-md-12 col-sm-12 col-lg-2 col-xl-2 col-xxl-2'>
          </div>
        </div>
        <div class="row g-0">
          <div class="col-md-12 col-sm-12 col-lg-1 col-xl-1 col-xxl-1"></div>
          <div class="card col-md-12 col-sm-12 col-lg-3 col-xl-3 col-xxl-3 m-3 border border-light shadow-lg rounded card-hover">
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <img src={MyImage} class="img-fluid rounded-end" alt="..." className='img-fluid' />
            <div class="card-body ">
              <h5 class="card-title">Unearthing the Past</h5>
              <p class="card-text"> 3 months of Expirience as a SEO engineer in Plant Ayurveda ptv. ltd., Mohali (India) </p>
              <p class="card-text"> 1.5 years of Expirience as a Software developer in HSVP Panchkula Haryana (India). </p>
            </div>
          </div>
          
          <div class="card col-md-12 col-sm-12 col-lg-3 col-xl-3 col-xxl-3 m-3 border border-light shadow-lg rounded card-hover">
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <img src={MyImage} class="img-fluid rounded-end" alt="..." className='img-fluid ' />
            <div class="card-body">
              <h5 class="card-title">Current Pursuits</h5>
              <p class="card-text">currently i am working as a software developer in New Haryana Civil Secratriate, Chandigarh (India).<br></br>i am enjoying my work as a software developer.
              </p>
            </div>
          </div>
          
          <div class="card col-md-12 col-sm-12 col-lg-3 col-xl-3 col-xxl-3 m-3 border border-light shadow-lg rounded card-hover">
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <img src={MyImage} class="img-fluid rounded-end" alt="..." className='img-fluid' />
            <div class="card-body">
              <h5 class="card-title">Future Vision</h5>
              <p class="card-text">I am a forward-thinking software developer with a vision to lead an innovative IT company that leverages cutting-edge technologies to reshape industries and drive positive change. Together, we will build transformative solutions that empower businesses and propel us into a future of boundless possibilities.</p>
            </div>
          </div>
          <div class="col-md-12 col-sm-12 col-lg-1 col-xl-1 col-xxl-1"></div>
        </div>
      </div>
    </>
  )
}
export default About