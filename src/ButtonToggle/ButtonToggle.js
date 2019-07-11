import React from "react";

import './ButtonToggle.scss';

class ButtonToggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {active: true, theme: 'light'};
        console.log('toggle button ', props);
    }

    toggleClass(e) {
        this.setState({active: !this.state.active});
        this.props.changeTheme();
    }

    render() {
        return (
            <div className="btn-group" role="btn-group">
                <button className={ `btn ${ this.state.active ? 'active' : '' }` } type="button" onClick={e => this.toggleClass(e)}>Light Theme</button>
                <button className={ `btn ${ !this.state.active ? 'active' : '' }` } type="button" onClick={e => this.toggleClass(e)}>Dark Theme</button>
            </div>
        );
    }
}

// ButtonToggle.contextType = ThemeContext;

export default ButtonToggle;