import {ImLocation} from 'react-icons/im'

export const LocationList = ({locations, setSelectedLoc}) => {
    return(
        <ul className='pt-4'>
            {locations.map((loc) => {
                return(
                <div onClick={()=>setSelectedLoc(`${loc}`)} key={loc}> 
                    <ImLocation />
                    <span>{loc}</span>
                </div>)
            })}
        </ul>
    )
}