import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

const Details = () => {
  //useparams hook get id
  const { id } = useParams();
  //load data by useLoader Hook
  const data = useLoaderData();

  //state for donate data
  const [donateData, setDonateData] = useState([]);
  useEffect(() => {
    setDonateData(data);
  }, [data]);

  //find a donate data details
  const findDetails = donateData.find((data) => data.id === id);

  //navigate
  const navigate = useNavigate();

  //donate button function
  const handleDonate = () => {
    const getDonate = JSON.parse(localStorage.getItem("donate") || "[]");

    if (!getDonate) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Good! Your have donated successfully!", {
            icon: "success",
          });
          navigate(-1);
          localStorage.setItem("donate", JSON.stringify(findDetails));
        }
      });
    } else {
      const filterDonate = getDonate.find((data) => data.id === id);
      if (!filterDonate) {
        getDonate.push(findDetails);
        swal({
          title: "Are you sure?",
          text: "Once Donated, you will not be able to recover this donation fund!",
          icon: "success",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            swal("Good! Your have donated successfully!", {
              icon: "success",
            });
            navigate(-1);
            localStorage.setItem("donate", JSON.stringify(getDonate));
          }
        });
      } else {
        swal("OPPS!", "You have alredy donated", "error");
        navigate(-1);
      }
    }
  };

  return (
    <div>
      {findDetails && (
        <div className="mx-auto mt-10 px-5 max-w-6xl space-y-10 lg:p-0">
          <div className="relative h-[40vh] lg:h-[70vh]">
            <img
              src={findDetails && findDetails.picture}
              alt={`${findDetails && findDetails.title} image`}
              className="w-full h-[40vh] object-cover rounded-lg lg:h-full"
            />
            <figcaption className="absolute w-full px-4 bg-black bg-opacity-60 text-lg rounded-lg  bottom-0 py-5">
              <button
                onClick={handleDonate}
                className="btn px-5 py-1 text-white"
                style={{
                  backgroundColor:
                    findDetails && findDetails.title_category_text_color,
                }}
              >
                Donate {findDetails && findDetails.price}
              </button>
            </figcaption>
          </div>
          <div className="space-y-5">
            <h2 className="text-2xl font-bold">
              {findDetails && findDetails.title}
            </h2>
            <p className="font-semibold text-gray-500">
              {findDetails && findDetails.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
