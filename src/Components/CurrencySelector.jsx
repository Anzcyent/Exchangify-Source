import React, { Component } from 'react'

export class CurrencySelector extends Component {
    render() {
        const { currencies, handleSelectedCurrency, handleWillBeConvertedCurrency } = this.props;

        return (
            <div className="currency-selector">
                <label >Select Currency</label>
                <select onChange={(e) => handleSelectedCurrency(e.target.value)}>
                    {currencies?.map(c => <option key={c.id} value={c.id}>{c.id} ({c.name})</option>)}
                </select>

                <span>To</span>

                <select onChange={(e) => handleWillBeConvertedCurrency(e.target.value)}>
                    {currencies?.map(c => <option key={c.id} value={c.id}>{c.id} ({c.name})</option>)}
                </select>
            </div>
        )
    }
}

export default CurrencySelector