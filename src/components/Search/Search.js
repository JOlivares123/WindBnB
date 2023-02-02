import {FaSearch} from 'react-icons/fa'

import './Search.css'

export const Search = ({revealModal}) => {

    return(
        <div className="btn-group shadow" role='group' onClick={()=>revealModal()}>
            <button type='button' className="btn reg-btn btn-outline-secondary">
                <span className='text-black'>Location</span>
            </button>
            <button type='button' className="btn reg-btn btn-outline-secondary">
                <span className='light'>Add Guests</span>
            </button>
            <button type="button" className="btn btn-outline-secondary srch-btn">
                <FaSearch className='mb-1' color='#ef7b7b'/>
            </button>
        </div>
    )
}