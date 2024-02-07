'use client'

import { useState } from "react"

interface attendant {
	name: string
}

export default function AttendantRow({attendant}: {attendant: attendant}) {
	const [partialRun, setPartialRun] = useState(false)
	return (
		<tr>
			<td className="p-2">
				{attendant.name}
			</td>
			<td className="py-1 text-center">
				<input
					type="checkbox"
					className="w-5 h-5 border-none rounded text-lime-600 bg-stone-700"
					onChange={() => setPartialRun(prev => !prev)}
					checked={partialRun}
				/>
			</td>
			<td className="py-1">
				<input
					disabled={!partialRun}
					type="time"
					className="rounded-md px-2 py-[2px] bg-slate-400 disabled:bg-slate-400/40 disabled:text-white/40 text-sm"
				/>
			</td>
			<td className="py-1">
				<input
					disabled={!partialRun}
					type="time"
					className="rounded-md px-2 py-[2px] bg-slate-400 disabled:bg-slate-400/40 disabled:text-white/40 text-sm"
				/>
			</td>
			<td className="py-1 text-center">
				<input
					type="checkbox"
					className="w-5 h-5 border-none rounded text-lime-600 bg-stone-700 checked:bg-stone-400"
				/>
			</td>
		</tr>
	)
}