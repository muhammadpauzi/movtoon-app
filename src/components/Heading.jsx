import { classNames } from '../utils';

export default function Heading({ tag, children, ...props }) {
    const Element = `${tag}`;

    return <Element {...props}>{children}</Element>;
}
