import React from "react";
import { Linkedin, Twitter, Telegram,EnvelopeFill, Github } from 'react-bootstrap-icons';
import '../mainComponent/about.css'
const Footer = () => {
    return (
        <>
           <div className=" bg-dark-subtle text-white  sticky-bottom " >
        <div class=" mt-5  container" >
            <div class="row g-0 ">
              <div class="col-md-12 col-sm-12 col-lg-12 col-xl-4 col-xxl-4">
              </div>
              <div class="col-md-12 col-sm-12 col-lg-12 col-xl-4 col-xxl-4 d-flex align-items-center  justify-content-center">
              <a href='https://www.linkedin.com/in/shivu-bhatt-959003218/' target='#' class="link-dark p-3 bottom-text fs-4 card-hover"><Linkedin/></a>
              <a href='https://twitter.com/shivu_bhatt' target='#' class="link-dark p-3 bottom-text fs-4 card-hover"><Twitter/></a>
              <a href='https://t.me/shivu4u' target='#' class="link-dark p-3 bottom-text fs-4 card-hover"><Telegram/></a>
              <a href='mailto:4u14shivu@gmail.com' target='#' class="link-dark p-3 bottom-text fs-4 card-hover"><EnvelopeFill/></a>
              <a href='https://github.com/4shivu03/' target='#' class="link-dark p-3 bottom-text fs-4 card-hover"><Github/></a>
              </div>
              <div class="col-md-12 col-sm-12 col-lg-12 col-xl-4 col-xxl-4">
              </div>
            </div>
            </div>
            </div>
            
        </>
    )
}
export default Footer;