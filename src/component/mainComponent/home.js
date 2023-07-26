
import MyImage from '../images/home/home page.jpg'
import { Download } from 'react-bootstrap-icons';

const Home = () =>{
  const resumeUrl = '/Resume.pdf';
    return(
      <>
      <div className="card-body">
          <div class="row g-0">
            <div className='col-md-12 col-sm-12 col-lg-1 col-xl-1 col-xxl-1'></div>
       <div class="card mt-5 border col-md-12 col-sm-12 col-lg-10 col-xl-10 col-xxl-10  shadow-lg rounded ">
        <div className='row'>
       <div class="card-body col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
                  <h5 class="card-title">Hello,</h5>
                  <p class="card-text">I'm Shivam Bhatt, a software developer with a passion for crafting innovative solutions and bringing ideas to life through code. With a strong foundation in web development and a keen eye for detail, I strive to create seamless and user-centric digital experiences.</p>
                  <p class="card-text">My journey in software development has been driven by a love for problem-solving and a desire to make a positive impact on the world. I thrive in collaborative environments, where I can work alongside talented teams to tackle complex challenges and turn them into elegant solutions.</p>
                  <p class="card-text"> With expertise in various programming languages, frameworks, and technologies, I continuously seek to expand my knowledge and stay up-to-date with the latest industry trends. Whether it's building interactive web applications, designing responsive user interfaces, or optimizing backend functionality, I'm always eager to take on new and exciting projects.</p>
                  <p class="card-text"> As a software developer, I believe in the power of clean and maintainable code, ensuring that every line I write contributes to robust and scalable solutions. I take pride in my ability to translate ideas into reality and deliver exceptional results that exceed expectations.</p>
                  <p class="card-text"> I invite you to explore my portfolio, where you can find a collection of my projects that showcase my skills and dedication to the world of software development. I'm excited to collaborate on new ventures and contribute my expertise to making a difference in the digital landscape.</p>
                  <p class="card-text"> Let's connect and discuss how I can help bring your vision to fruition. I look forward to embarking on new challenges and making a lasting impact as a software developer. Thank you for visiting my profile!</p>

                  
                  <a href={resumeUrl} download = 'resume.pdf' class="btn btn-dark">Download Resume <Download/></a>
                </div>
                <div class="col-md-12 col-sm-12 col-lg-4 col-xl-4col-xxl-4" style={{overflow:"hidden"}}>
                <img src={MyImage} class="img-fluid rounded-end card-img-left" alt="..." style={{width:"100%",height:"100%", objectFit:"fill"}}/>
                </div>
            </div>
            </div>
            <div className='col-md-12 col-sm-12 col-lg-1 col-xl-1 col-xxl-1'></div>
            </div>
            </div>
      </>
    )
}
export default Home