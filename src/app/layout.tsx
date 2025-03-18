import type { Metadata } from "next";
import "./globals.css";
import { Sider } from "./components/Sider/page";
import { Search } from "./components/search/page";
import { Player } from "./components/Player/page";


export const metadata: Metadata = {
  title: "Music is Life",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="bg-gray_bg">
        <div className="container mx-auto">
          <div className="flex items-start">
            <div className="w-[280px] ">
              <Sider/>
            </div>
            <div className="flex-1 pl-[20px]">
              <Search/>
              {children}
            </div>
          </div>
        </div>
        <div className="bg-dark_bg fixed bottom-0 w-[100%] py-[22px]">
          <Player/>
        </div>
      </body>
    </html>
  );
}
