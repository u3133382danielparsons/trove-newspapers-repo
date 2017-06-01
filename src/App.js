import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const {data} = this.props;
    const NamesList = data.map(name => {
      return(
        <li key={name.id} className={name.place}>{name.title}</li>
      )
    })




    return (
      <div>
        <header>
          <h1>
            Trove Newspapers
          </h1>
        </header>
        <div className="flex-container">
          <main>
            <ul>
              {NamesList}
            </ul>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
