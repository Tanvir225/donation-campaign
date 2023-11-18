import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';

const Details = () => {
    //useparams hook get id
    const { id } = useParams()

    //load data by useLoader Hook
    const data = useLoaderData()

    //state for donate data
    const [donateData, setDonateData] = useState([])
    useEffect(() => {
        setDonateData(data)
    }, [data])

    //find a donate data details
    const findDetails = donateData.find(data => data.id === id)

    //donate button function
    const handleDonate = (id)=>{
        const getDonate = JSON.parse(localStorage.getItem('donate') || [])
        console.log(getDonate);
        if (!getDonate) {
            swal("Good job!", "You clicked the button!", "success");
            localStorage.setItem('donate',JSON.stringify(findDetails))
           
        }
        else{
            const filterDonate = getDonate.filter(data => data.id === id)
            console.log(filterDonate);
            if (!filterDonate) {
                getDonate.push(findDetails)
                localStorage.setItem('donate',JSON.stringify(getDonate))
            }else{
                swal("Awws!", "You have already donated", "warning");
            }
        }
    }
    return (
        <div>
            {
                findDetails && (
                    <div className="mx-auto mt-10 max-w-5xl space-y-10">
                        <div className="relative w-full h-[60vh] object-cover">
                            <img src={findDetails && findDetails.picture} alt={`${findDetails && findDetails.title} image`} className=" w-full h-full" />
                            <figcaption className="absolute w-full px-4 bg-black opacity-50 text-lg  bottom-0 py-5">
                                <button onClick={()=>handleDonate(id)} className="btn px-5 py-1 text-white" style={{ backgroundColor: findDetails && findDetails.category_bg }}>Donate {findDetails && findDetails.price}</button>
                            </figcaption>
                        </div>
                        <div className="space-y-5" >
                            <h2 className="text-2xl font-bold">{findDetails && findDetails.title}</h2>
                            <p className="font-semibold text-gray-500">{findDetails && findDetails.description}</p>
                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default Details;