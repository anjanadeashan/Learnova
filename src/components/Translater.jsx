import React, { useState } from 'react';

const Translator = () => {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('si');

  const handleTranslate = () => {
    // Mock translation - replace with actual translation service
    setTranslatedText(`Translated: ${sourceText}`);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Translator</h1>
        <p>Translate text between different languages</p>
      </div>
      
      <div className="translator-container">
        <div className="language-selector">
          <div className="lang-option">
            <label>From:</label>
            <select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
              <option value="en">English</option>
              <option value="si">Sinhala</option>
              <option value="ta">Tamil</option>
              <option value="hi">Hindi</option>
            </select>
          </div>
          
          <button className="swap-languages">⇄</button>
          
          <div className="lang-option">
            <label>To:</label>
            <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
              <option value="si">Sinhala</option>
              <option value="en">English</option>
              <option value="ta">Tamil</option>
              <option value="hi">Hindi</option>
            </select>
          </div>
        </div>
        
        <div className="translation-area">
          <div className="input-section">
            <label>Enter text to translate:</label>
            <textarea
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
              placeholder="Type or paste your text here..."
              rows="8"
            ></textarea>
            <button className="btn-translate" onClick={handleTranslate}>
              Translate
            </button>
          </div>
          
          <div className="output-section">
            <label>Translation:</label>
            <textarea
              value={translatedText}
              readOnly
              placeholder="Translation will appear here..."
              rows="8"
            ></textarea>
            <div className="translation-actions">
              <button className="btn-copy">Copy</button>
              <button className="btn-speak">🔊 Listen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translator;