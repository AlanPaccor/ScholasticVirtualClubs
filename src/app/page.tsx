import Image from "next/image";
import Landing from "./sections/landing";
import Reviews from "./sections/reviews";
import Showcase from "./sections/showcase";
import ClubsDisplay from "./sections/clubsDisplay";
import AppDownload from "./sections/appDownload";
import Footer from "./sections/footer";
import Navbar from "./sections/navbar";

export default function Home() {
  return (
    <div>
      <Landing />
      <Reviews />
      <Showcase />
      <ClubsDisplay />
      <AppDownload />
      <Footer />
      <Navbar />
    </div>
  );
}
