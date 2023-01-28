import React from 'react'

import {Image} from './../Image/Image'
import {StayDescription} from './../StayDescription/StayDescription'
import './StayTile.css'

export const StayTile = ({imgPath, imgDesc, isSuperHost, rating, stayType, stayBds}) => {
    return(
        <div className='Tile mx-4'>
            <Image
                imgPath={imgPath}
                imgDesc={imgDesc} 
            />
            <StayDescription
                isSuperHost={isSuperHost}
                rating={rating}
                stayType={stayType}
                stayBds={stayBds}
                title={imgDesc}
            />
        </div>
    )
}