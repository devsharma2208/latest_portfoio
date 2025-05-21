import Header from "@/pages/Header/page";
import MainContent from "@/pages/MainContent/page";
import Image from "@/pages/photo/page";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/34/1e/80/341e800b1f29d3e34ea2eba5a6af205c.gif')",
        // backgroundImage:
        //   "url('https://media0.giphy.com/media/8PEbUBEwxktyNeqVZ4/giphy.gif?cid=6c09b952wgjowjczfj4zfj8z3yb47qg55kt9bwmjprfuo1j9&ep=v1_gifs_search&rid=giphy.gif&ct=g')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid grid-cols-[1fr_1fr] min-h-screen ml-32 z-20">
        <Header />
        <MainContent />
        <Image />
      </div>
    </div>
  );
}
