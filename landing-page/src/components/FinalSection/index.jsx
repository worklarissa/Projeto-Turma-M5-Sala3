import Button from 'react-bootstrap/Button';
import "./index.css"
import "../../assets/styles/colors.css"

export function FinalSection(){
  return(
    <section className="finalSection">
      <div className="finalContentLeft">
        <img src="https://i.ibb.co/NN725Cw/site-em-construo-01-01.png" alt="" />
      </div>
      <div className="finalContentRight">
          <h1 className="finalText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci et corrupti eos doloremque, numquam iure sint quibusdam, vel architecto cum asperiores reiciendis tenetur quod molestiae nam totam maiores officia cupiditate.
          </h1>
          <Button className="finalButton">Primary</Button>{' '}
        </div>
    </section>
  )
}