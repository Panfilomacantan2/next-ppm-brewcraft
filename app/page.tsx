import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Home from "@/components/Home";
import NewArrivals from "@/components/NewArrivals";

export default function MainPage() {
  return (
    <>
      <Home />
      <NewArrivals />
      <Features />
      <Blog />
      <Contact />
    </>
  );
}
