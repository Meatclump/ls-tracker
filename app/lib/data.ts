export async function getAttendants() {
	return {
		attendants: [
			{
				name: "bob"
			},
			{
				name: "jim"
			},
			{
				name: "tom"
			}
		]
	}
}

export async function getRuns() {
	return {
		runs: [
			new Date("December 17, 1995 03:24:00"),
			new Date("December 21, 1995 01:42:30"),
		]
	}
}