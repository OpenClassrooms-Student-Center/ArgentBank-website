import './Button.css';
import { PropTypes } from 'prop-types';

const Button = ({ buttonText, buttonClass, onClick }) => {
    const handleClick = () => {
        if (typeof onClick === 'function') {
            onClick();
        }
    }
    return (
        <div>
            <button className={buttonClass} onClick={handleClick}>
                {buttonText}
            </button>
        </div>
    );
};

export default Button;

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
    buttonClass: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};