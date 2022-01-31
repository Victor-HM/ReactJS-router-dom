import "../style/style.css"

import cerio from "../images/cerio.jpg"
import cerioatomo from "../images/cerioatomo.png"
import europio from "../images/europio.jpg"
import europioatomo from "../images/europioatomo.jpg"
import gadolinio from "../images/gadolinio.jpg"
import gadolinioatomo from "../images/gadolinioatomo.jpg"
import neodimio from "../images/neodimio.jpg"
import neodimioatomo from "../images/neodimioatomo.jpg"
import praseodimio from "../images/praseodimio.jpg"
import praseodimioatomo from "../images/praseodimioatomo.jpg"
import promecio from "../images/promecio.jpg"
import promecioatomo from "../images/promecioatomo.jpg"
import samario from "../images/samario.jpg"
import samarioatomo from "../images/samarioatomo.jpg"

import{ Link } from "react-router-dom"

export function Index() {
  return (
    <div className="containe">
			<div className="container-center">
			
				<div className="elemento">
					<div className="imgelemento">
						<img className="imgatomo" src={cerio} />
					</div>
					<div className="descricao">
            <Link to="/cerio">Cério é um elemento químico do grupo 3 (metais de transição) que pertence ao sexto período da tabela periódica.</Link>
					</div>
				</div>
				<div className="elemento">
					<div className="imgelemento">
						<img className="imgatomo" src={praseodimio} />
					</div>
					<div className="descricao">
						<Link to="/praseodimio">O praseodímio é um elemento metálico prateado, macio pertencente aos lantanídios.</Link>
					</div>
				</div>
				<div className="elemento">
					<div className="imgelemento">
						<img className="imgatomo" src={neodimio} />
					</div>
					<div className="descricao">
						<Link to="/neodimio">O neodímio é um elemento de transição interna localizado na família dos lantanídeos, é um metal que possui propriedades semelhantes a do praseodímio.</Link>
					</div>
				</div>
				<div className="elemento">
					<div className="imgelemento">
						<img className="imgatomo" src={promecio} />
					</div>
					<div className="descricao">
						<Link to="/promecio">O promécio, cujo símbolo químico é Pm, é um elemento químico sólido, metálico, pertencente ao grupo dos metais das terras raras (lantanídeos). </Link>
					</div>
				</div>
				<div className="elemento">
					<div className="imgelemento">
						<img className="imgatomo" src={samario} />
					</div>
					<div className="descricao">
						 <Link to="/samario">O samário é um metal branco prateado que apresenta um brilho característico, é estável quando exposto ao ar da atmosfera é maleável e dúctil e relativamente mole. "</Link>
					</div>
				</div>
				<div className="elemento">
					<div className="imgelemento">
						<img className="imgatomo" src={europio} />
					</div>
					<div className="descricao">
						<Link to="/europio"> O európio recebe esse nome em homenagem ao continente europeu, é um metal de transição interna pertencente a família dos lantanídeos.</Link>
					</div>
				</div>
				<div className="elemento">
					<div className="imgelemento">
						<img className="imgatomo" src={gadolinio} />
					</div>
					<div className="descricao">
						<Link to="/gadolinio">O gadolínio é um metal de transição interna pertencente a família dos lantanídeos. É branco prateado com brilho metálico, é mole e flexível.</Link>
					</div>
				</div>
			<footer>
				<div className="footerName">
					<p>Nicolle Cristina Almeida de Souza </p>
					<p>Thiago Henrique Silva dos Santos</p>
					<p>Victor Hugo Carvalho Moreira dos Santos</p>
				</div>

				<div className="footerCopy">
					©Copyright - 2020 - Todos os Direitos Reservados para curso técnico Desenvolvimentos de Sistemas
				</div>
			</footer>
			</div>
			</div>
  )
}