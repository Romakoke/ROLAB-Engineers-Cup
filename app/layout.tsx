import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"ROLAB Engineers’ Cup 2026 | Shymkent",description:"International engineering olympiad. October 17, 2026, Shymkent."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="kk"><body>{children}</body></html>}
