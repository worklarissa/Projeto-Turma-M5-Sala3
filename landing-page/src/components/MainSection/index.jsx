import "./index.css";
import "../../assets/styles/colors.css";
import imgMain from "../../assets/img/imgMain.jpeg";
import { MiddleSection } from "../MiddleSection/MiddleSection";

export function MainSection() {
  return (
    <>
      <section className="mainSection">
        <div className="leftMainContent">
        </div>
        <div className="imgContent">
          <img className="imgMain" src={imgMain} alt="" />

        </div>
        <div className="mainContent">
          <div className="mainText">
            <h1>
              O Brasil emerge como um estudo crucial para compreender as
              dinâmicas de pobreza e desigualdade, especialmente em áreas
              rurais, onde essas questões se manifestam de forma intensificada.
              <br /> <br />Com uma considerável parcela da população rural vivenciando
              condições precárias, aliadas a um PIB per capita expressivo e
              acentuadas disparidades de renda, o país oferece um cenário
              propício para análises sobre políticas redistributivas e suas
              implicações socioeconômicas, particularmente nas regiões rurais.
            </h1>
          </div>
        </div>
      </section>
      <MiddleSection />
    </>
  );
}
