import { Link } from 'react-router-dom';

function ErrorPage(props) {
    return (
        <div>
            Hello you landed in wrong url
            <Link to="/:">Go Back</Link>
        </div>
    );
}

export default ErrorPage;