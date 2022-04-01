import React from 'react'
import './Styles/stockdetails.css'
export default function StockDetails(props) {
    const [symbol, setSymbol] = React.useState("")
    const [assetType, setAssetType] = React.useState("")
    const [name, setName] = React.useState("")
    const [description, setDescription] = React.useState("")
    React.useEffect(() => {
        const fetchApi1 = async () => {
            const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${props.details}&apikey=0QENXP8HOKV0KWV2`
            const res = await fetch(url)
            const resjson1 = await res.json()
            console.log(resjson1)
            setSymbol(resjson1.Symbol)
            setName(resjson1.Name)
            setAssetType(resjson1.AssetType)
            setDescription(resjson1.Description)
        }
        fetchApi1()
    }, [props.details])
    return (
        <div className='stock-details'>
            <p><span>Symbol : </span> {symbol}</p>
            <p><span>AssetType : </span> {assetType}</p>
            <p><span>Name : </span> {name}</p>
            <p><span>Description : </span> {description}</p>
        </div>
    )
}