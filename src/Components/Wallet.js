import React from 'react'
import './Styles/wallet.css'
export default function Wallet(props) {
    return (
        <div className='wallet'>
            <h1>Wallet : $<span>{props.money}</span></h1>
        </div>
    )
}