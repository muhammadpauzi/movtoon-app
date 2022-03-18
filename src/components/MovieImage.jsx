export default function MovieImage({ src, alt }) {
    return (
        <div className="overflow-hidden rounded shadow-2xl shadow-slate-300">
            <img src={src} alt={alt || ''} className="" />
        </div>
    );
}
