import React from 'react'
import ListItem from './ListItem'
import './Styles/searchresults.css'
export default function SearchResults(props) {
    const [results, setResults] = React.useState()
    return (
        <div className='search-results'>
            {props.name.map(item =>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <button
                                    key={item['1. symbol']}
                                    onClick={() => setResults(item['1. symbol'])}
                                >{item['1. symbol']}
                                </button>

                            </th>
                        </tr>
                    </tbody>
                </table>)}
            {!results ? "" :
                <ListItem
                    results={results}
                    setData={props.setData}
                    setDetails={props.setDetails}
                    data={props.data}
                    details={props.details} />}
        </div>
    )
}