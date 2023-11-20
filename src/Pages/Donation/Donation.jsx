import { useEffect, useState } from "react";
import Donate from "../../Components/Donate/Donate";

const Donation = () => {
  //get LS data
  const getDonate = JSON.parse(localStorage.getItem("donate") || "[]");

  //manage a state for LS data
  const [donate, setDonate] = useState([]);
  useEffect(() => {
    setDonate(getDonate);
  }, []);

  //handle show all and show less
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-3xl text-center mt-10 mb-2 font-bold">Your Total Donation {donate?.reduce((preValue, currentValue) => parseFloat(preValue) + parseFloat(currentValue.price), 0)} $ </h2>
      <hr className="w-1/2 mx-auto " />
      <div className="max-w-6xl mx-auto mt-16 px-5 grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 lg:p-0">
        {

          isShow
            ? donate.map((data) => <Donate key={data.id} donate={data}></Donate>)
            : donate
              .slice(0, 4)
              ?.map((data) => <Donate key={data.id} donate={data}></Donate>)}
      </div>

      <div
        className="mt-10 text-center"
        style={{ display: donate.length < 4 ? "none" : "block" }}
      >
        <button className="btn px-10 btn-primary" onClick={handleShow}>
          {isShow ? "Show less" : "Show all"}
        </button>
      </div>
    </div>
  );
};

export default Donation;
