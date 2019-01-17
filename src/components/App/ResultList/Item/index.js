import React,{ PureComponent } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Item extends PureComponent {
  static propTypes = {
    active: PropTypes.bool,
    text: PropTypes.string
 };

 static defaultProps = {
   active: false,
   text: ''
 };

  render(){
    const { active, text }= this.props;
    return (
      <React.Fragment>
        <div className='item-wrapper'>
          <div className={active ? 'active-item' : 'nonactive-item'}>
            {text}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Item;
