import React from 'react'

import './Image.css'

export const Image = ({imgPath, imgDesc}) => {
    return(
        <img 
            className='RoundImage'
            alt={imgDesc}
            src={imgPath}
        />
    )
}