import React from 'react'

import { StayTile } from '../StayTile/StayTile'
import './StayResultsContainer.css'

export const StayResultsContainer = ({data}) => {
    return(
        <div className='MainContainer'>
            <div className='ResultsHeader'>
                <h2>
                    Stays in Finland
                </h2>
                <p>
                    {data.length}+ stays
                </p>
            </div>
            <div className='StayContainer'>
                {data.map((stay) => {
                    return(
                    <StayTile
                        key={Date.now()}
                        imgPath={stay.photo}
                        imgDesc={stay.title}
                        isSuperHost={stay.superHost}
                        rating={stay.rating}
                        stayType={stay.type}
                        stayBds={stay.beds}
                    />
                    )
                })
                }
            </div>
            

        </div>
    )
}