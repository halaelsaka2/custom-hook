import cardStyle from "./index.module.scss";

const CardSCSS = (props) => {
  const { movie } = props;
  return (
    <div className={cardStyle.movie_card}>
      <div className={cardStyle.movie_card__image_wrapper}>
        <img
          className={cardStyle.movie_card__image_wrapper__image_wrapper_img}
          alt="poster"
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        />
        <div className={cardStyle.movie_card__image_wrapper__mask_data}>
          {movie.original_title}
        </div>
      </div>
    </div>
  );
};
export default CardSCSS;
