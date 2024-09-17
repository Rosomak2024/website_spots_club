import React from "react";

const DownloadFiles3 = () => {
  return (
    <div>
      <a
        className="download_link"
        href="../Umowa_zajęcia_sportowe_sp81.pdf"
        download="Umowa_zajęcia_sportowe_sp81.pdf"
      >
        Pobierz deklaracja na zajęcia sportowe szkoła PDF
      </a>
      <br></br>
      <a
        className="download_link"
        href="../oświadczenie_kontakt.pdf"
        download="oświadczenie_kontakt.pdf"
      >
        Pobierz Załącznik 1 PDF
      </a>
      <br></br>
      <a
        className="download_link"
        href="../oświadczenie_rodo.pdf"
        download="oświadczenie_rodo.pdf"
      >
        Pobierz Załącznik 2 PDF
      </a>
      <br></br>
      <a
        className="download_link"
        href="../standardy_ochrony_małoletnich_CIR.pdf"
        download="standardy_ochrony_małoletnich_CIR.pdf"
      >
        Pobierz Standardy Ochrony Małoletnich PDF
      </a>
    </div>
  );
};

export default DownloadFiles3;
