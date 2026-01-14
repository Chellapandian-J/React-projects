export default function Maincomponent(props) {
  return (
    <main className="maincomponent">

      <article className="container">
        <img src={props.img} alt={props.place} />

        <div>
          <header className="location">
            <span>{props.location}</span>
            <a href={props.googlemaps} target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </header>

          <h1 className="place">{props.place}</h1>
          <p className="date">{props.date}</p>
          <p>
            {props.paragraph}
          </p>
        </div>
      </article>
    </main>
  );
}
