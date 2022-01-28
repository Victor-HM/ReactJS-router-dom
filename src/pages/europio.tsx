import europio from "../images/europio.jpg"
import europioatomo from "../images/europioatomo.jpg"
import tbEuropio from "../images/tbEurópio.jpg"
import { Link } from "react-router-dom"

export function Europio() {
  return (
    <div className="container">
			<div className="tophome">
				<div className="logotipo">
					<h2><Link to="/" className="home">QUIMICA</Link></h2>		
				</div>
			</div>

      <div className="container-center">

			<div className="nome">
				<h3>EURÓPIO</h3>
			</div>
			<img className="imgatomo" src={europio} />
			<div className="usado">
				<h4>No que é usado?</h4>
				<li>Usado em cédulas bancárias da região do Euro; brilha sob a luz UV e pode servir na identificação de falsificações;</li>
				<li>Agende dopante de plástico para lasers;</li>
				<li> Lâmpadas de baixo consumo recebem uma pequena quantidade de európio para gerar uma luz mais natural; em um balanço das cores azul e vermelha;</li>
				<li>  Na fabricação de ligas supercondutoras;</li>
				<li>É um excelente absorvedor de nêutrons; sendo esta uma característica para barras de controle em reatores nucleares;</li>
				<li> Óxido de európio (Eu2O3) tem aplicação em aparelhos de TV;</li>
				<li> Na fabricação de vidros fluorescentes;</li>

			</div>

      <div className="rodapemap">
      </div>
      
			<div className="div">
				<p>No ano de 1890 com o cientista Paul-Émile Lecoq de Boisbaudran, ao analisar uma amostra composta por samário e gadolínio, observou um espectro diferente, o que levou Eugène-Anatole Demarçay a pesquisar a origem do espectro, descobrir.</p>
				<p>O európio recebeu este nome em homenagem ao continente europeu, até bem recentemente o európio ainda não tinha sido isolado em sua forma pura em virtude da dificuldade de separação do metal.</p>
			</div>

			<div className="rary">
				<img className="imgatomo" src={europioatomo} />
			</div>
				<img className="tbElemento" src={tbEuropio} />

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
                    <td>Eu</td>
                  </tr>

                  <tr>
                    <td>Número Atômico</td>
                    <td>63</td>
                  </tr>

                  <tr>
                    <td>Massa Atomica</td>
                    <td>140,1 u</td>
                  </tr>

                  <tr>
                    <td>Ponto de Fusão</td>
                    <td>826°C</td>
                  </tr>

                  <tr>
                    <td>Densidade</td>
                    <td>5264 kg/m3</td>
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