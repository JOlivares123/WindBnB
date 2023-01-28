import {BsFillStarFill} from 'react-icons/bs'

import './StayDescription.css'

export const StayDescription = ({isSuperHost, rating, stayType, stayBds, title}) => {
    const determineDescription = () => {
        if(stayType === 'Entire house' || stayType === 'Private room'){
            return stayType
        }
        else{
            return `${stayType} ${stayBds !== null ? `. ${stayBds} beds` : ''}`
        }
    }

    return(
    <div className='col-12 mb-3'>
        <div className='DescripRow mt-2'>
            {isSuperHost && (
                <span className='badge rounded-pill text-danger border border-danger'>SUPER HOST</span>
            )}
            <span className='light'>{determineDescription()}</span>
            <span>
                <BsFillStarFill size={20} className='pb-1' color='#ef7b7b'/>
               {rating}
            </span>
        </div>
        <p className='bold'> {title}</p>
        
    </div>)
}