import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GetData() {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('https://658aa7e7ba789a96223780e2.mockapi.io/practic')
            setData(response.data)
        }
        getData()
    },[])
    return (
        <>
        {data && data.map((item, index) => (
            <div key={index}>
                <p>{item.name}</p>
                <p>{item.surname}</p>
                <span>{item.email}</span>
            </div>
        ))}
        </>
    )
}

export default GetData
