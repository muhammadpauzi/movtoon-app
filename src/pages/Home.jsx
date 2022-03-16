import Container from '../components/Container';
import MovieCard from '../components/MovieCard';
import Tabs from '../components/Tabs';

const tabs = [
    { name: 'Latest', href: '/latest', active: true },
    { name: 'Coming Soon', href: '/coming-soon' },
    { name: 'Top Rated', href: '/top-rated' },
    { name: 'Recently Released', href: '/recently-released' },
];

export default function Home() {
    return (
        <>
            <div className="py-12">
                <Container>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-black text-black">
                            Spotlight This Month
                        </h2>

                        <Tabs tabs={tabs} />
                    </div>

                    <div className="grid grid-cols-5 gap-4 gap-y-6">
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                    </div>
                </Container>
            </div>
        </>
    );
}
