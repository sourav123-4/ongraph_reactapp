import React from 'react'
import MyStocksItem from '../MyStockItems'
import Wallet from '../Wallet'
import '../Styles/mystocks.css'
export default function MyStocks(props) {
    const [price, setPrice] = React.useState()
    const [shareName, setShareName] = React.useState([])
    const [money, setMoney] = React.useState(10000)
    function handleClick() {
        let arr = [...props.data]
        let index = arr.indexOf(shareName)
        arr.splice(index, 1)
        props.setData(arr)
    }

    return (
        <div className='mystocks'>
            <h1><u>MY STOCKS</u></h1>
            {props.data.map((item) => {
                return (
                    <h2><button onClick={() => setShareName(item)}>{item}</button>
                        <span></span>
                        <button onClick={handleClick}>Remove</button><span></span>
                    </h2>
                )
            })}
            < MyStocksItem
                setQuantity={props.setQuantity}
                setPrice={setPrice}
                quantity={props.quantity}
                price={price}
                details={props.details}
                share={props.share}
                setMoney={setMoney}
                money={money}
                shareName={shareName}
            />
            <Wallet
                price={price}
                quantity={props.quantity}
                money={money}
            />
        </div>
    )
}