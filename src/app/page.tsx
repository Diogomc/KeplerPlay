'use client'

import { Home } from "@/components/Home";
import { MainBanner } from "@/components/MainBanner";
import { Nav } from "@/components/nav/Nav";

export default function Page() {
  return (
    <div>
      <Nav/>
      <MainBanner/>
   
       <Home/>

    </div>
  );
}
