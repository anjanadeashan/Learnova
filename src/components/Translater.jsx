import React, { useState, useEffect } from 'react';

const InteractiveTranslator = () => {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [detectedLang, setDetectedLang] = useState('');

  // Comprehensive languages with flags (including Sri Lankan languages)
  const languages = [
    // Sri Lankan Languages
    { code: 'si', name: 'Sinhala (සිංහල)', flag: '🇱🇰' },
    { code: 'ta', name: 'Tamil (தமிழ்)', flag: '🇱🇰' },
    
    // Major World Languages
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: 'Chinese (Mandarin)', flag: '🇨🇳' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'hi', name: 'Hindi (हिन्दी)', flag: '🇮🇳' },
    { code: 'ar', name: 'Arabic (العربية)', flag: '🇸🇦' },
    { code: 'bn', name: 'Bengali (বাংলা)', flag: '🇧🇩' },
    { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
    { code: 'ru', name: 'Russian (Русский)', flag: '🇷🇺' },
    { code: 'ja', name: 'Japanese (日本語)', flag: '🇯🇵' },
    { code: 'pa', name: 'Punjabi (ਪੰਜਾਬੀ)', flag: '🇮🇳' },
    { code: 'de', name: 'German (Deutsch)', flag: '🇩🇪' },
    { code: 'jv', name: 'Javanese', flag: '🇮🇩' },
    { code: 'wu', name: 'Wu Chinese', flag: '🇨🇳' },
    { code: 'ms', name: 'Malay (Bahasa Melayu)', flag: '🇲🇾' },
    { code: 'te', name: 'Telugu (తెలుగు)', flag: '🇮🇳' },
    { code: 'vi', name: 'Vietnamese (Tiếng Việt)', flag: '🇻🇳' },
    { code: 'ko', name: 'Korean (한국어)', flag: '🇰🇷' },
    { code: 'fr', name: 'French (Français)', flag: '🇫🇷' },
    { code: 'mr', name: 'Marathi (मराठी)', flag: '🇮🇳' },
    { code: 'tr', name: 'Turkish (Türkçe)', flag: '🇹🇷' },
    { code: 'ur', name: 'Urdu (اردو)', flag: '🇵🇰' },
    { code: 'gu', name: 'Gujarati (ગુજરાતી)', flag: '🇮🇳' },
    { code: 'it', name: 'Italian (Italiano)', flag: '🇮🇹' },
    { code: 'th', name: 'Thai (ไทย)', flag: '🇹🇭' },
    { code: 'kn', name: 'Kannada (ಕನ್ನಡ)', flag: '🇮🇳' },
    { code: 'ml', name: 'Malayalam (മലയാളം)', flag: '🇮🇳' },
    { code: 'my', name: 'Burmese (မြန်မာ)', flag: '🇲🇲' },
    { code: 'fa', name: 'Persian (فارسی)', flag: '🇮🇷' },
    { code: 'pl', name: 'Polish (Polski)', flag: '🇵🇱' },
    { code: 'or', name: 'Odia (ଓଡ଼ିଆ)', flag: '🇮🇳' },
    { code: 'ne', name: 'Nepali (नेपाली)', flag: '🇳🇵' },
    { code: 'nl', name: 'Dutch (Nederlands)', flag: '🇳🇱' },
    { code: 'uk', name: 'Ukrainian (Українська)', flag: '🇺🇦' },
    { code: 'sd', name: 'Sindhi (سنڌي)', flag: '🇵🇰' },
    { code: 'ro', name: 'Romanian (Română)', flag: '🇷🇴' },
    { code: 'id', name: 'Indonesian (Bahasa Indonesia)', flag: '🇮🇩' },
    { code: 'ps', name: 'Pashto (پښتو)', flag: '🇦🇫' },
    { code: 'hu', name: 'Hungarian (Magyar)', flag: '🇭🇺' },
    { code: 'cs', name: 'Czech (Čeština)', flag: '🇨🇿' },
    { code: 'az', name: 'Azerbaijani (Azərbaycan)', flag: '🇦🇿' },
    { code: 'sv', name: 'Swedish (Svenska)', flag: '🇸🇪' },
    { code: 'he', name: 'Hebrew (עברית)', flag: '🇮🇱' },
    { code: 'el', name: 'Greek (Ελληνικά)', flag: '🇬🇷' },
    { code: 'be', name: 'Belarusian (Беларуская)', flag: '🇧🇾' },
    { code: 'ha', name: 'Hausa', flag: '🇳🇬' },
    { code: 'ig', name: 'Igbo', flag: '🇳🇬' },
    { code: 'yo', name: 'Yoruba', flag: '🇳🇬' },
    { code: 'uz', name: 'Uzbek (Oʻzbek)', flag: '🇺🇿' },
    { code: 'mg', name: 'Malagasy', flag: '🇲🇬' },
    { code: 'am', name: 'Amharic (አማርኛ)', flag: '🇪🇹' },
    { code: 'so', name: 'Somali (Soomaali)', flag: '🇸🇴' },
    { code: 'ca', name: 'Catalan (Català)', flag: '🇪🇸' },
    { code: 'fi', name: 'Finnish (Suomi)', flag: '🇫🇮' },
    { code: 'da', name: 'Danish (Dansk)', flag: '🇩🇰' },
    { code: 'no', name: 'Norwegian (Norsk)', flag: '🇳🇴' },
    { code: 'sk', name: 'Slovak (Slovenčina)', flag: '🇸🇰' },
    { code: 'bg', name: 'Bulgarian (Български)', flag: '🇧🇬' },
    { code: 'hr', name: 'Croatian (Hrvatski)', flag: '🇭🇷' },
    { code: 'sr', name: 'Serbian (Српски)', flag: '🇷🇸' },
    { code: 'bs', name: 'Bosnian (Bosanski)', flag: '🇧🇦' },
    { code: 'sl', name: 'Slovenian (Slovenščina)', flag: '🇸🇮' },
    { code: 'et', name: 'Estonian (Eesti)', flag: '🇪🇪' },
    { code: 'lv', name: 'Latvian (Latviešu)', flag: '🇱🇻' },
    { code: 'lt', name: 'Lithuanian (Lietuvių)', flag: '🇱🇹' },
    { code: 'mk', name: 'Macedonian (Македонски)', flag: '🇲🇰' },
    { code: 'mt', name: 'Maltese (Malti)', flag: '🇲🇹' },
    { code: 'is', name: 'Icelandic (Íslenska)', flag: '🇮🇸' },
    { code: 'ga', name: 'Irish (Gaeilge)', flag: '🇮🇪' },
    { code: 'cy', name: 'Welsh (Cymraeg)', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' },
    { code: 'eu', name: 'Basque (Euskera)', flag: '🇪🇸' },
    { code: 'sw', name: 'Swahili (Kiswahili)', flag: '🇰🇪' },
    { code: 'zu', name: 'Zulu (isiZulu)', flag: '🇿🇦' },
    { code: 'af', name: 'Afrikaans', flag: '🇿🇦' },
    { code: 'sq', name: 'Albanian (Shqip)', flag: '🇦🇱' },
    { code: 'hy', name: 'Armenian (Հայերեն)', flag: '🇦🇲' },
    { code: 'ka', name: 'Georgian (ქართული)', flag: '🇬🇪' },
    { code: 'mn', name: 'Mongolian (Монгол)', flag: '🇲🇳' },
    { code: 'lo', name: 'Lao (ລາວ)', flag: '🇱🇦' },
    { code: 'km', name: 'Khmer (ខ្មែរ)', flag: '🇰🇭' },
    { code: 'tl', name: 'Filipino (Tagalog)', flag: '🇵🇭' },
  ];

  // Google Translate API configuration
  const GOOGLE_API_KEY = 'YOUR_GOOGLE_TRANSLATE_API_KEY_HERE'; // Replace with your Google API key

  // Multiple free translation APIs with Google Translate as primary
  const translateText = async (text, from, to) => {
    if (!text.trim()) {
      setTranslatedText('');
      return;
    }

    setIsLoading(true);
    setError('');

    // Try multiple APIs in order (Google first, then fallbacks)
    const apis = [
      // API 1: Google Translate (Most accurate - requires API key)
      {
        name: 'Google Translate',
        url: `https://translation.googleapis.com/language/translate/v2?key=${GOOGLE_API_KEY}`,
        method: 'POST',
        condition: () => GOOGLE_API_KEY && GOOGLE_API_KEY !== 'YOUR_GOOGLE_TRANSLATE_API_KEY_HERE',
        body: (text, from, to) => ({
          q: text,
          source: from,
          target: to,
          format: 'text'
        }),
        parseResponse: (data) => data.data?.translations?.[0]?.translatedText
      },

      // API 2: Google Translate (Free - no API key, limited)
      {
        name: 'Google Translate Free',
        url: 'https://translate.googleapis.com/translate_a/single',
        method: 'GET',
        condition: () => true,
        transform: (text, from, to) => {
          const params = new URLSearchParams({
            client: 'gtx',
            sl: from,
            tl: to,
            dt: 't',
            q: text
          });
          return `${apis[1].url}?${params}`;
        },
        parseResponse: (data) => {
          // Google free API returns an array format
          if (Array.isArray(data) && data[0] && Array.isArray(data[0])) {
            return data[0].map(item => item[0]).join('');
          }
          return null;
        }
      },
      
      // API 3: Microsoft Translator (Free tier)
      {
        name: 'Microsoft Translator',
        url: 'https://api.mymemory.translated.net/get',
        method: 'GET',
        condition: () => true,
        transform: (text, from, to) => `${apis[2].url}?q=${encodeURIComponent(text)}&langpair=${from}|${to}`,
        parseResponse: (data) => data.responseData?.translatedText || data.matches?.[0]?.translation
      },
      
      // API 4: LibreTranslate (Free and open source)
      {
        name: 'LibreTranslate',
        url: 'https://libretranslate.de/translate',
        method: 'POST',
        condition: () => true,
        body: (text, from, to) => ({
          q: text,
          source: from,
          target: to,
          format: 'text'
        }),
        parseResponse: (data) => data.translatedText
      }
    ];

    for (let i = 0; i < apis.length; i++) {
      const api = apis[i];
      
      // Skip API if condition not met
      if (!api.condition()) {
        console.log(`⏭️ Skipping ${api.name} (condition not met)`);
        continue;
      }

      try {
        console.log(`🔄 Trying API ${i + 1}: ${api.name}`);
        
        let response;
        
        if (api.method === 'GET') {
          const url = api.transform(text, from, to);
          response = await fetch(url);
        } else {
          response = await fetch(api.url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(api.body(text, from, to))
          });
        }

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(`📥 Response from ${api.name}:`, data);
        
        let translation = null;
        
        // Enhanced parsing for each API
        if (api.name === 'Google Translate') {
          translation = data.data?.translations?.[0]?.translatedText;
        } else if (api.name === 'Google Translate Free') {
          // Google free API returns nested arrays
          if (Array.isArray(data) && data[0] && Array.isArray(data[0])) {
            translation = data[0].map(item => Array.isArray(item) ? item[0] : item).join('').trim();
          }
        } else if (api.name === 'Microsoft Translator') {
          translation = data.responseData?.translatedText || data.matches?.[0]?.translation;
        } else if (api.name === 'LibreTranslate') {
          translation = data.translatedText;
        }
        
        console.log(`🔍 Extracted translation:`, translation);
        
        // Validate translation
        if (translation && 
            typeof translation === 'string' && 
            translation.trim() && 
            translation.trim() !== text.trim() && 
            translation !== 'null' && 
            translation !== 'undefined' &&
            translation.length > 0) {
          
          // Clean up translation
          const cleanTranslation = translation.trim();
          console.log(`✅ Success with ${api.name}:`, cleanTranslation);
          
          // Force state update
          setTranslatedText(cleanTranslation);
          setError('');
          setIsLoading(false);
          
          console.log(`📝 Translation set to state:`, cleanTranslation);
          return; // Success - exit function
        } else {
          console.warn(`❌ Invalid translation from ${api.name}:`, translation);
          throw new Error(`Invalid translation: "${translation}"`);
        }

      } catch (err) {
        console.warn(`❌ ${api.name} failed:`, err.message);
        
        // If this is the last API, show enhanced demo
        if (i === apis.length - 1) {
          console.log('🎭 All APIs failed, using enhanced demo translation');
          setError(`All translation services are currently unavailable. ${GOOGLE_API_KEY === 'YOUR_GOOGLE_TRANSLATE_API_KEY_HERE' ? 'Add your Google API key for best results.' : 'Using demo mode.'}`);
          
          // Enhanced demo translations
          const enhancedDemo = getEnhancedDemoTranslation(text, from, to);
          setTranslatedText(enhancedDemo);
          return;
        }
        // Continue to next API
        continue;
      }
    }
  };

  // Enhanced demo translation with more language support
  const getEnhancedDemoTranslation = (text, from, to) => {
    const demoTranslations = {
      // English to other languages
      'en-si': {
        'hello': 'හලෝ',
        'how are you': 'කොහොමද?',
        'good morning': 'සුභ උදෑසනක්',
        'thank you': 'ස්තුතියි',
        'goodbye': 'ගිහින් එන්නම්',
        'please': 'කරුණාකර',
        'sorry': 'සමාවන්න',
        'yes': 'ඔව්',
        'no': 'නෑ',
        'i love you': 'මම ඔයාට ආදරෙයි'
      },
      'en-ta': {
        'hello': 'வணக்கம்',
        'how are you': 'எப்படி இருக்கீங்க?',
        'good morning': 'காலை வணக்கம்',
        'thank you': 'நன்றி',
        'goodbye': 'போய் வருகிறேன்',
        'please': 'தயவு செய்து',
        'sorry': 'மன்னிக்கவும்',
        'yes': 'ஆம்',
        'no': 'இல்லை',
        'i love you': 'நான் உன்னை காதலிக்கிறேன்'
      },
      'en-es': {
        'hello': 'hola',
        'how are you': 'cómo estás',
        'good morning': 'buenos días',
        'thank you': 'gracias',
        'goodbye': 'adiós',
        'please': 'por favor',
        'sorry': 'lo siento',
        'yes': 'sí',
        'no': 'no',
        'world': 'mundo',
        'i love you': 'te amo'
      },
      'en-fr': {
        'hello': 'bonjour',
        'how are you': 'comment allez-vous',
        'good morning': 'bonjour',
        'thank you': 'merci',
        'goodbye': 'au revoir',
        'please': 's\'il vous plaît',
        'sorry': 'désolé',
        'yes': 'oui',
        'no': 'non',
        'world': 'monde',
        'i love you': 'je t\'aime'
      },
      'en-de': {
        'hello': 'hallo',
        'how are you': 'wie geht es dir',
        'good morning': 'guten Morgen',
        'thank you': 'danke',
        'goodbye': 'auf Wiedersehen',
        'please': 'bitte',
        'sorry': 'entschuldigung',
        'yes': 'ja',
        'no': 'nein',
        'world': 'welt',
        'i love you': 'ich liebe dich'
      },
      'en-hi': {
        'hello': 'नमस्ते',
        'how are you': 'आप कैसे हैं',
        'good morning': 'सुप्रभात',
        'thank you': 'धन्यवाद',
        'goodbye': 'अलविदा',
        'please': 'कृपया',
        'sorry': 'माफ़ करना',
        'yes': 'हाँ',
        'no': 'नहीं',
        'i love you': 'मैं तुमसे प्यार करता हूँ'
      },
      // Reverse translations
      'si-en': {
        'හලෝ': 'hello',
        'කොහොමද?': 'how are you?',
        'සුභ උදෑසනක්': 'good morning',
        'ස්තුතියි': 'thank you'
      },
      'ta-en': {
        'வணக்கம்': 'hello',
        'எப்படி இருக்கீங்க?': 'how are you?',
        'காலை வணக்கம்': 'good morning',
        'நன்றி': 'thank you'
      },
      'es-en': {
        'hola': 'hello',
        'cómo estás': 'how are you',
        'gracias': 'thank you',
        'mundo': 'world'
      }
    };

    const key = `${from}-${to}`;
    const translations = demoTranslations[key] || {};
    
    let result = text.toLowerCase();
    
    // Apply word-by-word translation
    Object.entries(translations).forEach(([original, translated]) => {
      const regex = new RegExp(`\\b${original}\\b`, 'gi');
      result = result.replace(regex, translated);
    });
    
    // If no translations applied, show a generic message
    if (result === text.toLowerCase()) {
      const targetLangName = languages.find(lang => lang.code === to)?.name || to.toUpperCase();
      return `[${targetLangName} Translation] ${text}`;
    }
    
    return result;
  };

  // Auto-translate when text changes (with debounce)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (sourceText.trim() && sourceLang !== targetLang) {
        console.log(`🔄 Auto-translating: "${sourceText}" from ${sourceLang} to ${targetLang}`);
        translateText(sourceText, sourceLang, targetLang);
      } else if (!sourceText.trim()) {
        console.log('📝 Clearing translation (empty text)');
        setTranslatedText('');
        setError('');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [sourceText, sourceLang, targetLang]);

  const handleSwapLanguages = () => {
    const tempLang = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(tempLang);
    
    const tempText = sourceText;
    setSourceText(translatedText);
    setTranslatedText(tempText);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const clearText = () => {
    setSourceText('');
    setTranslatedText('');
    setError('');
  };

  const getLanguageByCode = (code) => {
    return languages.find(lang => lang.code === code) || { name: code, flag: '🌐' };
  };

  return (
    <div className="translator-container">
      <div className="translator-header">
        <h1>🌍 Universal Translator</h1>
        <p>Translate text between 20+ languages instantly</p>
      </div>

      <div className="language-selectors">
        <div className="language-selector">
          <label>From</label>
          <select 
            value={sourceLang} 
            onChange={(e) => setSourceLang(e.target.value)}
            className="language-select"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
        </div>

        <button 
          className="swap-button" 
          onClick={handleSwapLanguages}
          title="Swap languages"
        >
          ⇄
        </button>

        <div className="language-selector">
          <label>To</label>
          <select 
            value={targetLang} 
            onChange={(e) => setTargetLang(e.target.value)}
            className="language-select"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="translation-panels">
        <div className="text-panel source-panel">
          <div className="panel-header">
            <span className="panel-title">
              {getLanguageByCode(sourceLang).flag} {getLanguageByCode(sourceLang).name}
            </span>
            <div className="panel-actions">
              <span className="char-count">{sourceText.length}/5000</span>
              {sourceText && (
                <button onClick={clearText} className="clear-btn" title="Clear">
                  ✕
                </button>
              )}
            </div>
          </div>
          <textarea
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
            placeholder="Type text to translate..."
            className="text-input"
            maxLength={5000}
          />
        </div>

        <div className="text-panel target-panel">
          <div className="panel-header">
            <span className="panel-title">
              {getLanguageByCode(targetLang).flag} {getLanguageByCode(targetLang).name}
            </span>
            <div className="panel-actions">
              {translatedText && (
                <button 
                  onClick={() => copyToClipboard(translatedText)} 
                  className="copy-btn"
                  title="Copy translation"
                >
                  📋
                </button>
              )}
            </div>
          </div>
          <div className="text-output">
            {isLoading && (
              <div className="loading-indicator">
                <div className="loading-spinner"></div>
                <span>Translating...</span>
              </div>
            )}
            {error && (
              <div className="error-message">
                ⚠️ {error}
              </div>
            )}
            {!isLoading && !error && translatedText && (
              <div className="translated-text">{translatedText}</div>
            )}
            {!isLoading && !error && !translatedText && sourceText && (
              <div className="placeholder">Translation will appear here...</div>
            )}
            {!sourceText && (
              <div className="placeholder">Enter text to see translation</div>
            )}
          </div>
        </div>
      </div>

      {detectedLang && detectedLang !== sourceLang && (
        <div className="detected-language">
          <span>🔍 Detected language: {getLanguageByCode(detectedLang).name}</span>
          <button onClick={() => setSourceLang(detectedLang)} className="use-detected">
            Use detected
          </button>
        </div>
      )}

      <div className="quick-phrases">
        <h3>Quick Phrases</h3>
        <div className="phrases-grid">
          {['Hello', 'Thank you', 'How are you?', 'Goodbye', 'Please', 'Sorry'].map(phrase => (
            <button 
              key={phrase}
              onClick={() => setSourceText(phrase)}
              className="phrase-btn"
            >
              {phrase}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
       
          

        .translator-header {
          text-align: center;
          margin-bottom: 30px;
          color: white;
        }

        .translator-header h1 {
          font-size: 2.5rem;
          margin: 0 0 10px 0;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          color:blue;
        }

        .translator-header p {
          font-size: 1.1rem;
          opacity: 0.9;
          margin: 0;
        }

        .language-selectors {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 30px;
          background: white;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .language-selector {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .language-selector label {
          font-weight: 600;
          color: #374151;
          font-size: 0.9rem;
        }

        .language-select {
          padding: 10px 15px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 14px;
          background: white;
          cursor: pointer;
          transition: all 0.2s ease;
          min-width: 180px;
        }

        .language-select:focus {
          outline: none;
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .swap-button {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 20px;
        }

        .swap-button:hover {
          transform: scale(1.1) rotate(180deg);
          box-shadow: 0 5px 15px rgba(79, 70, 229, 0.4);
        }

        .translation-panels {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }

        .text-panel {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          transition: transform 0.2s ease;
        }

        .text-panel:hover {
          transform: translateY(-2px);
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          background: #f8fafc;
          border-bottom: 1px solid #e5e7eb;
        }

        .panel-title {
          font-weight: 600;
          color: #374151;
          font-size: 1rem;
        }

        .panel-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .char-count {
          font-size: 0.8rem;
          color: #6b7280;
        }

        .clear-btn, .copy-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px;
          border-radius: 5px;
          transition: background 0.2s ease;
        }

        .clear-btn:hover, .copy-btn:hover {
          background: #e5e7eb;
        }

        .text-input {
          width: 100%;
          height: 200px;
          padding: 20px;
          border: none;
          outline: none;
          resize: none;
          font-size: 16px;
          line-height: 1.5;
          font-family: inherit;
        }

        .text-output {
          height: 200px;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          line-height: 1.5;
        }

        .loading-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          color: #6b7280;
        }

        .loading-spinner {
          width: 30px;
          height: 30px;
          border: 3px solid #e5e7eb;
          border-top: 3px solid #4f46e5;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .error-message {
          color: #dc2626;
          text-align: center;
          padding: 20px;
          background: #fef2f2;
          border-radius: 10px;
          border: 1px solid #fecaca;
        }

        .translated-text {
          width: 100%;
          text-align: left;
        }

        .placeholder {
          color: #9ca3af;
          text-align: center;
          font-style: italic;
        }

        .detected-language {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #eff6ff;
          padding: 10px 20px;
          border-radius: 10px;
          margin-bottom: 30px;
          color: #1e40af;
        }

        .use-detected {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 5px 10px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 0.8rem;
        }

        .quick-phrases {
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .quick-phrases h3 {
          margin: 0 0 15px 0;
          color: #374151;
          text-align: center;
        }

        .phrases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 10px;
        }

        .phrase-btn {
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          border: none;
          padding: 10px 15px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.9rem;
        }

        .phrase-btn:hover {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .translator-container {
            padding: 15px;
          }

          .translator-header h1 {
            font-size: 2rem;
          }

          .language-selectors {
            flex-direction: column;
            gap: 15px;
          }

          .swap-button {
            margin-top: 0;
            transform: rotate(90deg);
          }

          .translation-panels {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .language-select {
            min-width: 200px;
          }

          .phrases-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default InteractiveTranslator;