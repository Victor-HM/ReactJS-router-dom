import "../style/element.css"

import neodimio from "../images/neodimio.jpg"
import neodimioatomo from "../images/neodimioatomo.jpg"
import tbNeodimio from "../images/tbNeodímio.jpg"

export function Neodimio() {
  return(
    <div className="container">
      <div className="container-center">

			<div className="nome">
				<h3>NEODÍMIO</h3>
			</div>
			<img className="imgatomo" src={neodimio} />
			<div className="usado">
				<h4>No que é usado?</h4>
				<li>Em laser, produção de luz coerente – com uso em apontadores e na medicina;</li>
				<li>Sais são usados na produção de esmaltes (não de unha);</li>
				<li> Para calibração de linhas espectrais na astronomia;</li>
				<li> Em liga com ferro e boro na produção de imãs potentes;</li>
				<li> Junto com o praseodímio é usado para a produção do vidro conhecido como didímio;</li>
				<li> Em vidros usados em câmaras de bronzeamento; por permitir a passagem do UV e bloquear a passagem do infravermelho;</li>

			</div>
			<div className="rodapemap">
				</div>
			<div className="div">
				<p>A descoberta do neodímio foi iniciada com Monsander  quando este extraiu o didímio da lantania.</p>
				Porém Cleve após suas pesquisas constatou que na verdade o didimio se tratava de 2 elementos neodímio e praseodímio, <p>Somente no ano de 1885 o austríaco Carl Auer von Welsbach, observou que os sais apresentavam cores diferentes, descobriu o praseodímio e evidentemente o neodímio.</p>
			</div>

			<div className="rary">
				<img className="imgatomo" src={neodimioatomo} />
			</div>
			<div className="tb">
				<img className="tbElemento" src={tbNeodimio} />
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
                    <td>Nd</td>
                  </tr>

                  <tr>
                    <td>Número Atômico</td>
                    <td>60</td>
                  </tr>

                  <tr>
                    <td>Massa Atomica</td>
                    <td>144,242(3) u</td>
                  </tr>

                  <tr>
                    <td>Ponto de Fusão</td>
                    <td>1.021°C</td>
                  </tr>

                  <tr>
                    <td>Densidade</td>
                    <td>6 800 kg/m3,</td>
                  </tr>

                  <tr>
                    <td>Eletronegatividade</td>
                    <td>1,14</td>
                  </tr>
                </tbody>
              </table>
      </div>

		</div>
  )
}