"use client";

import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import React from "react";
import { RecoilRoot } from "recoil";
import ActiveStatus from "@/components/ActiveContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
	return (
		<html lang="en">
			<head>
				{/* Codice di verifica Google Search Console */}
				<meta name="google-site-verification" content="eF9DTmRQ4OsHemaWs20G1oZ77FuWMoIfhTTczYWiDHY" />
			</head>
			<body className={`${inter.className}`}>
				<SessionProvider>
					<RecoilRoot>
						<ThemeProvider attribute="class">
							<ActiveStatus />
							{children}
						</ThemeProvider>
					</RecoilRoot>
				</SessionProvider>
			</body>
		</html>
	);
}