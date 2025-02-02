import { Home } from "@/components/Home";
import { MainBanner } from "@/components/MainBanner";
import { Nav } from "@/components/Nav";

export default function Page() {
  return (
    <div>
      <Nav/>
      <MainBanner/>
       <Home
       />
    </div>
  );
}
