import { useState } from "react";
import "./styles/urlbox_styles.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { ResultPage } from "./ResultPage";
import { Loader } from "./Utils/Loader";

export function UrlBox() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [isLoading,setIsLoading] = useState(false);
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (err) {
      return false;
    }
  };
  const submitUrl = async (e) => {
    e.preventDefault();
    if (isValidUrl) {
      setIsLoading(true);
      await axios
        .get("/search", { url: url })
        .then((res) => {
          console.log("Response:",res.data);
          setResult(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          alert(err.message);
          setIsLoading(false);
        });
    }
  };
  return (
    <>
    <div className="container">
      <div className="text-center">
        <h1 className="text-warning">SEO-AUDIT</h1>
      </div>
      <div className="p-4">
        <form onSubmit={submitUrl}>
          <div className="text-center">
            <input
              type="text"
              className="form-control"
              id="url-box"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter the URL"
              required
            />
          </div>
          <div className="text-center mt-4">
            <button
              type="submit"
              className="btn btn-warning"
              id="search-button"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
    { isLoading === true ? <Loader url={url} /> : result ? <ResultPage result={result} /> : <></> }
    </>
  );
}
