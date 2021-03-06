import Container from '../components/Container';
import Heading from '../components/Heading';
import MovieCard from '../components/MovieCard';
import Tabs from '../components/Tabs';
import WrapperBody from '../components/WrapperBody';

const tabs = [
    { name: 'Latest', href: '/latest', active: true },
    { name: 'Coming Soon', href: '/coming-soon' },
    { name: 'Top Rated', href: '/top-rated' },
    { name: 'Recently Released', href: '/recently-released' },
];

export default function Home() {
    return (
        <>
            <WrapperBody>
                <Container>
                    <div className="flex items-center justify-between mb-6 flex-col md:flex-row">
                        <Heading tag="h2" className="text-xl font-black text-black mb-5">Spotlight This Month</Heading>

                        <Tabs tabs={tabs} />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                    </div>
                </Container>
            </WrapperBody>
        </>
    );
}
