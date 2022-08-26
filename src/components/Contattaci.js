import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsFormSubmitted } from "../redux/pubbliufficio-store";

function Contattaci() {
  
  //dotenv.config();
  const dispatch = useDispatch();
  const isFormSubmitted = useSelector((state) => state.isFormSubmitted);
  const [contatto, setContatto] = useState("");
  const [messaggio, setMessaggio] = useState("");

  const handleChange = (event) => {
    event.currentTarget.name === "contatto"
      ? setContatto(event.currentTarget.value)
      : setMessaggio(event.currentTarget.value);
  };

  useEffect(() => {
    dispatch(setIsFormSubmitted(false));
    const scriptURL = process.env.SCRIPT_URL;
    const form = document.forms["pubbliufficio-form"];
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          console.log("Success!", response);
          dispatch(setIsFormSubmitted(true));
          setMessaggio("");
          setContatto("");
        })
        .catch((error) => console.error("Error!", error.message));
    });
  }, [dispatch]);

  return (
    <div className="container Main-page">
      {!isFormSubmitted && (
        <form name="pubbliufficio-form">
          <label>Contatto</label>
          <input
            required
            name="contatto"
            type="text"
            value={contatto}
            onChange={handleChange}
          />
          <label>Messaggio</label>
          <textarea
            name="messaggio"
            type="text"
            value={messaggio}
            onChange={handleChange}
          ></textarea>

          <input className="submit-button mt-4" type="submit" value="Invia" />
        </form>
      )}
      {isFormSubmitted && (
        <div className="Form-submitted">
          <div className="Form-submitted-message mb-4">
            Grazie per averci conttattati, verrai ricontattato al più presto
          </div>
          <div>
            <button
              className="Back-to-form mt-4"
              onClick={() => dispatch(setIsFormSubmitted(false))}
            >
              Torna al form
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contattaci;
