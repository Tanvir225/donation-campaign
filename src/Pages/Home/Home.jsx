import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";

const Home = () => {
  const donateData = useLoaderData()
  const [donationData,setDonationData] = useState([])
  useEffect(()=>{
    setDonationData(donateData)
  },[donateData])
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {
           donationData?.map(data => <Card key={data.id} data={data}></Card>)
        }
      </div>
    </div>
  );
};

export default Home;