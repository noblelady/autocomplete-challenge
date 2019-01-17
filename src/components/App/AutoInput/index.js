import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ResultList from '../ResultList';
import './index.css';

class AutoInput extends PureComponent {
  static propTypes = {
   dataset: PropTypes.array,
   focused: PropTypes.bool,
 };

 static defaultProps = {
   dataset: [],
   focused: false,
 };

  constructor() {
    super();
    this.state = {
      activeResult: 0,
      results: null,
      userInput: '',
    };
  }

  handleChange = (e) => {
    const { dataset } = this.props;
    const userInput = e.target.value;
    let filteredResults = [];

    if(userInput.length < 3){
      this.setState({
        results: null,
        userInput: userInput,
      });
      return;
    }; // If there are less than 3 chars we don't filter
    if(!dataset[0]) return; // no dataset then can't do anything else

    if(typeof dataset[0] === 'object'){

      const titles = dataset.map(obj => obj.title);
      const authors = dataset.map(obj => obj.author);

      const filteredTitles = titles.filter(title =>
        title.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );

      const filteredAuthors = authors.filter(author =>
        author.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );

      if(filteredTitles.length === 0){
        filteredResults = filteredAuthors;
      }else{
        filteredResults = filteredTitles;
      }
    }else{
      filteredResults = dataset.filter(result =>
        result.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
    }

    this.setState({
      results: filteredResults,
      userInput: userInput,
    });
  }

  handleKeyDown = (e) => {
    const { activeResult, results } = this.state;
    //On enter change the value of the input
    if (e.keyCode === 13) {
      this.setState({
        activeResult: 0,
        results: null,
        userInput: results[activeResult]
      });
    }else if (e.keyCode === 38) { // User pressed the up arrow decreases the index
      if (activeResult === 0) {
        return;
      }
      this.setState({ activeResult: activeResult - 1 });
    } else if (e.keyCode === 40) { // User pressed the down arrow increase the index
      if (activeResult - 1 === results.length) {
        return;
      }
      this.setState({ activeResult: activeResult + 1 });
    }
  };

  render() {
    const {
      activeResult,
      results,
      userInput
    } = this.state;

    const {
      focused,
    } = this.props;

    return (
      <div className='auto-input'>
        <input
          autoFocus={focused}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          placeholder='Enter at least 3 letters'
          type='text'
          size='50'
          value={userInput}
        />
        {results !== null &&
          <ResultList
            activeResult={activeResult}
            suggestions={results}
          />
        }
      </div>
    );
  }
}

export default AutoInput;
