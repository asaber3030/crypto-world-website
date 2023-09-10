import './navbar.scss'

import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="app-navbar">
      <section className="left-side">
        <a href='#home'>CryptoWorld</a>
      </section>

      <ul className="center-side">
        <li><a href='#home'>Home</a></li>
        <li><a href='#market'>Market</a></li>
        <li><a href='#choose'>Choose Us</a></li>
        <li><a href='#join'>Contact</a></li>
      </ul>

      <section className="right-side">
        <a target='_blank' href="https://www.facebook.com/asaber.25/"><FaFacebook /></a>
        <a target='_blank' href="https://www.linkedin.com/in/abdulrahman-saber/"><FaLinkedin /></a>
      </section>
    </div>
  )
}

export default Navbar