import "../../assets/styles/colors.css"
import Card from 'react-bootstrap/Card';
import "./middlesec.css";

export function MiddleSection(){
  return(
    <>
      <section className="middleSection">
        <div className="fundo-titulo-midsec">
          <div className="titulo-midsec bg-color-6 text-color-4">
            <h2>As Raízes do Problema</h2>
          </div>
        </div>
        <div className="cards-line">
            <div>
              <Card className="bg-color-7">
                <Card.Body>Devido à sua grande população pobre, alto PIB per 
                  capita e alto grau de desigualdade de renda, criando condições 
                  favoráveis para políticas redistributivas. O contexto brasileiro
                   combina desafios econômicos com potencial para mudança através 
                   de políticas públicas.
                </Card.Body>
              </Card>
            </div>

            <div>
              <Card>
                <Card.Body>A desigualdade no acesso aos serviços de saúde nas áreas
                   rurais é profundamente influenciada por diversos fatores. A 
                   renda dos indivíduos, a disponibilidade de serviços públicos 
                   de saúde e a posse de planos de saúde desempenham papéis 
                   cruciais nesse cenário.
                </Card.Body>
              </Card>
            </div>

            <div>
              <Card>
                <Card.Body>Em regiões de baixa densidade populacional, a oferta 
                  de serviços de saúde tende a ser escassa, o que dificulta 
                  ainda mais o acesso, especialmente para aqueles que não 
                  possuem seguro saúde. Considere tanto os fatores socioeconômicos
                  quanto a oferta de serviços de saúde.
                </Card.Body>
              </Card>
            </div>

        </div>

      </section>
    </>
  )
}

