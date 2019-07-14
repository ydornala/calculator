import React from 'react';

import { ThemeContext } from '../theme-context';

class Operations extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <div className="operations-wrapper">
                        <button className="digit" style={{ backgroundColor: theme.btnColor, color: theme.color }} type="button" onClick={e => this.props.Clear(e)}>AC</button>
                        <button className="digit" style={{ backgroundColor: theme.btnColor, color: theme.color }} type="button" onClick={e => this.props.Add(e)}>+</button>
                        <button className="digit" style={{ backgroundColor: theme.btnColor, color: theme.color }} type="button" onClick={e => this.props.Multiply(e)}>*</button>
                        <button className="digit" style={{ backgroundColor: theme.btnColor, color: theme.color }} type="button" onClick={e => this.props.Subtract(e)}>-</button>
                        <button className="digit" style={{ backgroundColor: theme.btnColor, color: theme.color }} type="button" onClick={e => this.props.Divide(e)}>/</button>
                        <button className="digit" style={{ backgroundColor: theme.btnColor, color: theme.color }} type="button" onClick={e => this.props.Equal(e)}>=</button>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Operations;