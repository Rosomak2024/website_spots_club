import myphoto from './assets/IMG_20220321_212202_032.jpg'

function About() {
  return (
    <div className="main">
      <h1>
        Trener Michał Barański
      </h1>
      <img src={myphoto} className='myphoto' alt='myphoto' />
      <p>
        Treningi w klubie prowadzi Michał Barański ,który trenuje od 23 lat.<br></br>
        Swoja przygodę ze sportami walki ropoczął od karate gosoku-ryu w Warszawskim klubie karate.
        Swoje pierwsze stopnie uzyskał,u shihana Piotrkowicza,a potem kolejne do 3kyu
        w Stołecznym Klubie Oyama karate,ostatnie stopnie zdając w Krakowie u shihan Dyducha.
        W czasie studiów ćwiczył judo. Kolejny etap to było Ashihara Karate i stopnie 2 i 1 kyu
        w Polskiej Organizacji Ashihara Karate u shihan Winiarskiego.<br></br> Ciagłe poszukiwania realnego systemu walki
        zaprowadziły trenera do shihan Jan Sznajder i Polskiej Organizacji Furo,gdzie rozwinał umiejetności
        z zakresu walki w pełnym kontakcie na zasadach mma zdobywając 2 stopnień mistrzowski.
        W między czasie trenował BJJ w Akademii Lwa u trenera Zbigniewa Wyszyńskiego.
        Obecnie blisko wspópracuje i uczy się od trenera sensei Tomasza Kwiatkowskiego z
        Fight Club TK Team, którego doświdczenie trenerskie na arenie mma jest bardzo szerokie i uwieńczone licznymi sukcesami.
        Trener Michał stawia na ciągły rozwój,zdrowie i sport.Jest człowiekiem nastawionym na wsparcie i pomoc trenerską.
        Moje starty zawodnicze nie były liczne,ale uwieńczone sukcesami.
        Był vce mistrzem karate między Polski AK,ostatni podwójny start w formule kickboxing i grappling w kategorii
        OPEN na otwartych mistrzostwach w Mikołowie uwieńczony został dwoma brązowymi medalami odbył w 2016 roku.
      </p>
    </div>
  );
}

export default About;
