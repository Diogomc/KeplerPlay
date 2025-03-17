'use client'

import { Home } from "@/components/home/Home";
import { Nav } from "@/components/nav/Nav";
import { Main } from "@/components/main/Main";
import { Plans } from "@/components/plans/Plans";

export default function Page() {
  return (
    <div>
      <Nav />
      <Main />
     <Plans/>
      <Home />

    </div>
  );
}
