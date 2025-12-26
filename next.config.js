/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
		serverActionsBodySizeLimit: "10mb",
	},
	eslint: {
		// Ignora gli errori di linting (spazi, virgole, import) durante il build
		ignoreDuringBuilds: true,
	},
	typescript: {
		// Ignora gli errori di tipo TypeScript durante il build
		ignoreBuildErrors: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
	reactStrictMode: true,
	// RIMUOVI distDir: "dist" se vuoi che Vercel funzioni correttamente con i settaggi standard
};

module.exports = nextConfig;
