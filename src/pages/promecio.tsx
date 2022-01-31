import "../style/element.css"

import promecio from "../images/promecio.jpg"
import promecioatomo from "../images/promecioatomo.jpg"
import tbPromecio from "../images/tbPromécio.jpg"

export function Promecio() {
  return (
    <div className="container">
      <div className="container-center">

        <div className="nome">
          <h3>PROMÉCIO</h3>
        </div>
        <img className="imgatomo" src={promecio} />
        <div className="usado">
          <h4>No que é usado?</h4>
          <li>Em alguns tipos específicos de baterias atômicas; que podem ter aplicação em marca passo, mísseis e equipamentos de rádio;</li>
          <li> Emissão de luz em tintas especiais por efeito de decaimento radioativo;</li>
          <li>Como fonte de raios-x e radioatividade em equipamentos de medida;</li>
          <li> Possível fonte de calor para geração de energia em sondas de espaço profundo;</li>
          <li> Avaliação de espessura de materiais pela medição da passagem de radiação;</li>

        </div>
        <div className="rodapemap">
          </div>
        <div className="div">
          <p>A descoberta do promécio iniciou-se no ano de 1902 quando Branner suspeitou da existência de um elemento intermediário entre o neodímio e o samário.</p>
          <p>No Ano de 1945, os cientistas Marinsky, Glendenin, Coryell confirmaram a existência do elemento com a obtenção  através de  bombardeio do urânio com nêutrons de neodímio identificando-o por cromatografia de troca iônica.</p>
        </div>

        <div className="rary">
          <img className="imgatomo" src={promecioatomo} />
        </div>
          <img className="tbElemento" src={tbPromecio} />
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
                      <td>Ce</td>
                    </tr>

                    <tr>
                      <td>Número Atômico</td>
                      <td>61</td>
                    </tr>

                    <tr>
                      <td>Massa Atomica</td>
                      <td>145 u</td>
                    </tr>

                    <tr>
                      <td>Ponto de Fusão</td>
                      <td>1.042°C</td>
                    </tr>

                    <tr>
                      <td>Densidade</td>
                      <td>7 264 kg/m3,</td>
                    </tr>

                    <tr>
                      <td>Eletronegatividade</td>
                      <td>1,13</td>
                    </tr>
                  </tbody>
                </table>
        </div>
      </div>
  )
}