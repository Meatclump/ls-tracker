
import { useEffect } from "react"
import { getAttendants } from "../lib/data"


export default async function Attendance() {
	const items = await getAttendants()
	return (
		<div>
			<h2>
				Participants
			</h2>
			<ul>
			{
				items &&
				items.attendants.map(attendant => {

					return (
						<li>{attendant.name}</li>
					)
				})
			}
			</ul>
		</div>
	)
}