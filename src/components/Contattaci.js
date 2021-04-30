import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsFormSubmitted } from "../redux/pubbliufficio-store";

function Contattaci() {
  const dispatch = useDispatch();
  const isFormSubmitted = useSelector((state) => state.isFormSubmitted);
  const [contatto, setContatto] = useState("");
  const [messaggio, setMessaggio] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setIsFormSubmitted(true));
  };
  const handleChange = (event) => {
    event.currentTarget.name === "contatto"
      ? setContatto(event.currentTarget.value)
      : setMessaggio(event.currentTarget.value);
  };

  return (
    <div className="container Main-page">
      {!isFormSubmitted && <form onSubmit={handleSubmit}>
        <label>Contatto</label>
        <input
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

        <input className="submit-button" type="submit" value="Submit" />
      </form>}
      {isFormSubmitted && <div className="form-submitted-message">
          Grazie per averci conttattati, verrai ricontattato al più presto</div>}
    </div>
  );
}

export default Contattaci;
