import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

ChartJS.register(Tooltip, ArcElement, Legend);

const Statistics = () => {
  const donateData = useLoaderData();
  const getData = JSON.parse(localStorage.getItem('donate') || "[]");
  const data = {
    datasets: [
      {
        data: [getData.length, donateData.length -  getData.length]

      },
    ],
    labels: ["Your Donations", "Total Donation"],
  };
  return (
    <div>
      <Helmet>
        <title>Campaign | Statistics</title>
      </Helmet>

      <div className="w-[300px] mt-10  mx-auto h-[52vh]">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default Statistics;
