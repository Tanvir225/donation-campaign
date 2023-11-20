import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { useLoaderData } from "react-router-dom";

ChartJS.register(Tooltip, ArcElement, Legend);

const Statistics = () => {
  const donateData = useLoaderData();
  const getData = JSON.parse(localStorage.getItem('donate') || "[]");
  const data = {
    datasets: [
      {
        data: [getData.length,donateData.length]
           
      },
    ],
    labels: ["Your Donations", "Total Donation"],
  };
  return (
    <div className="w-[300px] mt-10  mx-auto h-[52vh]">
      <Pie data={data} />
    </div>
  );
};

export default Statistics;
