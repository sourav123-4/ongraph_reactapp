import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Search from './Search'
import SearchResults from './SearchResults'
import StockDetails from './StockDetails'
import './Styles/app.css'
export default function App(props) {
  const [name, setName] = React.useState("")
  return (
    <div className='appbody'>

      <div className='links'>
        <Link to="/"><button className='btn'>Home</button></Link>
        <Link to="/mystocks"><button className='btn'>MyStocks</button></Link>
      </div>
      <Outlet />
      <Search setName={setName} />
      {!name ? "" :
        <SearchResults
          name={name}
          setData={props.setData}
          setDetails={props.setDetails}
          data={props.data}
          details={props.details}
        />}
      {props.details == "" ? "" :
        <StockDetails
          details={props.details}
          setShare={props.setShare}
        />}
    </div>
  )
}