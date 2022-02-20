import { GET_CURRENCY_RATES, GET_CURRENCY_RATES_SUCCESS, GET_CURRENCY_RATES_FAIL, GET_CURRENCIES, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_FAIL } from "../Constants/currencyConstants";

const initialState = {};

export default function currencyReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENCY_RATES:
            return Object.assign({}, state, { isPending: true });
        case GET_CURRENCY_RATES_SUCCESS:
            return Object.assign({}, state, { currencyRates: action.payload, isPending: false });
        case GET_CURRENCY_RATES_FAIL:
            return Object.assign({}, state, { currencyRates: action.payload, isPending: false });
        case GET_CURRENCIES:
            return Object.assign({}, state, { isPending: true });
        case GET_CURRENCIES_SUCCESS:
            return Object.assign({}, state, { currencies: action.payload, isPending: false });
        case GET_CURRENCIES_FAIL:
            return Object.assign({}, state, { currencies: action.payload, isPending: false });
        default:
            return state;
    }
}