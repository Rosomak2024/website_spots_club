import photoSogoKakutogi from "./assets/Logopit_1660062158074.png";

function StartPage() {
  return (
    <div className="main">
      <h1 className="start_titile_sentence">
        "Widzimy głęboki sens w sportach walki ,a tym sensem jest człowiek
        ,chcący dążyć do przekraczania swoich możliwości na polu fizycznym i
        psychicznym"<br></br>
        {/* <span className="club_name">Klub sportów walki dzik</span> */}
      </h1>
      <div className="startpage_container">
        {/* <img src={photoSogoKakutogi} className="sogokakutogi" alt="logoSogo" /> */}

        <p>
          Zapraszamy na treningi!<br></br>
          Sporty Walki to nasz sposób na życie od ponad 20lat Prowadzimy
          treningi z dziećmi i dorosłymi z mma,karate i kickboxingu. Nasze
          podejście nie jest skupione na jednej dyscyplinie ,ale na skutecznych
          elementach różnych sportów walki.<br></br>
          <br></br>
          <br></br>
          Każda wyprawa zaczyna się od pierwszegon kroku:)
          <br></br>
          <br></br>
          [...] W mojej szkole walki nie będę tolerował wąskiego i
          jednostronnego sposobu myślenia.
          <br></br> Miyamoto Musashi
        </p>
        <img src={photoSogoKakutogi} className="sogokakutogi" alt="logoSogo" />
      </div>
    </div>
  );
}

export default StartPage;
