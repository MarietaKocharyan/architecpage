import React, { Component } from 'react';
import MediaCard from './cards'

class Artsof extends Component {
    render() {  
        for(let i = 0; i < 9; i++){
            return ( 
                <MediaCard />
            );
        }
    }
};

export default Artsof;
