import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { BiDonateBlood } from "react-icons/bi";
const Card = ({ data }) => {
  //check data Donate or not
  const getDonate = JSON.parse(localStorage.getItem("donate") || "[]");

  //destructure object
  const {
    id,
    category,
    title,
    picture,
    category_bg,
    title_category_text_color,
    card_bg,
  } = data || {};
  // find donate or not
  const findDonate = getDonate.find((data) => data.id === id);
  console.log(findDonate);

  //usenavigate
  const navigate = useNavigate();

  //onClick function
  const handleDetails = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div
      className=" card card-compact bg-base-100 shadow-xl"
      style={{
        backgroundColor: card_bg && card_bg,
        color: data && title_category_text_color,
      }}
      onClick={() => handleDetails(id)}
    >
      <figure>
        <img src={picture} alt={`${title} image`} className="w-full h-full" />
      </figure>
      <div className="card-body rounded-lg ">
        <div className="flex justify-between items-center">
          <h2
            className="w-[80px] text-center rounded-lg py-1"
            style={{ backgroundColor: data && category_bg }}
          >
            {category}
          </h2>
          {findDonate && <BiDonateBlood className="text-xl"></BiDonateBlood>}
        </div>
        <p className="font-bold text-lg">{title}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Card;
