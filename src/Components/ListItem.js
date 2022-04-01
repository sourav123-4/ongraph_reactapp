import React from 'react'
import './Styles/listitem.css'
export default function ListItem(props) {
    return (
        <div className='listitem'>
            <button onClick={() => {
                props.setData(() => {
                    return [...props.data, props.results]
                })
            }}
            >Add</button>
            <button onClick={() => props.setDetails(props.results)}>Details</button>
        </div>
    )
}