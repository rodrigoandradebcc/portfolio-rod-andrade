import RodPhoto from '../../assets/img/rodsocial.png';
import './styles.scss';

function Container() {
  return (
    <section className="container hero">
      <div className="container-item">
        <h1>Rod Andrade</h1>
        <h3 className="mask">Creative Developer</h3>
        <h3 className="mask">Ui Design and Front End</h3>

        <a href="" className="square">WORKS</a>
      </div>

      <div className="container-item">
        <img src={RodPhoto} alt="" />
      </div>
    </section>
  );
}

export default Container;
