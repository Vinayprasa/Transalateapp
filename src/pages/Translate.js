import React, { useState } from "react";
import axios from "axios";

function TranslateApp() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("te"); // Default: Telugu

  const handleTranslation = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.set("text", inputText);
    encodedParams.set("target_language", targetLanguage);
    encodedParams.set("source_language", "en");

    const options = {
      method: "POST",
      url: "https://text-translator2.p.rapidapi.com/translate",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "31d736b52dmsh7c243f1b5f035c5p1fb83cjsnb390540d488f",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com", // Move it inside the headers object
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);

      setTranslatedText(response.data.data.translatedText);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLanguageChange = (event) => {
    setTargetLanguage(event.target.value);
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Translate
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="targetLanguage" className="form-label">
          Target Language
        </label>
        <select
          className="form-select"
          id="targetLanguage"
          value={targetLanguage}
          onChange={handleLanguageChange}
        >
          <option value="te">Telugu</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="bn">Bengali</option>
          {/* Add more language options here */}
        </select>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleTranslation}
      >
        Translate
      </button>
      <div className="mt-3">
        <h3>Translated Text:</h3>
        <p>{translatedText}</p>
      </div>
    </div>
  );
}

export default TranslateApp;
