import Container from '../components/Container';
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
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-black text-black">
                            Spotlight This Month
                        </h2>

                        <Tabs tabs={tabs} />
                    </div>
                </Container>
            </div>
        </>
    );
}
