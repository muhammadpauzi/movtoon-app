import { Popover } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export default function NavbarMenuButton({ srText, icon }) {
    return (
        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-600">
            <span className="sr-only">{srText}</span>
            {icon === 'open' ? (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
                <XIcon className="h-6 w-6" aria-hidden="true" />
            )}
        </Popover.Button>
    );
}
