import "../style/element.css"

import praseodimio from "../images/praseodimio.jpg"
import praseodimioatomo from "../images/praseodimioatomo.jpg"
import tbPraseodimio from "../images/tbPraseodímio.jpg"

import { Link } from 'react-router-dom'

export function Praseodimio() {
  return (
    <div className="container">
			<div className="tophome">
				<div className="logotipo">
					<h2><Link to="/" className="home">QUIMICA</Link></h2>		
				</div>
			</div>
      <div className="container-center">
          <div className="nome">
            <h3>PRASEODÍMIO</h3>
          </div>
          <img className="imgatomo" src={praseodimio} />
          <div className="usado">
            <h4>No que é usado?</h4>
            <li>Os sais de praseodímio são usados para dar cores em esmaltes, cerâmicas e vidros, vidros costumam ter um tom amarelado neste caso;</li>
            <li>Em vidros usados para óculos de soldagem;</li>
            <li> Em pedras de isqueiro; em uma proporção em torno de 5%;</li>
            <li> Em lâmpadas de arco voltaico; com interesse na projeção cinematográfica;</li>
            <li> Em ligas com magnésio forma um material com dureza adequada para motores de aeronaves;</li>
            <li> Em ligas usadas em imãs permanentes;</li>
            <li> Em ligas com níquel é usado em processos de obtenção de temperaturas extremamente baixas em laboratório;</li>
            <li> Óxido de praseodímio tem uso em misturas usadas como catalisadores.</li>

          </div>
          <div className="rodapemap">
            </div>
          <div className="div">
            <p>O processo de descoberta do praseodímio foi iniciado com Monsander quando este extraiu o didímio da lantania. Porém Cleve após suas pesquisas constatou que na verdade o didimio se tratava de 2 elementos: neodímio e praseodímio, e somente no ano de 1885 o químico austríaco Carl Auer von Welsbach, após observar que os sais dos dois elementos apresentavam cores diferentes descobriu o praseodímio e evidentemente o neodímio.</p>
          </div>

          <div className="rary">
            <img className="imgatomo" src={praseodimioatomo} />
          </div>
            <img className="tbElemento" src={tbPraseodimio} />
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
                    <td>59</td>
                  </tr>

                  <tr>
                    <td>Massa Atomica</td>
                    <td>140,93765(2) u</td>
                  </tr>

                  <tr>
                    <td>Ponto de Fusão</td>
                    <td>930,85°C</td>
                  </tr>

                  <tr>
                    <td>Densidade</td>
                    <td>6 640 kg/m3,</td>
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