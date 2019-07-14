import React from 'react';

import Digit from '../Digit';
import Operations from '../Operations';
import ScientificMode from '../ScientificMode';

import { ThemeContext } from '../theme-context';

export default class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = { inField: '', operationClicked: false };
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        this.handleChange = this.handleChange.bind(this);
        this.handleDigit = this.handleDigit.bind(this);

        this.Clear = this.Clear.bind(this);
        this.Add = this.Add.bind(this);
        this.Subtract = this.Subtract.bind(this);
        this.Divide = this.Divide.bind(this);
        this.Multiply = this.Multiply.bind(this);
        this.Equal = this.Equal.bind(this);

        this.toggleSign = this.toggleSign.bind(this);
        this.square = this.square.bind(this);
        this.squareRoot = this.squareRoot.bind(this);

        console.log('toggle mode calc', this);
    }

    Add() {
        this.setState({operationClicked: true, operation: 'a' });
    }

    Multiply() {
        this.setState({operationClicked: true, operation: 'm' });
    }

    Divide() {
        this.setState({operationClicked: true, operation: 'd' });
    }

    Subtract() {
        this.setState({operationClicked: true, operation: 's' });
    }

    Equal() {
        const pV = Number(this.state.previousValue);
        const pr = Number(this.state.inField);

        var e;
        
        switch (this.state.operation) {
            case 'a':
                e = pV + pr;
                break;
            case 's':
                e = pV - pr;
                break;
            case 'm':
                e = pV * pr;
                break;
            case 'd':
                e = pV / pr;
                break;
            default:                
                break;
        }
        
        this.setState({inField: e});
    }

    Clear() {
        this.setState({inField: '', previousValue: '', operationClicked: false});
    }

    handleDigit(e) {
        var previousValue = this.state.inField;
        
        if(this.state.operationClicked) {
            this.setState({inField: '', operationClicked: false, previousValue: previousValue});
            this.setState({inField: e.target.value});
        } else {
            this.setState({inField: this.state.inField + e.target.value});
        }

    }

    handleChange(e) {
        this.setState({inField: e.target.value});
    }

    square(e) {
        var n = Number(this.state.inField);

        this.setState({inField: Math.pow(n, 2)});
    }

    squareRoot(e) {
        console.log('squart', this.state.inField, typeof this.state.inField);
        var n = Number(this.state.inField);   

        if(isNaN(Math.sqrt(n))) {
            n = 'Not a Number';
            alert(n);
        } else {
            n = Math.sqrt(n);
        }
        this.setState({inField: n});
    }

    toggleSign(e) {
        var n = -(this.state.inField);

        this.setState({inField: n});
    }

    render() {
        console.log('calc red', this.props);
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <div className="container-wrapper">
                        <input className="resultField" type="number" value={this.state.inField} onChange={this.handleChange} />

                        <Digit numbers={ this.numbers } handleDigit={this.handleDigit} {...this.props}/>
                        <Operations Add={this.Add} Subtract={this.Subtract} Multiply={this.Multiply} Divide={this.Divide} Clear={this.Clear} Equal={this.Equal}/>
                        {this.props.isModeActive && (<ScientificMode square={this.square} squareRoot={this.squareRoot} toggleSign={this.toggleSign} />)}
                    </div>
                )}

            </ThemeContext.Consumer>
        );
    }
}