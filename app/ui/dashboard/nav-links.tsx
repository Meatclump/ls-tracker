'use client'

import { faCloud, faDove, faFireFlameCurved, faFireFlameSimple, faFish, faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
	{ name: "Home", href: "/dashboard", icon: <FontAwesomeIcon icon={faHouse} /> },
	{ name: "Dynamis", href: "/dashboard/dynamis", icon: <FontAwesomeIcon  icon={faFireFlameCurved}/> },
	{ name: "Limbus", href: "/dashboard/limbus", icon: <FontAwesomeIcon icon={faFireFlameSimple} />, disabled: true },
	{ name: "Sea", href: "/dashboard/sea", icon: <FontAwesomeIcon icon={faFish} />, disabled: true },
	{ name: "Sky", href: "/dashboard/sky", icon: <FontAwesomeIcon icon={faDove} />, disabled: true },
]

export default function NavLinks() {
	const pathname = usePathname()

	return (
		<>
			{
				links.map((link) => {
					if (link.disabled) {
						return (
							<button
								type="button"
								key={link.name}
								disabled={true}
								className="flex md:flex-none items-center h-[48px] grow gap-2 font-medium bg-zinc-800/35 text-neutral-100/35 rounded-md p-3 text-sm text-start"
							>
								{link.icon}
								<p>{link.name}</p>
							</button>
						)
					} else {
						return (
							<Link
								key={link.name}
								href={link.href}
								className={`${pathname === link.href ? 'bg-amber-500 text-amber-950' : 'bg-zinc-800 text-neutral-300'} flex items-center h-[48px] text-start gap-2 font-medium rounded-md p-3 text-sm hover:bg-amber-500 hover:text-amber-950`}
							>
								{link.icon}
								<p>{link.name}</p>
							</Link>
						)
					}
				})
			}
		</>
	)
}
