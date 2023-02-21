import { useState } from "react"

export const GuestCounter = ({adultCnt, setAdultCnt, childCnt, setChildCnt}) => {

    return(
        <div className="pt-4">
            <div>
                <h5>Adults</h5>
                <p className="light pt-0">Ages 13 or above</p>
                <div>
                    <button className="me-2" onClick={()=>setAdultCnt(adultCnt+1)}>+</button>
                    <span className="me-2 bold">{adultCnt}</span>
                    <button onClick={()=>setAdultCnt(adultCnt-1)}>-</button>
                </div>
            </div>

            <div className="pt-5">
                <h5>Children</h5>
                <p className="light pt-0">Ages 2-12</p>
                <div>
                    <button className="me-2" onClick={()=>setChildCnt(childCnt+1)}>
                        +
                    </button>
                    <span className="me-2 bold">{childCnt}</span>
                    <button onClick={()=>setChildCnt(childCnt-1)}>-</button>
                </div>
            </div>
         </div>
    )
}