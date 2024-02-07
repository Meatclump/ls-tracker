'use client'

import { useEffect } from "react"

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<main>
			<h2>Something went wrong!</h2>
			<button
				className="mt-4 rounded-md px-4 py-2 text-sm"
				onClick={
					() => reset()
				}
			>
				Try Again
			</button>
		</main>
	)
}
