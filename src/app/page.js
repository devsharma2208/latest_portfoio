import Header from "@/pages/Header/page";
import MainContent from "@/pages/MainContent/page";
import Image from "@/pages/photo/page";

export default function Home() {
  return (
    <div
      className="sm:min-h-screen h-fit"
      style={{
        backgroundImage:
          "url('https://media0.giphy.com/media/8PEbUBEwxktyNeqVZ4/giphy.gif?cid=6c09b952wgjowjczfj4zfj8z3yb47qg55kt9bwmjprfuo1j9&ep=v1_gifs_search&rid=giphy.gif&ct=g')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] min-h-screen sm:px-4 lg:px-32 gap-4 z-20">
        <Header />
        <MainContent />
        <Image />
      </div>
    </div>
  );
}
