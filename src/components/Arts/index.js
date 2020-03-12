import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './images';

class Arts extends React.Component  {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos?page=1&query=office', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID 21fb49f60e052dffe102c4c9853d22ccd8bb74b0df29e49f1ca9b21eb22b7225'
            }
        })

        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div>
                <SearchBar userSubmit={this.onSearchSubmit}/>
                <span>Found: {this.state.images.length} images</span>
                <ImageList foundImages={this.state.images} />
            </div>
        )
    }

}

export default Arts ;
