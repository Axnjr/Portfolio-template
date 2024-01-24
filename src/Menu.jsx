import { MenuClose } from "./Utilities.jsx"
import { portfolioConfig } from "./config.js"

export default function Menu({ bg, col, handleSwitch }) {
	return (
		<div className="menu" style={{ backgroundColor: col, color: bg }} >
			<div className='nav-list-menu'>
				<p onClick={MenuClose}>
					<svg onClick={MenuClose} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</p>
				<p onClick={handleSwitch}>Modes</p>
				{
					portfolioConfig.links.map((link, id) => {
						return <p key={id}><a href={link.href}>{link.name}</a></p>
					})
				}
			</div>
		</div>
	)
}
