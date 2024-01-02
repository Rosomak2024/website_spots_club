import trainephoto from './assets/received_401294507751293.jpeg'
import trainephoto1 from './assets/comp_IMG_2049.jpg'

function Trainings() {
  return (
    <div className="main">
      <p>
        Dzik zaprasza Cię bez względu na Twóje umiejętności

        Zapraszamy na treningi!
        Sporty Walki to nasz sposób na życie od ponad 20lat
        Prowadzimy treningi z dziećmi i dorosłymi z kickboxingu i mma.
        Nasze podejście nie jest skupione na jednej dyscyplinie
        ,ale na skutecznych elementach różnych sportów walki.

      </p>
      <div className='trainephoto_container'>
        <img src={trainephoto} className='trainephoto' alt='trainephoto' />
        <img src={trainephoto1} className='trainephoto1' alt='trainephoto1' />

      </div>
    </div>
  );
}

export default Trainings;
