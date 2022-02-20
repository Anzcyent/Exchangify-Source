import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCurrencyRates, getCurrencies } from "../Redux/Actions/currencyActions";
import "../Styles/main.css";

import { CurrencySelector, CurrencyEntrance } from "../Components/index";

export class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCurrency: "AED",
            willBeConvertedCurrency: "AED",
            value: 0,
            result: null
        }
    }

    componentDidMount() {
        this.props.actions.getCurrencies();
        this.props.actions.getCurrencyRates(this.state.selectedCurrency);
    }

    static getDerivedStateFromProps(props, state) {
        if (state.selectedCurrency !== props.currencyRates?.currency) {
            props.actions.getCurrencyRates(state.selectedCurrency);
        }

        return null;
    }

    handleSelectedCurrency = (currency) => {
        this.setState({ selectedCurrency: currency });
    }

    handleWillBeConvertedCurrency = (currency) => {
        this.setState({ willBeConvertedCurrency: currency });
    }

    handleChangeValue = (value) => {
        this.setState({ value });
    }

    convert = () => {
        const { rates } = this.props.currencyRates;
        const { willBeConvertedCurrency } = this.state;


        if (JSON.stringify(rates).includes(willBeConvertedCurrency)) {
            const index = JSON.stringify(rates).indexOf(willBeConvertedCurrency);
            const value = JSON.stringify(rates).substring(index + 6, index + 10);
            const result = this.state.value * value;
            this.setState({ result });
        }
    }

    render() {
        return (
            <main className="main">
                <div className="main-content">
                    <CurrencySelector currencies={this.props.currencies} handleSelectedCurrency={this.handleSelectedCurrency} handleWillBeConvertedCurrency={this.handleWillBeConvertedCurrency} />
                    <CurrencyEntrance rates={this.props.currencyRates?.rates} selectedCurrency={this.state.selectedCurrency} willBeConvertedCurrency={this.state.willBeConvertedCurrency} handleChangeValue={this.handleChangeValue} result={this.state.result} />
                    <button onClick={() => this.convert()} className="convert-btn">Convert</button>
                </div>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currencyRates: state.currencyReducer.currencyRates,
        currencies: state.currencyReducer.currencies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            getCurrencyRates: bindActionCreators(getCurrencyRates, dispatch),
            getCurrencies: bindActionCreators(getCurrencies, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);