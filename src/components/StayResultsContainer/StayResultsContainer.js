import React from 'react'

import { StayTile } from '../StayTile/StayTile'
import './StayResultsContainer.css'

export const StayResultsContainer = ({data}) => {
    return(
        <div className='MainContainer'>
            <div>
                <h2>

                </h2>
                <p>

                </p>
            </div>
            <div className='StayContainer'>
                {data.map((stay) => {
                    return(
                    <StayTile
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