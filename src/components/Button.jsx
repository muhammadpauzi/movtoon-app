import { Link } from 'react-router-dom';

export default function Button({ tag = 'button', children, ...props }) {
    const Element = `${tag}`;
    if (Element.toLowerCase() === 'link')
        return <Link {...props}>{children}</Link>;
    return <Element {...props}>{children}</Element>;
}
