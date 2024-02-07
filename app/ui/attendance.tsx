import { getAttendants } from "../lib/data"
import AttendantRow from "./attendantRow"

export default async function Attendance() {
	const items = await getAttendants()
	return (
		<div className="flex flex-col gap-3">
			<h2 className="border-b-white border-b">
				Participants
			</h2>
			<table className="bg-slate-500 rounded-md text-sm">
				<thead>
					<tr>
						<th className="px-2 text-start">Name</th>
						<th className="px-2 text-center">Partial</th>
						<th className="px-2 text-start">From</th>
						<th className="px-2 text-start">To</th>
						<th className="px-2 text-center">Paid</th>
					</tr>
				</thead>
				<tbody>
					{
						items &&
						items.attendants.map(attendant =>
							<AttendantRow key={attendant.name} attendant={attendant} />
						)
					}
				</tbody>
			</table>
		</div>
	)
}