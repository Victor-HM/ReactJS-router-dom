import "../style/element.css"

import cerio from "../images/cerio.jpg"
import cerioatomo from "../images/cerioatomo.png"
import tbCerio from "../images/tbCério.jpg"
import { Link } from "react-router-dom"

export function Cerio() {
  return (
    <div className="container">
			<div className="tophome">
				<div className="logotipo">
					<h2><Link to="/" className="home">Quimica</Link></h2>		
				</div>
			</div>
      <div className="container-center">

			<div className="nome">
				<h3>CÉRIO</h3>
			</div>
			<img className="imgatomo" src={cerioatomo} />
			<div className="usado">
				<h4>No que é usado?</h4>
				<li>Na fabricação de TVs;</li>
				<li>Na manufatura de vidros;</li>
				<li>Em pedras de isqueiro;</li>
				<li> Atua como um catalisador em fornos autolimpantes;</li>
				<li> Sulfato de cério é usado como agente oxidante;</li>
				<li> O óxido é usado como agente de polimento;</li>
				<li> A fotoestabilidade de pigmentos pode ser aprimorada pela adição de cério;</li>
				<li> O sulfeto de cério é uma alternativa ao pigmento tóxico sulfeto de cádmio.</li>

			</div>
			<div className="div">
				<p>O cério foi descoberto na Suécia por Jöns Jacob Berzelius, Martin Heinrich Klaproth e Carl Gustaf Mosander.</p>
				<p>O cério foi assim nomeado por Berzelius em homenagem ao asteróide Ceres descoberto dois anos antes (1801).</p>
        <p>O metal foi isolado em 1875 por Norton e Hillebrand.</p>
			</div>

			<div className="rary">
				<img className="imgatomo" src={cerioatomo} />
			</div>
			<div className="tb">
				<img className="tbElemento" src={tbCerio} />
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
								<td>Ce</td>
							</tr>

							<tr>
								<td>Número Atômico</td>
								<td>58</td>
							</tr>

							<tr>
								<td>Massa Atomica</td>
								<td>140,1 u</td>
							</tr>

							<tr>
								<td></td>
								<td></td>
							</tr>

							<tr>
								<td>Ponto de Fusão</td>
								<td>798ºC</td>
							</tr>

							<tr>
								<td>Densidade</td>
								<td>6,77g/cm3</td>
							</tr>

							<tr>
								<td>Eletronegatividade</td>
								<td>1,12</td>
							</tr>
						</tbody>
					</table>
				</div>

			
			</div>
  )
}