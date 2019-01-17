import React, { PureComponent } from 'react';
import AutoInput from './AutoInput';
import './index.css';

const cities = [
  'san jose', 'santiago', 'san francisco', 'santa rosa', 'san juan', 'sabadell', 'salamanca', 'salt lake city', 'salinas', 'salem', 'sausalito', 'taipei', 'tel aviv', 'tempe', 'termez', 'temuco', 'tiajuna', 'tieling', 'thousand oaks', 'thunder bay', 'tokyo', 'tulsa'
];

const books = [
  {
    title: 'Don Quixote',
    author: 'Miguel De Cervantes',
  },
  {
    title: 'Pilgrim\'s Progress',
    author: 'John Bunyan',
  },
  {
    title: 'Robinson Crusoe',
    author: 'Daniel Defoe',
  },
  {
    title: 'Gulliver\'s Travels',
    author: 'Jonathan Swift',
  },
  {
    title: 'Tom Jones',
    author: 'Henry Fielding',
  },
  {
    title: 'Clarissa',
    author: 'Samuel Richardson',
  },
  {
    title: 'Tristram Shandy',
    author: 'Laurence Sterne',
  },
];

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Autocomplete Challenge </h1>
            <p id='info'>
              Enter a city or book name in the inputs below
              <br />
              Use the arrow keys to scroll
            </p>
          <div className='autocomplete-wrapper'>
            <div className='autocomplete-section'>
              <h3>Cities</h3>
              <AutoInput dataset={cities} focused/>
            </div>
            <div className='autocomplete-section'>
              <h3>Books</h3>
              <AutoInput dataset={books}/>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
