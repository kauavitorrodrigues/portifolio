import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans, JetBrains_Mono } from "next/font/google"

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["100","200","300","400","500","600","700","800"],
	variable: "--font-jetbrains-mono"
})

export const metadata: Metadata = {
  title: "Kauã Vitor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br" suppressHydrationWarning >
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable, jetbrainsMono.variable
				)}
			>	<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>{children}</ThemeProvider>
			</body>
		</html>
	);
}