import { classNames } from '../utils';

export default function NavbarNavigation({ navigation, isMobile }) {
    return (
        <div className={classNames(isMobile ? 'space-y-1' : 'space-x-6')}>
            {navigation.map((item, i) => (
                <a
                    key={i}
                    href={item.href}
                    className={classNames(
                        isMobile ? 'block w-full py-2' : '',
                        'text-sm font-bold uppercase text-gray-700 transition hover:text-violet-600'
                    )}
                >
                    {item.name}
                </a>
            ))}
        </div>
    );
}
