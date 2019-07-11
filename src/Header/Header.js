import React from 'react';
import ButtonToggle from '../ButtonToggle/ButtonToggle';

import './Header.scss';

import logo from '../keepworks-logo.png';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = { active: false };
        console.log('header props', props);
    }

    toggle() {
        this.setState({ active: !this.state.active });
    }

    render() {
        let props = this.props;
        return (
            <header className="header">
                <a href="#">
                    <img src={logo}/>
                    <div>Calculator</div>
                </a>
                <div className="header-right">
                    <button className={`btn ${this.state.active ? 'active' : ''}`} href="#home" onClick={e => this.toggle(e)}>
                        {
                            this.state.active ? 'Scientific Mode' : 'Normal Mode'
                        }
                    </button>
                    <ButtonToggle {...props}/>
                </div>
            </header>
        );
    }
}