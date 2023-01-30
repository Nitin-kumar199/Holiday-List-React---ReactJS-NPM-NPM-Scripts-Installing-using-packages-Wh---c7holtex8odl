import React, { Component } from "react";
import '../styles/App.css';
class App extends Component {
    constructor(props) {
        super(props)
        this.cityList = [{ name: 'Goa', country: 'India' },
        { name: 'Amsterdam', country: 'Netherlands' },
        { name: 'New York', country: 'USA' },
        { name: 'Darjeeling', country: 'India' },
        { name: 'Tokyo', country: 'Japan' },
        { name: 'Lonavala', country: 'India' },
        ]
        this.valid = this.valid.bind(this)
    }
    valid() {
        let a = [];
        let j = 1;
        for (let i = 0; i < this.cityList.length; i++) {
            if (this.cityList[i].country === 'India') {
                a.push(<li key={'location' + j++} >{this.cityList[i].name}</li >)
            }
        }
        return a;
    }
    render() {
        return (
            <ol>
                {this.valid()}
            </ol>
        )
    }
}
export default App;
