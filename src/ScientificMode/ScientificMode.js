import React from 'react';

import { ThemeContext } from '../theme-context';

class ScientificMode extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <div className="scientific-mode">
                        <button className="digit" style={{ backgroundColor: theme.btnColor, color: theme.color }} type="button" onClick={e => this.props.toggleSign(e)}>Sign</button>
                        <button className="digit" style={{ backgroundColor: theme.btnColor, color: theme.color }} type="button" onClick={e => this.props.square(e)}>x<sup>2</sup></button>
                        <button className="digit" style={{ backgroundColor: theme.btnColor, color: theme.color }} type="button" onClick={e => this.props.squareRoot(e)}><span>&#8730;</span>x</button>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default ScientificMode;