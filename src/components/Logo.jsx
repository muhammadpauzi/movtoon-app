import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <Link to="/" className="text-xl font-black text-black block">
            Mov<span className="text-violet-600">Toon</span>
        </Link>
    );
}
