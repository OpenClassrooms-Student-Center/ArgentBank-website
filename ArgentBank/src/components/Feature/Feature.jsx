import PropTypes from "prop-types";
import "./Feature.css";

const Feature = ({ featureIcon, featureIconAlt, featureTitle, featureDetail }) => {

    return (
        <div className="feature-item">
            <img src={featureIcon} alt={featureIconAlt} className="feature-icon" />
            <h3 className="feature-item-title">{featureTitle}</h3>
            <p>{featureDetail}</p>
        </div>
    );
};

export default Feature;

Feature.propTypes = {
    featureIcon: PropTypes.string.isRequired,
    featureIconAlt: PropTypes.string.isRequired,
    featureTitle: PropTypes.string.isRequired,
    featureDetail: PropTypes.string.isRequired,
};