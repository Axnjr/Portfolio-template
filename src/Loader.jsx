import { SubElements } from './Utilities.jsx';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { portfolioConfig } from "./config.js"

export default function Loader() {

	const load = useRef(null)
	useEffect(() => {
		gsap.context(() => {
			gsap.to(".fancy-character-loader", {
				y: "0vw",
				duration: 0.5,
				stagger: .05,
				delay: 0.5
			})
			gsap.to(".loader", {
				opacity: 0,
				delay: 3.5,
				duration: 1.5
			})
			gsap.to(".loader", {
				display: "none"
				, delay: 4
			})
		}, load)
	}, [])

	return (
		<div ref={load}>
			<div className="loader">
				<h1>
					{
						portfolioConfig.welcomeMessage.split(" ").map((val, id) => {
							return <span key={id} className={"fancy-character-loader"} >{val}&nbsp;</span>
						})
					}
				</h1>
			</div>
		</div>
	)
}