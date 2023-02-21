import { useState } from "react"
import { Modal } from "react-bootstrap"
import { FaSearch } from "react-icons/fa"
import { GuestCounter } from "../GuestCounter/GuestCounter"
import { LocationList } from "../LocationList/LocationList"
import './SearchModal.css'
export const SearchModal = ({hideModal, revealModal, show, locations}) => {
    const [selectedLoc, setSelectedLoc] = useState('');
    
    const [adultCnt, setAdultCnt] = useState(0);
    const [childCnt, setChildCnt] = useState(0);

    const [selectedInput, setSelectedInput] = useState(null);

    return(
        <Modal animation={false} show={show} onHide={hideModal}>
            <Modal.Body>
                <div className="d-flex col-12 justify-content-center mt-5">
                    <div className="col-4 me-3" onClick={() => setSelectedInput('loc')}>
                        <input
                            className="col-12 modal-comp-height" 
                            type='input' 
                            value={selectedLoc} 
                            placeholder={'Add Location'}
                        />
                        {selectedInput === 'loc' && (
                            <LocationList setSelectedLoc={setSelectedLoc} locations={locations}/>
                        )}
                    </div>

                    <div className="col-4 me-3" onClick={() => setSelectedInput('guests')} >
                        <input
                            placeholder="Add guests"
                            value={`${adultCnt + childCnt} guests`}
                            className="col-12 modal-comp-height" 
                            type='input'
                        />
                        {selectedInput === 'guests' && (
                            <GuestCounter 
                                adultCnt={adultCnt}
                                setAdultCnt={setAdultCnt}
                                childCnt={childCnt}
                                setChildCnt={setChildCnt}
                            />
                        )}
                    </div>

                    <button 
                        type="button" 
                        className="btn btn-outline-secondary srch-btn modal-comp-height"
                    >
                        <FaSearch className='mb-1' color='#ef7b7b'/>
                        <span className="text-black"> Search</span>
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    )
}