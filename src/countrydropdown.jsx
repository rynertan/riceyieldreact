import React from 'react';
import Countries from "./country_code.json"

class SelectCountry extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            country: 0
        }
    }
    onChange = (country) => {
        this.props.onSelectedC(country.target.value);
    };
    buildCountries() {
        const beforearray = JSON.stringify(Countries)
        const countryArray = JSON.parse(beforearray);
        let optionItems = Object.keys(countryArray).map((item) =>
        <option key={item} value={countryArray[item]}>{item}</option>
        );
        return optionItems
    }
    render() {
        return (
            <select className="select-country" onChange={this.onChange} country={this.props.country} >
                <option>-- Select your country --</option>
                {this.buildCountries()}
            </select>
        );
    }
}

export default SelectCountry;