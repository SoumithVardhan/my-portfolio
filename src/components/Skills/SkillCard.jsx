import "./Skills.css";
import PropTypes from "prop-types";


const SkillCard = ({ item }) => {
  return (
    <div className="skill-item">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-title">
        <p>{item.name}</p>
        <span>{item.type}</span>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
    item: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
};

export default SkillCard;