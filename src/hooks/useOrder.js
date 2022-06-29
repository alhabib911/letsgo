import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useOrder = () => {
    const { id } = useParams()
    const [order, setOrder] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/cars/${id}`)
        .then(res => res.json())
        .then (data=>setOrder(data))
    },[])
    return [order, setOrder];
};

export default useOrder;