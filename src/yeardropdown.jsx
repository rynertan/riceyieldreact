import React from 'react';
import {useState} from 'react';


class SelectYear extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            selected: 0
        }
    }
    onChange = (selected) => {
        this.props.onSelected(selected.target.value);
    };
    buildOptions() {
        var arr = [];

        for (let i = 1961; i <= 2022; i++) {
            arr.push(<option name="myyear" key={i} value={i}>{i}</option>)
        }

        return arr; 
    }
    render() {
        return (
            <select className="select-year" onChange={this.onChange} selected={this.props.selected}  >
                <option >-- Select your year --</option>
                {this.buildOptions()}
            </select>
        );
    }
}

export default SelectYear;