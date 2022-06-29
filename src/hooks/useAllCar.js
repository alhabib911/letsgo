import { useEffect, useState } from 'react';

const useAllCar = () => {
    const [allcar, setAllCar] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/addcar')
        .then(res => res.json())
        .then (data=>setAllCar(data))
    },[])
    return [allcar, setAllCar];
};

export default useAllCar;
