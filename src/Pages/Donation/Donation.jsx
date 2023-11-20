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
