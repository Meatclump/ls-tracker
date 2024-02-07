import Attendance from "@/app/ui/attendance";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="w-full h-full flex gap-[2px]">
			<div className="w-full md:w-[300px] bg-stone-700 rounded-md rounded-tr-none rounded-br-none p-3 h-full">
				<Attendance />
			</div>
			<div className="w-full md:w-full bg-stone-700 rounded-md rounded-tl-none rounded-bl-none p-3">
				{children}
			</div>
		</main>
	)
}