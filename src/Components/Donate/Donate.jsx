import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const Donate = ({ donate }) => {
  const {
    id,
    picture,
    title,
    category_bg,
    category,
    card_bg,
    title_category_text_color,
    price,
  } = donate || {};
  return (
    <div
      className="card card-side bg-base-100 shadow-xl "
      style={{
        backgroundColor: donate && card_bg,
        color: donate && title_category_text_color,
      }}
    >
      <figure>
        <img src={picture} alt={`${title} image`} className="w-full h-full" />
      </figure>
      <div className="card-body">
        <p
          className="w-[80px] text-center rounded-lg py-2 "
          style={{ backgroundColor: donate && category_bg }}
        >
          {category}
        </p>
        <h2 className="font-bold w-full">{title}</h2>
        <div className="card-actions ">
          <NavLink
            to={`/details/${id}`}
            className="w-[120px] btn text-center"
            style={{
              backgroundColor: donate && category_bg,
              color: donate && title_category_text_color,
            }}
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

Donate.propTypes = {
  donate: PropTypes.object.isRequired,
};

export default Donate;
