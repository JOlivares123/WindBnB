import {ImLocation} from 'react-icons/im'

export const LocationList = ({locations}) => {
    return(
        <ul>
            {locations.map((loc) => {
                return(
                <div key={loc}> 
                    <ImLocation />
                    <span>{loc}</span>
                </div>)
            })}
        </ul>
    )
}