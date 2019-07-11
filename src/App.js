import React from 'react';
import './App.scss';

// Custom Components
import Header from './Header';
import Calculator from './Calculator';

import { ThemeContext, themes } from './theme-context';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    }

    this.toggleTheme = this.toggleTheme.bind(this);    
  }

  toggleTheme() {
    this.setState({
      theme: this.state.theme === themes.dark ? themes.light : themes.dark
    });

    console.log('theme', this.state.theme);
  }

  render() {
    let theme = this.context;
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <div className="App" style={{backgroundColor: this.state.theme.background}}>
          <Header changeTheme={this.toggleTheme}/>
          <Calculator changeTheme={this.toggleTheme}/>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
