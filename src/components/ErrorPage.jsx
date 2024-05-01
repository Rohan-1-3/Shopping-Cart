import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div className='error'>
            Error 404. This site doesn{"'"}t provide the link. {window.location.href} <br/>
            <Link to="/:"> Go Back</Link>
        </div>
    );
}

export default ErrorPage;