import React from 'react';

import Digit from '../Digit';

export default class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = { inField: '', operationClicked: false };
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        console.log('Props calcualtor ==> ', this, this.state); 
        this.handleChange = this.handleChange.bind(this);
        this.handleDigit = this.handleDigit.bind(this);
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
        console.log('Equal ==> ', this);
        
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
        console.log('pre', previousValue);
        
        console.log('handle Digit ==> ', this);
        
        if(this.state.operationClicked) {
            this.setState({inField: '', operationClicked: false, previousValue: previousValue});
            this.setState({inField: e.target.value});
        } else {
            this.setState({inField: this.state.inField + e.target.value});
        }

    }

    handleChange(e) {
        this.setState({inField: e.target.value});
        console.log('clicked', this);
    }

    square(e) {
        var n = Number(this.state.inField);

        this.setState({inField: Math.pow(n, 2)});
    }

    squareRoot(e) {
        var n = Number(this.state.inField);
        this.setState({inField: Math.sqrt(n)});
    }

    toggleSign(e) {
        var n = -(this.state.inField);

        this.setState({inField: n});
    }

    render() {
        return (            
            <div className="container-wrapper">
                <input className="resultField" type="number" value={this.state.inField} onChange={this.handleChange} />

                <Digit numbers={ this.numbers } handleDigit={this.handleDigit} {...this.props}/>
                <div className="operations-wrapper">
                    <button type="button" onClick={e => this.Clear(e)}>AC</button>
                    <button type="button" onClick={e => this.Add(e)}>+</button>
                    <button type="button" onClick={e => this.Multiply(e)}>*</button>
                    <button type="button" onClick={e => this.Subtract(e)}>-</button>
                    <button type="button" onClick={e => this.Divide(e)}>/</button>                                
                    <button type="button" onClick={e => this.Equal(e)}>=</button>
                </div>
                <div className="scientific-mode">
                    <button type="button" onClick={e => this.toggleSign(e)}>Sign</button>
                    <button type="button" onClick={e => this.square(e)}>x<sup>2</sup></button>
                    <button type="button" onClick={e => this.squareRoot(e)}><span>&#8730;</span>x</button>
                </div>
            </div>
        );
    }
}