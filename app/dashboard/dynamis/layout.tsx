import { getRuns } from "@/app/lib/data";
import Attendance from "@/app/ui/attendance";
import RunTime from "@/app/ui/runTime";

export default async function Layout({ children }: { children: React.ReactNode }) {
	const runsData = await getRuns()
	return (
		<main className="w-full h-full flex gap-[2px]">
			<div className="w-full md:w-[600px] bg-stone-700 rounded-md rounded-tr-none rounded-br-none p-3 h-full">
				<RunTime runs={runsData.runs} />
				<Attendance />
			</div>
			<div className="w-full md:w-full bg-stone-700 rounded-md rounded-tl-none rounded-bl-none p-3">
				{children}
			</div>
		</main>
	)
}