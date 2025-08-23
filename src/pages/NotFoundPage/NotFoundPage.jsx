import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    
    return (
        <>
            <Link to="/">Go back</Link>
            <h1>404</h1>
            <p>Page not found!</p>
        </>
    );
}