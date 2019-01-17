import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

class ResultList extends PureComponent {
  static propTypes = {
    activeResult: PropTypes.number,
    suggestions: PropTypes.instanceOf(Array)
 };

 static defaultProps = {
   suggestions: []
 };

  render(){
    const { activeResult, suggestions } = this.props;
    //map the items to this list and it also renders the message if there are no suggestionns
    const items = suggestions.map((item, index) => {
      console.log(index === activeResult)
      return <Item active={index === activeResult } key={index} text={item} />
    });

    return (
      <React.Fragment>
        {items.length === 0 ? <p>No results found!</p> : items}
      </React.Fragment>
    );
  }
}

export default ResultList;
