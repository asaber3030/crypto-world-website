import './home.scss'

import HomePicture from '../../assets/images/home.png'
import ArrowUp from '../../assets/images/up-arrow.png'
import Bitcoin from '../../assets/images/bitcoin.png'
import Ethereum from '../../assets/images/ethereum.png'
import Tether from '../../assets/images/tether.png'
import BNB from '../../assets/images/bn.png'

import {motion} from "framer-motion";

const Home = () => {
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
    <section id="home" className='default-section'>
      <div className="header-container">
        <div className="left-side">
          <div className='header-s'>
            <motion.img
              src={ArrowUp}
              animate={animateHeaderImages}
              transition={transitionHeaderImages}
            />
            <h1>Track and Trade</h1>
            <motion.img
              src={Bitcoin}
              animate={animateHeaderImages}
              transition={transitionHeaderImages}
            />
          </div>
          <div className="footer-s">
            Crypto Currencies
          </div>
        </div>
        <div className="right-side">
          <img src={HomePicture} />
        </div>
      </div>

      <div className="footer-container">
        <div className="currencies">
          <div className="currency">
            <img src={Bitcoin} alt=""/>
            <h1>Bitcoin <span className='green-color'>+1.16%</span></h1>
            <p>$ 25,619.79</p>
          </div>
          <div className="currency">
            <img src={Ethereum} alt=""/>
            <h1>Ethereum <span className='red-color'>-2.48%</span></h1>
            <p>$ 1,615.23</p>
          </div>
          <div className="currency">
            <img src={Tether} alt=""/>
            <h1>Tether USDt <span className='green-color'>+0.02%</span></h1>
            <p>$ 0.9995</p>
          </div>
          <div className="currency">
            <img src={BNB} alt=""/>
            <h1>BNB <span className='green-color'>+2.18%</span></h1>
            <p>$ 212.55</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Home