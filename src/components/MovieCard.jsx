import movieImage from '../img/1.jpg';

export default function MovieCard() {
    return (
        <a
            to="/movies/where-the-wild-things-are"
            className="group border-b border-gray-100"
        >
            <div className="overflow-hidden shadow-lg shadow-slate-200">
                <img src={movieImage} alt="" className="rounded w-full block" />
            </div>

            <div className="p-2 py-3">
                <h2 className="text-xs sm:text-base text-gray-800 font-black mb-2 transition group-hover:text-violet-600">
                    Where The Wild Things Are
                </h2>
            </div>
        </a>
    );
}
