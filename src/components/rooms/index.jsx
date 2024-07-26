import React, { memo } from 'react'
import { GrFormNextLink } from 'react-icons/gr'
import './rooms.scss'

const Rooms = () => {

    return (
        <div className='rooms'>
            <div className="rooms__1">
                <div className="rooms1-title">
                    <h5 className='rooms1__h5'>Living Room</h5>
                    <button className='rooms1__btn'>Shop Now <GrFormNextLink fontSize={20} color='#0009' /> </button>
                </div>
            </div>
            <div className="room__2">
                <div className="rooms2">
                    <div className="rooms2-title">
                        <h5 className='rooms2__h5'>Bedroom</h5>
                        <button className='rooms1__btn'>Shop Now <GrFormNextLink fontSize={20} color='#0009' /> </button>
                    </div>
                </div>
                <div className="rooms3">
                    <div className="rooms2-title">
                        <h5 className='rooms2__h5'>Kitchen</h5>
                        <button className='rooms1__btn'>Shop Now <GrFormNextLink fontSize={20} color='#0009' /> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Rooms)