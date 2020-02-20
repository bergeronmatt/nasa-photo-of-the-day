import React from 'react';

const Image = props => {
    return <img key={props.id}  src={props.url}/>
}

export default Image;