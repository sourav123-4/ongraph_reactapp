import React from 'react'
import './Styles/listitem.css'
export default function ListItem(props) {
    return (
        <div className='listitem'>
            <button onClick={() => {
                props.setData(() => {
                    if (!props.data.includes(props.results)) {
                        console.log(props.data)
                        console.log(props.results)
                        return [...props.data, props.results]
                    }
                    return [...props.data]
                })
            }}
            >Add</button>
            <button onClick={() => props.setDetails(props.results)}>Details</button>
        </div>
    )
}