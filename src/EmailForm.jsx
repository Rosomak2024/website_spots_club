import { useState } from 'react';

const EmailForm = () => {
  const [odbiorca, ustawOdbiorca] = useState('');
  const [temat, ustawTemat] = useState('');
  const [wiadomosc, ustawWiadomosc] = useState('');

  const wyslijEmail = () => {
    // zaimplementować tutaj logikę wysyłania e-maila.
    

   // tu consol logi działają
    console.log('Odbiorca:', odbiorca);
    console.log('Temat:', temat);
    console.log('Wiadomość:', wiadomosc);
  };

  return (
    <div>
      <h2>Wyślij e-mail</h2>
      <form>
        <div>
          <label htmlFor="odbiorca">Odbiorca:</label>
          <input
            type="email"
            id="odbiorca"
            value={odbiorca}
            onChange={(e) => ustawOdbiorca(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="temat">Temat:</label>
          <input
            type="text"
            id="temat"
            value={temat}
            onChange={(e) => ustawTemat(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="wiadomosc">Wiadomość:</label>
          <textarea
            id="wiadomosc"
            value={wiadomosc}
            onChange={(e) => ustawWiadomosc(e.target.value)}
          />
        </div>
        <button type="button" onClick={wyslijEmail}>
          Wyślij e-mail
        </button>
      </form>
    </div>
  );
};

export default EmailForm;

