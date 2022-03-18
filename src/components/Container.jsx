import { classNames } from '../utils';

export default function Container({
    className,
    maxClassName,
    children,
    ...props
}) {
    return (
        <div
            className={classNames(
                className || '',
                maxClassName || 'max-w-7xl',
                'mx-auto px-4 sm:px-6'
            )}
            {...props}
        >
            {children}
        </div>
    );
}
