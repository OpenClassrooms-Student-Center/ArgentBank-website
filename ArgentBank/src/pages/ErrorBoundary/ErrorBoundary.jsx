import { NavLink } from 'react-router-dom';
import './ErrorBoundary.css'

const ErrorBoundary = () => {

    return (
        <div>
            <main className="main error-box">
                <span className="error404">404</span>
                <NavLink navTo="/" className="return-home">Back to Home</NavLink>
            </main>
        </div>
    );
};

export default ErrorBoundary;