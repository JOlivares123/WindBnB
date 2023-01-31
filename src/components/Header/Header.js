import { Search } from '../Search/Search'
import './Header.css'


export const Header = () => {

    return(
        <div className='TopHeader'>
            <img className="logo" src={require('./../../challenge_assets/logo.png')} alt='windbnb-logo'/>
            <Search />
        </div>

    )
}