import { classNames } from '../utils';

export default function WrapperBody({ children, className, ...props }) {
    return (
        <div
            className={classNames(
                className ? className : '',
                'min-h-screen py-12 pb-20'
            )}
            {...props}
        >
            {children}
        </div>
    );
}
