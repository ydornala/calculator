import React from 'react';

import './Digit.scss';

import { themes, ThemeContext } from '../theme-context';

export default class Digit extends React.Component {

    constructor(props) {
        super(props);
        console.log('Digit props', props);
    }

    render() {
        var props = this.props;
        return (
            <div className="digit-wrapper">
                <ThemeContext.Consumer>
                {
                    theme => (
                        props.numbers.map(function(value, index){
                            return (
                                <input style={{backgroundColor: theme.btnColor, color: theme.color }} className="digit" key={index} type="button" value={value} onClick={e => props.handleDigit(e)}/>
                            )
                        })
                    )
                }
                </ThemeContext.Consumer>
            </div>
        );
    }
}