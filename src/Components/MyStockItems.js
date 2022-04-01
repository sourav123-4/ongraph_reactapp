import React from 'react'
import './Styles/mystocksitem.css'
export default function MyStocksItem(props) {
    function buyshares() {
        props.setMoney(prev => prev - parseInt(props.quantity) * props.price)
    }
    React.useEffect(() => {
        const fetchApi2 = async () => {
            const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${props.shareName}&apikey=0QENXP8HOKV0KWV2`
            const res = await fetch(url)
            const resjson1 = await res.json()
            props.setPrice(resjson1['Global Quote']['05. price'])
        }
        fetchApi2()
    }, [props.shareName])
    return (
        <div className='mystocksitem'>
            <h3>price: {props.price}</h3>
            <input
                type='text'
                name='quantity'
                placeholder='quantity'
                onChange={(event) => props.setQuantity(event.target.value)}
            />
            {(props.price * props.quantity < props.money) ? <button onClick={buyshares}>Buy</button> : ""}
        </div>
    )
}