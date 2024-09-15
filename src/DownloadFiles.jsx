import React from "react";

const DownloadPdfFile = () => {
  return (
    <div>
      <a
        className="download_link"
        href="../public/Umowa_zajęcia_sportowe_1raz.pdf"
        download="Umowa_zajęcia_sportowe_1raz.pdf"
      >
        Pobierz deklaracja na zajęcia raz w tygodniu PDF
      </a>
      <br></br>
      <a
        className="download_link"
        href="../public/Umowa_zajęcia_sportowe_2razy.pdf"
        download="Umowa_zajęcia_sportowe_2razy.pdf"
      >
        Pobierz deklaracja na zajęcia dwa razy w tygodniu PDF
      </a>
      <br></br>
      <a
        className="download_link"
        href="../public/oświadczenie_kontakt.pdf"
        download="oświadczenie_kontakt.pdf"
      >
        Pobierz Załącznik 1 PDF
      </a>
      <br></br>
      <a
        className="download_link"
        href="../public/oświadczenie_rodo.pdf"
        download="oświadczenie_rodo.pdf"
      >
        Pobierz Załącznik 2 PDF
      </a>
      <br></br>
      <a
        className="download_link"
        href="../public/standardy_ochrony_małoletnich_CIR.pdf"
        download="public/standardy_ochrony_małoletnich_CIR.pdf"
      >
        Pobierz Standardy Ochrony Małoletnich PDF
      </a>
    </div>
  );
};

export default DownloadPdfFile;
