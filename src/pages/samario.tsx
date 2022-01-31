import "../style/element.css"

import samario from "../images/samario.jpg"
import samarioatomo from "../images/samarioatomo.jpg"
import tbSamario from "../images/tbSamário.jpg"

export function Samario() {
  return (
    <div className="container">
      <div className="container-center">

			<div className="nome">
				<h3>SAMÁRIO</h3>
			</div>
			<img className="imgatomo" src={samario}/>
			<div className="usado">
				<h4>No que é usado?</h4>
				<li>Na produção de imãs poderosos de samário-cobalto;</li>
				<li>Na dopagem de cristais usados em lasers;</li>
				<li>O óxido de samário tem aplicação na hidrogenação e deshidrogenação do etanol;</li>
				<li> Em cerâmicas e vidros para absorção de infravermelho;</li>
				<li> Como absorvedor de nêutrons em reatores nucleares;</li>
				<li> Em lâmpadas de arco voltaico;</li>
				<li> Como um possível catalisador na decomposição de plásticos;</li>
				<li> Compostos de samário tem aplicação laboratorial em síntese orgânica.</li>

			</div>
			<div className="rodapemap">
				</div>
			<div className="div">
				<p>Foi descoberto no ano de 1879 pelo químico francês Paul-Émile Lecoq de Boisbaudran, que isolou o metal do mineral samarsquita ((Y,CE,U,Fe)3(Nb,Ta,Ti)5O16), após ter sido observado  através de espectroscopia pelo químico suíço, Marignac no didimio. Recebeu este nome em homenagem ao coronel russo Samarsk.</p>
			</div>

			<div className="rary">
				<img className="imgatomo" src={samarioatomo} />
			</div>
				<img className="tbElemento" src={tbSamario} />
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
                    <td>Sm</td>
                  </tr>

                  <tr>
                    <td>Número Atômico</td>
                    <td>62</td>
                  </tr>

                  <tr>
                    <td>Massa Atomica</td>
                    <td>140,1 u</td>
                  </tr>

                  <tr>
                    <td>Ponto de Fusão</td>
                    <td>1.074°C</td>
                  </tr>

                  <tr>
                    <td>Densidade</td>
                    <td>7353 kg/m3</td>
                  </tr>

                  <tr>
                    <td>Eletronegatividade</td>
                    <td>1,17</td>
                  </tr>
                </tbody>
              </table>
      </div>
		</div>

  )
}