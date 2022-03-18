import Container from '../components/Container';
import Genres from '../components/Genres';
import Heading from '../components/Heading';
import WrapperBody from '../components/WrapperBody';

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
                <Container>
                    <div className="flex items-center justify-between mb-6 flex-col md:flex-row py-5">
                        <div>
                            <Genres genres={genres} />

                            <Heading
                                tag="h2"
                                className="text-3xl font-black text-black mb-5"
                            >
                                Where The Wild Things Are
                            </Heading>
                        </div>
                    </div>
                </Container>
            </WrapperBody>
        </>
    );
}
