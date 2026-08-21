import type { Metadata } from "next";
import "./globals.css";
import "./modal.css";

const siteUrl = "https://side-b-listening-bar.melnichenkomariia.chatgpt.site";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SIDE B — вініловий бар у Києві",
  description: "SIDE B — вініловий бар і крамниця платівок у Києві. Авторські коктейлі, живі сети, квитки, сертифікати та бронювання столів.",
  keywords: ["вініловий бар Київ", "listening bar Київ", "магазин платівок Київ", "джаз бар Київ", "SIDE B"],
  alternates: { canonical: "/" },
  openGraph: { title: "SIDE B — музика, яку не ставлять на фон", description: "Вінілові сети, авторські коктейлі та 42 місця для тих, хто справді слухає.", url: siteUrl, siteName: "SIDE B", locale: "uk_UA", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "SIDE B — музика, яку не ставлять на фон" }] },
  twitter: { card: "summary_large_image", title: "SIDE B — вініловий бар", description: "Музика, яку не ставлять на фон.", images: ["/og.png"] },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" },
};

const schema = { "@context":"https://schema.org", "@type":"BarOrPub", name:"SIDE B", description:"Вініловий бар і крамниця платівок у Києві", url:siteUrl, image:`${siteUrl}/og.png`, email:"hello@sideb.bar", priceRange:"₴₴", address:{"@type":"PostalAddress",streetAddress:"вул. Рейтарська, 18",addressLocality:"Київ",addressCountry:"UA"}, openingHours:["Tu-Th 18:00-00:00","Fr-Su 18:00-02:00"] };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="uk"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>}
