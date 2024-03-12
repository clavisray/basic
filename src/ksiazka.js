export const Ksiazka = (props) => {
    const { img, tytul, autor, id, number } = props;
 //   console.log(props)
    return (
    <article className='ksiazka'>
        <span className="number">{`# ${number + 1}`}</span>
        <img src={img} alt={tytul} />
        <h2>{tytul}</h2>
        <h4>{autor}</h4> 
    </article>
    );
};