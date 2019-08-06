import React from 'react';

const unsplashpics = ({url, key}) => (
    <div className="image-item" key={key} >
        <img src={url} />
    </div>
);