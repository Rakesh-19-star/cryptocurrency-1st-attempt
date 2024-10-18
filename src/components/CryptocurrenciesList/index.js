// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}
  componentDidMount() {
    this.getCurrencyList()
  }
  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currenyLogo: each.currency_logo,
    }))
    console.log(formattedData)
    this.setState({currencyList: formattedData, isLoading: false})
  }
  renderBlogList = () => {
    const {currencyList, isLoading} = this.state
    return (
      <div className="CryptocurrenciesList-bg">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
          alt="cryptocurrency"
          className="image"
        />
        <div className="cryptocurrency-table-con">
          <div className="heading-con">
            <h1 className="header">Coin Type</h1>
            <div className="usd-euro-con">
              <h1 className="header">USD</h1>
              <h1 className="header">EURO</h1>
            </div>
          </div>
          <div className="currencyList-con"></div>
          {currencyList.map(each => (
            <CryptocurrencyItem key={each.id} currencyList={each} />
          ))}
        </div>
      </div>
    )
  }
  renderLoader = () => (
    <div testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )
  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? this.renderLoader() : this.renderBlogList()}
      </div>
    )
  }
}
export default CryptocurrenciesList
