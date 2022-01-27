import axios from "axios";
import { useCallback, useState } from "react";
import { usePromise } from "./components/UsePromise";
import CardSCSS from "./components/CardSCSS";
import cardStyle from "./components/CardSCSS/index.module.scss";
import CardTailwind from "./components/CardTailwind";
function App() {
  const [value, setValue] = useState("scss");

  const callApi = useCallback(() => {
    return new Promise((resolve, reject) => {
      axios
        .get(process.env.REACT_APP_URL)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }, []);

  const { error, data, loading } = usePromise(callApi);
  const handleChangeStyle = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div
        onChange={handleChangeStyle}
        className="flex justify-center font-bold text-white my-4 items-center"
      >
        <input
          type="radio"
          name="style_type"
          value="scss"
          className="mr-2"
          checked={value === "scss"}
        />
        SCSS
        <input
          type="radio"
          name="style_type"
          value="tailwind"
          className="ml-4 mr-2"
          checked={value === "tailwind"}
        />
        Tailwind
      </div>
      {error && <div>Error...{error}</div>}
      {loading && <div>Loading...</div>}
      {value === "scss" ? (
        <div className="flex flex-wrap">
          {data?.map((movie, index) => {
            return <CardTailwind key={index} movie={movie} />;
          })}
        </div>
      ) : (
        <div className={cardStyle.movies}>
          {data?.map((movie, index) => {
            return <CardSCSS key={index} movie={movie} />;
          })}
        </div>
      )}
    </>
  );
}

export default App;
