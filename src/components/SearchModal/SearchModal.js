import { Modal } from "react-bootstrap"
import { FaSearch } from "react-icons/fa"
import { LocationList } from "../LocationList/LocationList"
import './SearchModal.css'
export const SearchModal = ({hideModal, revealModal, show, locations}) => {
    return(
        <Modal animation={false} show={show} onHide={hideModal}>
            <Modal.Body>
                <div className="d-flex col-12 justify-content-center mt-5">
                    <div>
                        <input className="col-4 me-3" type='input'/>
                        <LocationList locations={locations}/>
                    </div>

                    <input className="col-4 me-3" type='input'/>
                    <button type="button" className="btn btn-outline-secondary srch-btn">
                        <FaSearch className='mb-1' color='#ef7b7b'/>
                        <span className="text-black"> Search</span>
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    )
}