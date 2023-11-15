import PropTypes from "prop-types";

const Feature = ({ icon,title, description }) => (
    <div className="feature-item">
        <img src={icon} alt={icon} className="feature-icon"/>
        <h3 className="feature-item-title">{title}</h3>
        <p>{description}</p>
    </div>
  );

Feature.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Feature;
