const CardTailwind = (props) => {
  return (
    <div className="grow flex-col mb-12 p-1">
      <div className="relative inline-block w-52">
        <img
          src={`https://image.tmdb.org/t/p/w200${props.movie.poster_path}`}
          alt="poster"
          className="w-full border-none "
        />
        <div className="mask">{props.movie.original_title}</div>
      </div>
    </div>
  );
};
export default CardTailwind;
