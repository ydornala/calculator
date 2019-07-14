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
      theme: themes.light,
      isActiveScientificMode: false
    };

    this.toggleTheme = this.toggleTheme.bind(this);
    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleTheme() {
    this.setState({
      theme: this.state.theme === themes.dark ? themes.light : themes.dark
    });
  }

  toggleMode() {
    this.setState({isActiveScientificMode: !this.state.isActiveScientificMode});
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <div className="App" style={{backgroundColor: this.state.theme.background}}>
          <Header changeTheme={this.toggleTheme} toggleMode={this.toggleMode}/>
          <Calculator changeTheme={this.toggleTheme} isModeActive={this.state.isActiveScientificMode}/>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
