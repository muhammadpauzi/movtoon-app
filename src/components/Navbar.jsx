import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Logo from './Logo';
import NavbarNavigation from './NavbarNavigation';
import NavbarMenuButton from './NavbarMenuButton';
import Container from './Container';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Movies', href: '/' },
    { name: 'About', href: '/' },
];

export default function Navbar() {
    return (
        <Popover className="relative bg-white z-50 border-b-2 border-gray-100">
            <Container>
                <div className="flex justify-between items-center py-6">
                    <div className="flex justify-between items-center md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Logo />
                        </div>
                        <div className="hidden md:block text-right"></div>
                    </div>
                    <div className="flex items-center gap-x-4 place-self-end">
                        <div className="hidden md:block">
                            <NavbarNavigation navigation={navigation} />
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <NavbarMenuButton srText="Open menu" icon="open" />
                        </div>
                    </div>
                </div>
            </Container>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between mb-5">
                                <Logo />
                                <div className="-mr-2">
                                    <NavbarMenuButton
                                        srText="Close menu"
                                        icon="close"
                                    />
                                </div>
                            </div>
                            <div className="block md:hidden space-y-2">
                                <NavbarNavigation
                                    navigation={navigation}
                                    isMobile={true}
                                />
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}
