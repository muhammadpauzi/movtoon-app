import movieImage from '../img/1.jpg';
import { BookmarkIcon } from '@heroicons/react/outline';

export default function MovieCard() {
    return (
        <a href="" className="group border-b border-gray-100">
            <div className="overflow-hidden shadow-lg shadow-slate-200 mb-2">
                <img src={movieImage} alt="" className="rounded" />
            </div>

            <div className="p-2">
                <h2 className="text-base text-gray-800 font-black mb-2 transition group-hover:text-violet-600">
                    Where The Wild Things Are
                </h2>
            </div>
        </a>
    );
}
