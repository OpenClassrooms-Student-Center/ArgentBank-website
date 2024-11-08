import PropTypes from "prop-types";
import "./Field.css";

const Field = ({ id, labelText, value, onChange, type = "text", disabled }) => {

    return (
        <div>
            <div className="input-wrapper">
                <label htmlFor={id}>{labelText}</label>
                <input
                    type={type}
                    id={id}
                    value={value}
                    onChange={onChange}
                    disabled={disabled} />
            </div>
        </div>
    );
};

export default Field;

Field.propTypes = {
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    disabled: PropTypes.bool,
};