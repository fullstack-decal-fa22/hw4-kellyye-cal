import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    const [blocks, newBlock] = useState([]);
    // Refer to Hint 2 for more help!
    const updateBlocks = (color) => {
        console.log('updating');
        newBlock(arr => [...arr, color]);
    }

    /* Use the map() function to render multiple Blocks! */
    // const posts = blocks.map(block => (<Block></Block>)); // TODO: edit this variable
    const posts = blocks.map(block => <Block color='block'> </Block> );
    return (
        <div>
            <Menu></Menu>
            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;