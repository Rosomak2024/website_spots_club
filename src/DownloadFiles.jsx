import React from "react";

const DownloadPdfFile = () => {
  return (
    <div>
      <a
        className="download_link"
        href="../public/Umowa_zajęcia_sportowe.pdf"
        download="Umowa_zajęcia_sportowe.pdf"
      >
        Pobierz deklaracja na zajęcia PDF
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

      {/* <h2 className="download_title">
        <a
          href="/public/Umowa_zajęcia_sportowe.pdf"
          download="Umowa_zajęcia_sportowe.pdf"
        />
        Pobierz plik pdf załącznik 1
      </h2>
      <h3 className="download_title">
        <a
          href="/public/Umowa_zajęcia_sportowe.pdf"
          download="Umowa_zajęcia_sportowe.pdf"
        />
        Pobierz plik pdf załącznik 2
      </h3> */}
    </div>
  );
};

export default DownloadPdfFile;
