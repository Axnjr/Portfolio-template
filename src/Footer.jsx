import { portfolioConfig } from "./config";

export default function Footer() {
	return (
		<footer id="end">
			<div className="the-end">
				<div className="contact-credits-wrapper">
					<div className="contacts">
						<h2>Contacts</h2>
						{
							portfolioConfig.links.map((link,id) => {
								return <h1 key={id}><a href={link.href}>{link.name}</a></h1>
							})
						}
					</div>
					<div className="credits">
						<h2>Credits</h2>
						<h1>Design Inspiration - <a href="https://maelanlemeur.com/"><h1>MAELAN</h1></a></h1>
						<h1><a href="https://">Template for this at - <h1>GITHUB 🤟</h1></a></h1>
						<h1><a href="https://twitter.com/axnjrno1">Template By - AXN</a></h1>
					</div>
				</div>
				<div className="faq">
					<p>Just say!</p>
					<div id="spin"></div>
				</div>
			</div>
		</footer>
	)
}
