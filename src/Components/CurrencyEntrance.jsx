import React, { Component } from 'react'

export class CurrencyEntrance extends Component {
    render() {
        const {selectedCurrency, willBeConvertedCurrency, handleChangeValue, result} = this.props;
        return (
            <div className="currency-entrance">
                <label htmlFor="cur-1">{selectedCurrency}</label>
                <input onChange={(e) => handleChangeValue(e.target.value)} type="number" placeholder={`Type ${selectedCurrency} value`} id="cur-1" />

                <label htmlFor="cur-2">{willBeConvertedCurrency}</label>
                <input type="number" disabled placeholder={result ? result : willBeConvertedCurrency} id="cur-2" />
            </div>
        )
    }
}

export default CurrencyEntrance