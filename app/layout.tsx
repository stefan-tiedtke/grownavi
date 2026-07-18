import type {Metadata,Viewport} from "next";
import "./globals.css";
import {Footer,Header,LegalGate} from "@/components/site-shell";

export const metadata:Metadata={metadataBase:new URL("https://www.grownavi.de"),title:{default:"GROWNAVI – Vom Samen bis zur Ernte",template:"%s | GROWNAVI"},description:"Verständliche Begleitung und lokale Werkzeuge für verantwortungsvollen, legalen privaten Cannabis-Eigenanbau.",openGraph:{type:"website",locale:"de_DE",siteName:"GROWNAVI",title:"GROWNAVI – Vom Samen bis zur Ernte",description:"Wissen, Planung und Tagebuch für legalen privaten Eigenanbau."}};
export const viewport:Viewport={themeColor:"#173f35",colorScheme:"light"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="de"><body><Header/><main id="hauptinhalt">{children}</main><Footer/><LegalGate/></body></html>}
