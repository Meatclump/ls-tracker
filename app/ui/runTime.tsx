'use client'

import { useEffect, useRef, useState } from "react"

export default function RunTime({ runs }: { runs: Date[] }) {
	const [runsArray, setRunsArray] = useState(runs)
	const [selectedRun, setSelectedRun] = useState("")

	function handleDeleteRun() {
		console.log("Selected Run:", selectedRun)
		setRunsArray(prevRuns => [
			...prevRuns.filter(run =>
				run.valueOf().toString() !== selectedRun
			)
		])
		setSelectedRun("")
	}

	function addNewRun() {
		setRunsArray([...runsArray, new Date()])
	}

	return (
		<div className="flex flex-col gap-3">
			<h2 className="border-b-white border-b">
				Run Time
			</h2>
			<div className="flex gap-3">
				<select
					className="rounded-md bg-slate-400 grow"
					value={selectedRun}
					onChange={(e) => setSelectedRun(e.target.value)}
				>
					<option className="font-sans" disabled value="">Choose a run</option>
					{
						runsArray.map(run =>
							<option
								key={run.valueOf()}
								className="font-sans"
								value={run.valueOf()}
							>
								{run.toLocaleDateString()} - {run.toLocaleTimeString()}
							</option>
						)
					}
				</select>
				<button
					className="bg-lime-500 rounded-md px-3"
					onClick={addNewRun}
				>
					New
				</button>
				<button
					className="bg-red-500 rounded-md px-3 disabled:bg-red-500/40 disabled:text-white/40"
					disabled={selectedRun === ""}
					onClick={handleDeleteRun}
				>
					Delete
				</button>
			</div>
		</div>
	)
}