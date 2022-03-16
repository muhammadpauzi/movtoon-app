import { classNames } from '../utils';

export default function Container({ className, children, ...props }) {
    return (
        <div
            className={classNames(
                className || '',
                'max-w-7xl mx-auto px-4 sm:px-6'
            )}
            {...props}
        >
            {children}
        </div>
    );
}
