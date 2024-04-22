import Button from 'react-bootstrap/Button';
import "./index.css"
import "../../assets/styles/colors.css"
import logo from '../../assets/img/logo.svg'


export function FinalSection(){
  return(
    <section className="finalSection">
      <div className="finalContentLeft">
        <img src={logo} alt="" />
      </div>
      <div className="finalContentRight">
          <h1 className="finalText">
            Mais informações em breve...
          </h1>
          <Button className="finalButton">Fale Conosco</Button>{' '}
        </div>
    </section>
  )
}