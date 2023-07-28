import Past from '../images/past.jpg'
import Present from '../images/present.jpg'
import Future from '../images/future.jpg'
import './about.css'

// const [values, setValues] = useState(['Value 1', 'Value 2', 'Value 3']);
const About = () => {
  const about = [
    {
      i: Past,
      h: "Unearthing the Past",
      p: `6 months of Expirience as a SEO engineer in Plant Ayurveda ptv. ltd., Mohali (India) ${<br></br>} 1.6 years of Expirience as a Software developer in HSVP Panchkula Haryana (India). `
    },
    {
      i: Present,
      h: "Current Pursuits",
      p: "currently i am working as a software developer in New Haryana Civil Secratriate, Chandigarh (India).<br></br>i am enjoying my work as a software developer.",
    },
    {
      i: Future,
      h: "Future Vision",
      p: "I am a forward-thinking software developer with a vision to lead an innovative IT company that leverages cutting-edge technologies to reshape industries and drive positive change. Together, we will build transformative solutions that empower businesses and propel us into a future of boundless possibilities."
    }
  ]

  const about1 = [
    {
      i: Past,
      h: "Unearthing the Past",
      p: `6 months of Expirience as a SEO engineer in Plant Ayurveda ptv. ltd., Mohali (India) and 1.6 years of Expirience as a Software developer in HSVP Panchkula Haryana (India). `
    },
    {
      i: Present,
      h: "Current Pursuits",
      p: "currently i am working as a software developer in New Haryana Civil Secratriate, Chandigarh (India). i am enjoying my work as a software developer.",
    },
    {
      i: Future,
      h: "Future Vision",
      p: "I am a forward-thinking software developer with a vision to lead an innovative IT company that leverages cutting-edge technologies to reshape industries and drive positive change. Together, we will build transformative solutions that empower businesses and propel us into a future of boundless possibilities."
    }
  ]

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
                  Database Tools (SQL, postgresql )
                </li>
                <li>
                  knowledge of (React, Node js, Express for Node API, Mongodb )
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
          {
            about.map((info, index) => {
              return (
                <div class="card col-md-12 col-sm-12 col-lg-3 col-xl-3 col-xxl-3 m-3 border border-light shadow-lg rounded card-hover" key={index}>
                  <img src={info.i} class="img-fluid rounded-end" alt="..." className='img-fluid' />
                  <div class="card-body ">
                    <h5 class="card-title">{info.h}</h5>
                    <p class="card-text">{info.p}</p>
                  </div>
                </div>)
            })
          }
          <div class="col-md-12 col-sm-12 col-lg-1 col-xl-1 col-xxl-1"></div>
        </div>
      </div>
    </>
  )
}
export default About