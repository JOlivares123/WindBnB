import { useState } from 'react'
import { ExtractLocations } from '../../helpers/ExtractLocations';
import { Search } from '../Search/Search'
import { SearchModal } from '../SearchModal/SearchModal';
import './Header.css'


export const Header = ({data}) => {
    const [modal, setModal] = useState(false);

    const hideModal = () => {
        setModal(false)
    }

    const revealModal = () => {
        setModal(true)
    }

    var locations = ExtractLocations(data)

    return(
        <>
        {modal && (
            <SearchModal 
                hideModal={hideModal}
                revealModal={revealModal}
                show={modal}
                locations={locations}
            />
        )}
        <div className='TopHeader'>
            <img className="logo" src={require('./../../challenge_assets/logo.png')} alt='windbnb-logo'/>
            <Search revealModal={revealModal}/>
        </div>
        </>
    )
}