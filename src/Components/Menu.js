import React from 'react';
import Color from './Color';
import Block from './Block';
import Feed from './Feed';

const Menu = () => { 
    const colors = ['red', 'green', 'blue', 'pink']

    const newBlock = (color) => {
      // Feed.updateBlocks(color);
    }

    return (
      <div className="colorOptions">
          {
            colors.map(color => (<Color color={color} handleClick={() => newBlock({color})}> </Color>))
            // colors.map(color => (<Color color={color} handleClick={Feed.updateBlocks(color)}> </Color>))
          }
      </div>
    );
}

export default Menu;