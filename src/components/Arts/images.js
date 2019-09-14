import React from 'react';
import './imagelist.css';
import ImageCard from './Cards';

const ImageList = (props) => {
    const imgs = props.foundImages.map(img => {
        return <ImageCard key={img.id} image={img} />
    });

    return (
        <div className="image_list">{imgs}</div>
    )
}

export default ImageList;
