import { classNames } from '../utils';

export default function NavbarNavigation({ navigation, isMobile }) {
    return (
        <div className={classNames(isMobile ? 'space-y-1' : 'space-x-6')}>
            {navigation.map((item, i) => (
                <Link
                    key={i}
                    to={item.href}
                    className={classNames(
                        isMobile ? 'block w-full py-2' : '',
                        'text-sm font-medium text-gray-700 transition hover:text-violet-600'
                    )}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
}
