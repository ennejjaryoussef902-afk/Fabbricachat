"use client";
export const dynamic = "force-dynamic";

import React from "react";
import dynamicImport from "next/dynamic";

// Carichiamo AuthForm solo sul client, disabilitando il caricamento sul server
const AuthForm = dynamicImport(() => import("@/components/AuthForm"), {
	ssr: false,
	loading: () => <p>Caricamento...</p>,
});

export default function Home(): React.JSX.Element {
	return (
		<main>
			<AuthForm />
		</main>
	);
}
