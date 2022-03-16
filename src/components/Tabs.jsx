import { classNames } from '../utils';

export default function Tabs({ tabs }) {
    return (
        <div className="flex items-center space-x-4 text-xs sm:text-sm">
            {tabs.map((tab, i) => {
                return (
                    <a
                        key={i}
                        href={tab.href}
                        className={classNames(
                            tab.active
                                ? 'text-violet-600 border border-gray-200 bg-gray-100 p-2 px-3 rounded-md'
                                : 'text-gray-700 transition hover:text-violet-600',
                            'font-medium'
                        )}
                    >
                        {tab.name}
                    </a>
                );
            })}
        </div>
    );
}
