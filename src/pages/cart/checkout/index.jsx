import React, { memo } from 'react'
import FormComponent from '../FormComponent'
import OrderSummary from '../OrderSummary'
import './checkout.scss'

const Checkout = () => {

    return (
        <div className='checkout'>
            <FormComponent />
            <OrderSummary />
        </div>
    )
}

export default memo(Checkout)