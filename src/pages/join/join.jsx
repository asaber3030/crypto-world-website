import './join.scss'

import ArrowUp from '../../assets/images/up-arrow.png'
import Bitcoin from '../../assets/images/bitcoin.png'

import { motion } from "framer-motion";
import {Button} from "react-bootstrap";
import {FaDiscord, FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

const JoinUs = () => {
  const animateHeaderImages = {
    y: ["25%", "-25%"]
  }
  const transitionHeaderImages = {
    y: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeOut"
    }
  }

  return (
    <section id="join" className='default-section'>
      <div className="header-container">
        <div className="left-side">
          <div className='header-s'>
            <motion.img
              src={ArrowUp}
              animate={animateHeaderImages}
              transition={transitionHeaderImages}
            />
            <h1>Join Us Via</h1>
            <motion.img
              src={Bitcoin}
              animate={animateHeaderImages}
              transition={transitionHeaderImages}
            />
          </div>
          <div className="footer-s">
            Platform
          </div>
          <p>Invest and manage all of your crypto currencies at same place!</p>
          <Button>Join Us</Button>
        </div>

      </div>


      <div className="social-media">
        <a target='_blank' href="https://www.facebook.com/asaber.25/"><FaFacebook /></a>
        <a target='_blank' href="https://www.instagram.com/asaber.3030/"><FaInstagram /></a>
        <a target='_blank' href="https://www.linkedin.com/in/abdulrahman-saber/"><FaLinkedin /></a>
        <a target='_blank' href="https://github.com/asaber3030"><FaGithub /></a>
      </div>

    </section>
  )
}
export default JoinUs