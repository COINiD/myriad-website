/**
 * Helper for retrieving fees.
 * All fees are displayed as fee-per-byte (in satoshis)
 */

import { EventEmitter } from "events"
import "whatwg-fetch"

const apiUrl = "https://min-api.cryptocompare.com/data"

const fetchFromPriceApi = (ticker, currency) => {
  const url = `${apiUrl}/price?fsym=${ticker.toUpperCase()}&tsyms=${currency.toUpperCase()}`

  return fetch(url)
    .then(r => r.json())
    .then(j => {
      if (!j[currency]) {
        return 0
      }

      return j[currency]
    })
}

const fetchFromHistoricPriceApi = (ticker, currency, timestamp) => {
  const url =
    `${apiUrl}/` +
    "pricehistorical" +
    `?fsym=${ticker}&tsyms=${currency}&ts=${parseInt(timestamp, 10)}`
  return fetch(url)
    .then(r => r.json())
    .then(j => {
      if (!j[ticker]) {
        return 0
      }

      return j[ticker][currency]
    })
}

class ExchangeHelper extends EventEmitter {
  constructor(coin) {
    super()
    const newCoin = coin === "TBTC" ? "BTC" : coin
    this.ticker = newCoin
    this.currencyArr = ["USD", "EUR", "BTC"]
  }

  fetchCurrentPrice = currency => fetchFromPriceApi(this.ticker, currency)

  fetchHistoricPrice = (currency, timestamp) =>
    fetchFromHistoricPriceApi(this.ticker, currency, timestamp)

  convert = (amount, currency) =>
    this.fetchCurrentPrice(currency).then(price => price * amount)
}

const exchangeHelperCache = {} // for local caching so we dont create several for same coin.

export default function (coin) {
  if (exchangeHelperCache[coin] === undefined) {
    exchangeHelperCache[coin] = new ExchangeHelper(coin)
  }

  return exchangeHelperCache[coin]
}
