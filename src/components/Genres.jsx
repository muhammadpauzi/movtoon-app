import { Link } from 'react-router-dom';
import { classNames } from '../utils';

export default function Genres({ genres }) {
    return (
        <div className="flex items-center space-x-1 text-xs sm:text-sm mb-3">
            {genres.map((genre, i) => {
                return (
                    <Link
                        key={i}
                        to={genre.href}
                        className={classNames(
                            `${genre.bgColor} ${genre.textColor} transition hover:${genre.bgColorHover} font-bold p-2 rounded-md uppercase text-xs`
                        )}
                    >
                        {genre.name}
                    </Link>
                );
            })}
        </div>
    );
}
