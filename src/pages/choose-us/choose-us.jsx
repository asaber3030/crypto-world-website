import './choose-us.scss'

import CenterImage from '../../assets/images/choose-us-image.svg'
import {CHOOSE_US_DATA} from "../../data/choose-us-data";

const ChooseUs = () => {
  return (
    <section id='choose' className='default-section'>

      <div className="header">
        <h1>Why <span>Choose Us</span></h1>
      </div>

      <div className="content">

        <section className='icons-section'>
          {CHOOSE_US_DATA.slice(0, 3).map(item => (
            <div className="item" key={item.id}>
              <div className="left-item">
                <img src={item.image} alt=""/>
              </div>
              <div className="right-item">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="center-picture">
          <img src={CenterImage} alt=""/>
        </section>

        <section className='icons-section'>
          {CHOOSE_US_DATA.slice(3, 6).map(item => (
            <div className="item" key={item.id}>
              <div className="left-item">
                <img src={item.image} alt=""/>
              </div>
              <div className="right-item">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </section>

      </div>

    </section>
  )
}
export default ChooseUs