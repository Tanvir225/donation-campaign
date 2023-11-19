import { useEffect, useState } from "react";
import Donate from "../../Components/Donate/Donate";


const Donation = () => {
    //get LS data
    const getDonate = JSON.parse(localStorage.getItem('donate') || "[]")

    //manage a state for LS data
    const [donate,setDonate] = useState([])
    useEffect(()=>{
        setDonate(getDonate)
    },[])
    return (
        <div className="max-w-6xl mx-auto mt-16 px-5 grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 lg:p-0">
            {
                donate.map(data=> <Donate key={data.id} donate={data}></Donate>)
            }
        </div>
    );
};

export default Donation;