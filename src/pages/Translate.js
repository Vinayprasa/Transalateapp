import React,{useState} from 'react'
import axios from 'axios'

function TranslateApp() {
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [targetLanguage, setTargetLanguage] = useState('te'); // Default: Telugu
  
    const handleTranslation = async () => {
      const encodedParams = new URLSearchParams();
      encodedParams.set('q', inputText);
      encodedParams.set('target', targetLanguage);
      encodedParams.set('source', 'en');
  
      const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'Accept-Encoding': 'application/gzip',
          'X-RapidAPI-Key': '31d736b52dmsh7c243f1b5f035c5p1fb83cjsnb390540d488f',
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams,
      };
  
      try {
        const response = await axios.request(options);
        setTranslatedText(response.data.data.translations[0].translatedText);
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
        <button type="button" className="btn btn-primary" onClick={handleTranslation}>
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
  