export default function MenuItem({
    name='default',
    descript,
    precio 
}) {
    return (
        <article className="producto">
            <h3>{name}</h3>
            <p>{descript}</p>
            <p>{precio}</p>
        </article>
    );
}