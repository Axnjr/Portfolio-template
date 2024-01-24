import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import AbtWork from './Abt&Work';
import Loader from './Loader';
import Menu from './Menu';
import SmoothScroll from './Smooth';
import { portfolioConfig } from "./config.js"
import { MenuAppear, FancyHeadingMover, SubElements } from "./Utilities.jsx"

export default function Home() {

	const main = useRef(null)
	const [bg, setBg] = useState("black");
	const [col, setCol] = useState("white");
	const [switchClicked, setSwitchClicked] = useState(0);

	FancyHeadingMover()

	useEffect(() => {
		document.body.style.backgroundColor = bg;
		document.body.style.color = col;
		gsap.context(() => {
			gsap.to(".line", {
				width: "100vw",
				duration: "1",
				delay: "4"
			})
			gsap.to(".fancy-character", {
				y: "-50vw",
				duration: 0.5,
				stagger: .05,
				delay: "4.2"
			})
			gsap.to("main div p", {
				opacity: 1,
				duration: 0.8,
				stagger: 0.05,
				delay: 4.5
			})
		}, main)
	}, [bg, col])

	let bgArray = portfolioConfig.yourColorSchema ?? [
		["white", "black"],
		["red", "white"],
		["#FFFF33", "black"],
		["#fd900f", "black"],
		["#ccfe01", "black"],
		["yellow", "blue"],
		["blue", "yellow"],
		["black", "white"],
	];

	function HandleSwitch() {
		setBg(x => x = bgArray[switchClicked][0]);
		setCol(x => x = bgArray[switchClicked][1]);
		if (switchClicked < bgArray.length - 1) setSwitchClicked(sw => sw + 1);
		if (switchClicked === bgArray.length - 1) setSwitchClicked(sw => sw = 0);
	}

	return (
		<>
			<Loader />
			<div className='WRAPPER'>
				<nav style={{ backgroundColor: bg }}>
					<a href='#'><h1>{portfolioConfig.name}</h1></a>
					<div className='nav-list'>
						<p onClick={HandleSwitch}>Modes</p>
						{
							portfolioConfig.links.map((link,id) => {
								return <p key={id}><a href={link.href}>{link.name}</a></p>
							})
						}
					</div>
					<div className='hamburger-menu-button'>
						<section style={{ display: "block" }} onClick={MenuAppear}>
							<div></div>
							<div></div>
							<div></div>
						</section>
						<p style={{ fontSize: "1.3rem" }} onClick={HandleSwitch}>MODES</p>
					</div>
				</nav>
				<Menu bg={bg} col={col} handleSwitch={HandleSwitch} />
				<SmoothScroll>
					<main style={{ backgroundColor: bg, color: col }} ref={main} id="hi">
						<div className='fancy-content-wrapper'>
							<div>
								<h1 className='fancy-h1'>
									<SubElements text={portfolioConfig.title[0]} element="span" class_of_element="fancy-character" />
								</h1>
								<p onClick={HandleSwitch}>Modes</p>
							</div>
							<div className='line'></div>
							<div>
								<a><p>Keep</p></a>
								<h1 className='fancy-h1'>
									<SubElements text={portfolioConfig.title[1]} element="span" class_of_element="fancy-character" />
								</h1>
							</div>
							<div className='line'></div>
							<div>
								<h1 className='fancy-h1'>
									<SubElements text={portfolioConfig.title[2]} element="span" class_of_element="fancy-character" />
								</h1>
								<a><p>Scrolling</p></a>
							</div>
							<div className='line'></div>
							<div>
								<a><p>©2024</p></a>
								<h1 className='fancy-h1'>
									<SubElements text={portfolioConfig.title[3]} element="span" class_of_element="fancy-character" />
								</h1>
							</div>
							<div className='line'></div>
						</div>
					</main>
					<AbtWork bg={col} col={bg} />
				</SmoothScroll>
			</div>
		</>
	)
}