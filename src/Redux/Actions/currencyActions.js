import { GET_CURRENCY_RATES, GET_CURRENCY_RATES_SUCCESS, GET_CURRENCY_RATES_FAIL, GET_CURRENCIES, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_FAIL } from "../Constants/currencyConstants";

export const getCurrencies = () => (dispatch) => {
    dispatch({ type: GET_CURRENCIES });

    fetch("https://api.coinbase.com/v2/currencies")
        .then(res => res.json())
        .then(data => dispatch({ type: GET_CURRENCIES_SUCCESS, payload: data.data }))
        .catch(err => dispatch({ type: GET_CURRENCIES_FAIL, payload: err }));
}

export const getCurrencyRates = (selectedCurrency) => (dispatch) => {
    dispatch({ type: GET_CURRENCY_RATES });

    fetch(`https://api.coinbase.com/v2/exchange-rates?currency=${selectedCurrency}`)
        .then(res => res.json())
        .then(data => dispatch({ type: GET_CURRENCY_RATES_SUCCESS, payload: data.data }))
        .catch(err => dispatch({ type: GET_CURRENCY_RATES_FAIL, payload: err }));
}