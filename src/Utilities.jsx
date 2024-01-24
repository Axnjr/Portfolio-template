export function FancyHeadingMover() {
	var lastScrollTop = 0;
	window.addEventListener("scroll", () => {
		if (window.scrollY > 300) {
			document.querySelector("nav").style.transform = "translateY(0vw)"
		}
		if (window.scrollY < 300) {
			document.querySelector("nav").style.transform = "translateY(-35vw)"
		}
		var st = window.pageYOffset || document.documentElement.scrollTop;
		if (st > lastScrollTop) {
			document.querySelectorAll(".fancy-h1").forEach((item) => {
				item.style.marginInline = "-" + window.scrollY / 5 + "px"
			})
		}
		else if (st < lastScrollTop) {
			document.querySelectorAll(".fancy-h1").forEach((item) => {
				item.style.marginInline = (window.scrollY / 100) + 5 + "px"
			})
		}
		lastScrollTop = st <= 0 ? 0 : st;
	})
}

export function MenuAppear() {
	document.querySelector(".menu").style.transform = "translateY(0vw)"
}

export function MenuClose() {
	document.querySelector(".menu").style.transform = "translateY(-300vw)"
}

export function SubElements(props) {
	return (
		<>
			{
				props.text.split("").map((val, id) => {
					return <props.element key={id} className={props.class_of_element} >{val}</props.element>
				})
			}
		</>
	)
}