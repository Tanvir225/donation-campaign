import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";

const Home = () => {
  //use ref hook

  const donateData = useLoaderData()
  const [donationData, setDonationData] = useState([])

  useEffect(() => {
    setDonationData(donateData)
  }, [donateData])


  //handle search
  const handleSearch = (searchValue) => {
    const filterData = donateData.filter(data =>data.category.toLowerCase().includes(searchValue.toLocaleLowerCase()))
    console.log(filterData);
    setDonationData(filterData)
  }

  return (
    <div>
      <div>
        <Banner handleSearch={handleSearch}></Banner>
      </div>
      <div className="mt-20 max-w-6xl px-5 mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:p-0">
        {
          donationData?.map(data => <Card key={data.id} data={data}></Card>)
        }
      </div>
    </div>
  );
};

export default Home;