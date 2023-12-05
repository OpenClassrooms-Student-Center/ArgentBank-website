import PropTypes  from "prop-types";
import styles from './style/feature.module.css';

function Feature({children, title, content}){
    return(
            <div className={styles.featureItem}>
                {children}
                <h3 className={styles.featureItemTitle}>{title}</h3>
                <p>
                    {content}
                </p>
            </div>
    )
}

Feature.propsTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default Feature;