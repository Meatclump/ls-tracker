import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex h-screen flex-col md:flex-row md:overflow-hidden p-1 bg-gray-300 dark:bg-stone-950 gap-1">
			<div className="w-full flex-none md:w-56 bg-gray-100 dark:bg-stone-600 rounded-md">
				<SideNav />
			</div>
			<div className="flex-grow h-full md:overflow-y-auto">
				<div className="w-full h-full rounded-md">
					{children}
				</div>
			</div>
		</main>
	)
}