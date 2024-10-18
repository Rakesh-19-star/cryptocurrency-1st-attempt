// Write your JS code here
import './index.css'
const CryptocurrencyItem = props => {
  const {currencyList} = props
  const {currencyName, usdValue, euroValue, id, currenyLogo} = currencyList
  return (
    <div className="item-con">
      <div className="logo-name-con">
        <img src={currenyLogo} className="logo" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="usd-uro-con">
        <p className="price usd-price">{usdValue}</p>
        <p className="price">{euroValue}</p>
      </div>
    </div>
  )
}
export default CryptocurrencyItem
