// src/app/layout.tsx

export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false, // Impedisce lo zoom accidentale su mobile
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="it">
			<body
				style={{
					margin: 0,
					padding: 0,
					width: "100vw",
					height: "100dvh", // Altezza dinamica per adattarsi alle barre dei browser mobile
					overflow: "hidden", // Blocca lo scroll della pagina intera
					backgroundColor: "#f0f2f5",
				}}>
				{children}
			</body>
		</html>
	);
}
