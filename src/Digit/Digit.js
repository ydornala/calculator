import React from 'react';

import './Digit.scss';

import { themes, ThemeContext } from '../theme-context';

export default class Digit extends React.Component {

    constructor(props) {
        super(props);

        console.log('diri', themes, ThemeContext.Consumer);
    }

    render() {
        return (
            <ThemeContext.Consumer>
            {
                theme => (
                    this.props.numbers.map((n, index) => (
                        <span className="digit-wrapper">
                            <input style={{backgroundColor: theme.btnColor, color: theme.color }} className="digit" key={index} type="button" value={n} onClick={e => this.props.handleDigit(e)}/>
                        </span>
                    ))
                )
            }

            </ThemeContext.Consumer>
        );
    }
}