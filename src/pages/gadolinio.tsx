import "../style/element.css"

import gadolinio from "../images/gadolinio.jpg"
import gadolinioatomo from "../images/gadolinioatomo.jpg"
import tbGadolinio from "../images/tbGadolínio.jpg"

export function Gadolinio() {
  return(
    <div className="container">

    <div className="container-center">

    <div className="nome">
      <h3>GADOLÍNIO</h3>
    </div>
    <img className="imgatomo" src={gadolinio} />
    <div className="usado">
      <h4>No que é usado?</h4>
      <li>Usado em exames de ressonância magnética (MRI), principalmente para o diagnóstico de tumores;</li>
      <li>Por ser um absorvedor de nêutrons pode ser usado como barra de controle em reator nuclear;</li>
      <li>Adição de pequenas quantidades do elemento melhoram as qualidades de ligas de ferro e crômio;</li>
      <li> Usado em ligas na fabricação de imãs, equipamentos eletrônicos e armazenamento de dados;</li>
      <li> Em equipamentos de TV (antigos) para se conseguir a cor verde;</li>
      <li> Na fabricação de CDs;</li>
      <li> Em alguns geradores de microondas;</li>

    </div>
    <div className="rodapemap">
      </div>
    <div className="div">
      <p>Foi descoberto de maneira independente pelos cientistas Boisbaldran e Marignac em 1880 e por Monsander que o isolou do minério de ítrio em 1886.</p>
      <p>O gadolínio recebeu este nome em homenagem ao químico finlandês Johan Gadolin (1760-1852), que descobriu o ítrio em 1792.</p>
    </div>

    <div className="rary">
      <img className="imgatomo" src={gadolinioatomo} />
    </div>
      <img className="tbElemento" src={tbGadolinio} />

    
      <div className="rodapemap">
      </div>
      <h4>PROPRIEDADES</h4>

      <table>
                <thead>
                <tr>
                  <td>Grandeza</td>
                  <td>Valor</td>
                </tr>

                </thead>
                <tbody>

                  <tr>
                    <td>Símbolo Químico</td>
                    <td>Gd</td>
                  </tr>

                  <tr>
                    <td>Número Atômico</td>
                    <td>64</td>
                  </tr>

                  <tr>
                    <td>Massa Atomica</td>
                    <td>140,1 u</td>
                  </tr>

                  <tr>
                    <td>Ponto de Fusão</td>
                    <td>1.312°C</td>
                  </tr>

                  <tr>
                    <td>Densidade</td>
                    <td>7901 kg/m3</td>
                  </tr>

                  <tr>
                    <td>Eletronegatividade</td>
                    <td>1,2</td>
                  </tr>
                </tbody>
              </table>
    </div>

  </div>
  )
}