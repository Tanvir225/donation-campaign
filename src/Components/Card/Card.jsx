import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const Card = ({data}) => {
    const {id,category,title,picture,category_bg,title_category_text_color,card_bg} = data || {}

    //usenavigate
    const navigate = useNavigate()

    //onClick function
    const handleDetails =(id)=>{
        navigate(`/details/${id}`)
    }
    return (
        <div className=" card card-compact bg-base-100 shadow-xl" onClick={()=>handleDetails(id)}>
            <figure><img src={picture} alt={`${title} image`} /></figure>
            <div className="card-body rounded-lg " style={{backgroundColor: card_bg && card_bg}}>
                <h2 className='w-[80px] text-center rounded-lg py-1' style={{color: title_category_text_color && title_category_text_color, backgroundColor: category_bg && category_bg}}>{category}</h2>
                <p className='font-bold text-lg' style={{color: title_category_text_color && title_category_text_color}}>{title}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    data:PropTypes.object.isRequired,
}
export default Card;