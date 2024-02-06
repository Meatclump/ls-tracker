'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
	{ name: "Home", href: "/dashboard" },
	{ name: "Dynamis", href: "/dashboard/dynamis" },
	{ name: "Limbus", href: "/dashboard/limbus", disabled: true },
	{ name: "Sea", href: "/dashboard/sea", disabled: true },
	{ name: "Sky", href: "/dashboard/sky", disabled: true },
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
								className="md:flex-none h-[48px] w-full grow gap-2 font-medium bg-zinc-800/35 text-neutral-100/35 rounded-md p-3 text-sm text-start"
							>
								{link.name}
							</button>
						)
					} else {
						return (
							<Link
								key={link.name}
								href={link.href}
								className={`${pathname === link.href ? 'bg-amber-500 text-amber-950' : 'bg-zinc-800 text-neutral-300'} md:flex-none h-[48px] w-full grow gap-2 font-medium rounded-md p-3 text-sm hover:bg-amber-500 hover:text-amber-950`}
							>
								<p className="">{link.name}</p>
							</Link>
						)
					}
				})
			}
		</>
	)
}
