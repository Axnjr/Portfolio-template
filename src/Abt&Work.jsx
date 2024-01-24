import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { useInView } from "react-intersection-observer";
import { SubElements } from "./Utilities.jsx";
import Works from "./Works";
import Footer from "./Footer";
import { portfolioConfig } from "./config.js";

export default function AbtWork({bg,col}) {

	const about = useRef(null);
	const about2 = useRef(null);
	const {ref:abt,inView:abtIV} = useInView()
	const {ref:abt2,inView:abt2IV} = useInView()

	useEffect(() => {
		gsap.context(() => {
			if(abtIV){
				gsap.to(".fancy-character-abt",{
					opacity:1,
					delay:0.25,
					stagger:0.01,
				})
				gsap.to(".vertical-line",{
					height:"100%",
					backgroundColor:bg,
					delay:0.5,
				})
			}
		} , about )
		gsap.context(() => {
			if(abt2IV){
				gsap.to(".horizontal-line",{
					width:"100%",
					duration:1,
					backgroundColor:bg
				})
				gsap.to(".flowing-tech-stack h1",{
					opacity:1,
					duration:2,
					delay:0.5
				})
				gsap.to(".fancy-character-abt2",{
					opacity:1,
					delay:0.5,
					// duration:0.01,
					stagger:0.01
				})
			}
		} , about2 )
	})

	console.log(portfolioConfig.skills.split(" ").join("&nbsp;"))

  return (
    <>
		{/* <div id="abtCursor">Listen</div> */}
        <div>
			<div ref={about} className='self-flex' id="abt">
				<section style={{borderLeft:"none"}}></section>
				<div className="vertical-line"></div>
				<section></section>
				<div className="vertical-line"></div>
				<section style={{borderLeft:"none"}}></section>
				<div className="vertical-line"></div>
				<section></section>
				<div className="vertical-line"></div>
				<h1 ref={abt}>
					<SubElements text={portfolioConfig.showcaseBreif} element="span" class_of_element="fancy-character-abt" />
				</h1>
			</div>
		</div>

       	<div ref={about2} className="bit-abt-me-wrapper">
			<div className="horizontal-line"></div>
	   		<section className="flowing-tech-stack">
				<h1>{portfolioConfig.skills.split(" ").join(" | ")} | </h1>
				<h1>{portfolioConfig.skills.split(" ").join(" | ")}</h1>
				<h1>{portfolioConfig.skills.split(" ").join(" | ")}</h1>
				<h1>{portfolioConfig.skills.split(" ").join(" | ")}</h1>
				{/* <h1>&nbsp; React &nbsp;|&nbsp; React-native &nbsp;|&nbsp; Next &nbsp;|&nbsp; TypeScript &nbsp;|&nbsp; nodeJs &nbsp;|&nbsp; express &nbsp;|&nbsp; Css &nbsp;|&nbsp; Gsap &nbsp;|&nbsp; Python &nbsp;|</h1>
				<h1>&nbsp; React &nbsp;|&nbsp; React-native &nbsp;|&nbsp; Next &nbsp;|&nbsp; TypeScript &nbsp;|&nbsp; nodeJs &nbsp;|&nbsp; express &nbsp;|&nbsp; Css &nbsp;|&nbsp; Gsap &nbsp;|&nbsp; Python &nbsp;|</h1>
				<h1>&nbsp; React &nbsp;|&nbsp; React-native &nbsp;|&nbsp; Next &nbsp;|&nbsp; TypeScript &nbsp;|&nbsp; nodeJs &nbsp;|&nbsp; express &nbsp;|&nbsp; Css &nbsp;|&nbsp; Gsap &nbsp;|&nbsp; Python &nbsp;|</h1>
				<h1>&nbsp; React &nbsp;|&nbsp; React-native &nbsp;|&nbsp; Next &nbsp;|&nbsp; TypeScript &nbsp;|&nbsp; nodeJs &nbsp;|&nbsp; express &nbsp;|&nbsp; Css &nbsp;|&nbsp; Gsap &nbsp;|&nbsp; Python &nbsp;|</h1> */}
			</section>
			<div className="horizontal-line"></div>
			<div className="bit-abt-me" ref={abt2}>
				<h1>
					<SubElements text={portfolioConfig.aboutYou1} element="span" class_of_element="fancy-character-abt2" />
				</h1>
				<h1>
					<SubElements text={portfolioConfig.aboutYou2} element="span" class_of_element="fancy-character-abt2" />
				</h1>
			</div>
	   	</div>
	   	<Works bg={bg} col={col}/>
		<Footer/>
    </>
  )
}