import './App.css';
import { useState, useEffect, useRef } from 'react';
import hackLogo from './Assets/hacktoberfest-logo.png';
import owaspLogo from './Assets/logo-owasp.png';
import MyButton from './Components/button/button.jsx';
import 'animate.css';
import { AiFillDownCircle } from 'react-icons/ai';
import Back from './Components/background/background';
import pc from './Assets/pc.png';
import Repo from './Components/repo-card/repo';
import contribute from './Assets/contribute.png';
import branch from './Assets/branch.png';
import flower from './Assets/flower.png';
import jio from './Assets/sponsors/jio.png';
import git from './Assets/sponsors/Git.png';
import mlh from './Assets/sponsors/MLH.png';
import postman from './Assets/sponsors/Postman.png';
import polygon from './Assets/sponsors/polygon.png';
import redbull from './Assets/sponsors/redbull.png';
import Footer from './Components/footer/footer';

function App() {
	const [binaryStream, setBinaryStream] = useState(
		generateRandomBinaryStream()
	);

	// Function to generate a random binary stream
	function generateRandomBinaryStream() {
		return Array.from({ length: window.innerWidth }, () =>
			Math.random() <= 0.5 ? '0' : '1'
		).join('');
	}

	useEffect(() => {
		const intervalId = setInterval(() => {
			setBinaryStream(generateRandomBinaryStream());
		}, 150);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	const ref = useRef(null);

	const handleClick = () => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};

	const jiostyle = {
		position: 'relative',
		padding: '0rem',
	};
	return (
		<>
			{/* <Back /> */}
			<section className="hero">
				{/* <div className='binStream'>
        {binaryStream}
      </div> */}

				<div className="logos">
					<img src={hackLogo} alt="Hacktoberfest logo" />
					<div className="multiply animate__animated animate__rotateIn">
						{' '}
						✖{' '}
					</div>
					<img src={owaspLogo} alt="OWASP logo" />
				</div>
				<div className="recruit">
					<a href="/" class="discoButton">
						<span>
							Register for
							<br />
							Recruitments!
						</span>
					</a>
				</div>
				<div className="scroll" onClick={handleClick}>
					<AiFillDownCircle />
				</div>
			</section>
			<section className="about" ref={ref}>
				<div className="about-box">
					<div className="head">
						<h3 className="about-heading">About Hacktoberfest</h3>
					</div>
					<MyButton>
						<p className="about-content">
							Hacktoberfest'23 marks the 10th edition of Hacktoberfest,
							organized by DigitalOcean, a month-long celebration of open-source
							coding and software Team OWASP provides five open source projects
							to which you can display and contribute - Web-Dev Tasks, Tech
							Think Tank, Algorithm Visualiser, Tab Saver Extension and
							Backend-automation NPM. These projects are widely available for
							contribution by people from various tech stacks. Hack out four
							pristine pull/merge requests and win exciting goodies and swags!
						</p>
					</MyButton>
				</div>
				<a href="/pen/" class="discoButton RegistHacto">
					<span>Register for HacktoberFest</span>
				</a>
			</section>

			<section className="projects">
				<h3 className="about-heading openSrc">Our Open Source Projects</h3>
				<div className="repos">
					<Repo src={branch} alt="repo1" title="lorem ipsum" link="/">
						this web-app is aimed at frontend developers who wish to improve
						their skills by practicing coding UI elements like buttons, forms,
						etc., and figuring out the different ways these elements can be
						created by using various libraries and frameworks.
					</Repo>
					<Repo src={contribute} alt="repo1" title="lorem ipsum" link="/">
						this web-app is aimed at frontend developers who wish to improve
						their skills by practicing coding UI elements like buttons, forms,
						etc., and figuring out the different ways these elements can be
						created by using various libraries and frameworks.
					</Repo>
					<Repo src={pc} alt="repo1" title="lorem ipsum" link="/">
						this web-app is aimed at frontend developers who wish to improve
						their skills by practicing coding UI elements like buttons, forms,
						etc., and figuring out the different ways these elements can be
						created by using various libraries and frameworks.
					</Repo>
					<Repo src={flower} alt="repo1" title="lorem ipsum" link="/">
						this web-app is aimed at frontend developers who wish to improve
						their skills by practicing coding UI elements like buttons, forms,
						etc., and figuring out the different ways these elements can be
						created by using various libraries and frameworks.
					</Repo>
				</div>
			</section>

			<section className="sponsors">
				<div className="sponsorsDiv">
					<div className="about-heading">Our Past Sponsors</div>
					<div class="cards">
						<figure class="card2">
							<img src={jio} style={jiostyle}></img>
						</figure>
						<figure class="card2">
							<img src={git} />
						</figure>
						<figure class="card2">
							<img src={mlh} />
						</figure>
						<figure class="card2">
							<img src={postman} />
						</figure>
						<figure class="card2">
							<img src={polygon} />
						</figure>
						<figure class="card2">
							<img src={redbull} />
						</figure>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}

export default App;
