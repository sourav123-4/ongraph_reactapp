import React from 'react'
import './Styles/search.css'
export default function Search(props) {
    const [search, setSearch] = React.useState("")
    const [value, setValue] = React.useState("")
    React.useEffect(() => {
        const fetchApi = async () => {
            const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=0QENXP8HOKV0KWV2`
            const res = await fetch(url)
            const resJson = await res.json()
            props.setName(resJson.bestMatches)
        }
        if (search.length >= 3) {
            fetchApi()
        }
    }, [search])
    function handleClick() {
        setSearch(value)
    }
    return (
        <div className='search'>
            <input
                type="search"
                className='search-input'
                name='searchinput'
                value={value}
                onChange={(event) => { setValue(event.target.value) }}
            />
            <button onClick={handleClick} >Search</button>
        </div>
    )
}