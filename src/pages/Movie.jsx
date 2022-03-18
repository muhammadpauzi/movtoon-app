import Container from '../components/Container';
import Genres from '../components/Genres';
import Heading from '../components/Heading';
import WrapperBody from '../components/WrapperBody';
import MovieImage from '../components/MovieImage';
import movieImage from '../img/1.jpg';
import { HeartIcon, PlayIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import Button from '../components/Button';

const genres = [
    {
        name: 'Advanture',
        href: '/categories/adventure',
        bgColor: 'bg-blue-500',
        bgColorHover: 'bg-blue-600',
        textColor: 'text-white',
    },
    {
        name: 'Action',
        href: '/categories/wild',
        bgColor: 'bg-green-500',
        bgColorHover: 'bg-green-600',
        textColor: 'text-white',
    },
    {
        name: 'Sci-Fi',
        href: '/categories/sci-fi',
        bgColor: 'bg-orange-500',
        bgColorHover: 'bg-orange-600',
        textColor: 'text-black',
    },
];

export default function Movie() {
    return (
        <>
            <WrapperBody>
                <Container maxClassName="max-w-5xl">
                    <div className="flex justify-between mb-6 flex-col md:flex-row py-5">
                        <div className="py-10 px-5">
                            <Genres genres={genres} />

                            <Heading
                                tag="h2"
                                className="text-4xl font-black text-black leading-snug mb-5"
                            >
                                Where The Wild Things Are{' '}
                                <span className="text-gray-700 font-normal">
                                    <br />
                                    (2015)
                                </span>
                            </Heading>

                            <hr className="block w-full border border-gray-100 rounded my-5" />

                            <div className="flex items-center space-x-4 mb-8">
                                <div className="flex items-center space-x-1">
                                    <StarIcon className="w-5 h-5 text-yellow-500" />
                                    <span className="font-bold text-black">
                                        7.6{' '}
                                        <span className="text-gray-500 text-sm font-normal">
                                            /10
                                        </span>
                                    </span>
                                </div>
                                <div>
                                    <p className="text-gray-500">
                                        Release: 1 May 2015
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Button
                                    tag="Link"
                                    to="/"
                                    className="bg-violet-600 text-white py-3 px-4 transition ring-offset-1 focus:ring-violet-600 focus:ring-2 rounded font-medium"
                                >
                                    More Detail
                                </Button>
                                <Button
                                    tag="button"
                                    className="flex items-center text-violet-600 border-1 border-violet-600 bg-violet-100 hover:bg-violet-200 py-3 px-4 transition rounded font-medium focus:ring-2 focus:ring-violet-600 ring-offset-1"
                                >
                                    <HeartIcon className="w-5 h-5 mr-2" />
                                    Add to Favorite
                                </Button>
                                <Button
                                    tag="button"
                                    className="flex items-center text-violet-600 border-1 border-violet-600 bg-violet-100 hover:bg-violet-200 py-3 px-4 transition rounded font-medium focus:ring-2 focus:ring-violet-600 ring-offset-1"
                                >
                                    <PlayIcon className="w-5 h-5 mr-2" />
                                    Watch Trailer
                                </Button>
                            </div>
                        </div>
                        <div>
                            <MovieImage src={movieImage} />
                        </div>
                    </div>
                </Container>
            </WrapperBody>
        </>
    );
}
