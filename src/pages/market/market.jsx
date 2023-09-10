import './market.scss'
import { COINS } from "../../data/data";
import { Button } from "react-bootstrap";

const Market = () => {
  return (
    <section id='market' className='default-section'>
      <div className="market-content table-responsive">
        <h1>Market Update</h1>
        <table className="table-def">
          <thead>
            <tr className='add-bg'>
              <th>Currency</th>
              <th>Price</th>
              <th>24h Change</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
          {COINS.map(coin => (
            <tr className='tr-b' key={coin.id}>
              <td className='flex-td'>
                <img src={coin.image} />
                <span>{coin.name}</span>
              </td>
              <td>{coin.price}</td>
              <td className={['red-color', 'green-color'][Math.floor(Math.random() * (1 - 0 + 1) + 0)]}>

                {coin.changes}
              </td>
              <td>{coin.market_cap}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <div className='footer-style'>
        <Button size='lg' variant='outline-secondary'>View More</Button>
        <Button size='lg' variant='outline-secondary'>Next</Button>
      </div>
    </section>
  )
}
export default Market