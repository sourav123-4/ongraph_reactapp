import React from 'react'
import { Route, Routes, Outlet, Link } from 'react-router-dom'
import MyStocks from './Components/Routes/MyStocks'
import App from './Components/App'
import Error from './Components/Error'
import './Components/Styles/home.css'
export default function Home() {
    const [details, setDetails] = React.useState([])
    const [data, setData] = React.useState([])
    const [quantity, setQuantity] = React.useState()
    const [share, setShare] = React.useState([])
    return (
        <div>
            <Routes>
                <Route path="/" element={<App
                    details={details}
                    setDetails={setDetails}
                    data={data}
                    setData={setData}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    share={share}
                    setShare={setShare}
                />}>
                    <Route path="mystocks" element={<MyStocks
                        data={data}
                        setData={setData}
                        setQuantity={setQuantity}
                        quantity={quantity}
                        details={details}
                        share={share}
                    />}
                    />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
            <Outlet />
        </div>

    )
}