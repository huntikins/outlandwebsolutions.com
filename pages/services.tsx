import { NextPage } from "next/types";
import Hero from "../components/home/Hero";

import bkg from "../public/assets/services.jpg";

const Services: NextPage = () => {
    return (
      <main>
        <Hero label="Outland Web Solutions" bkg={bkg}>
          <h1 className="animate-fadeIn bg-stone-900 p-8 text-center font-brand text-6xl uppercase text-purple-200 lg:text-9xl">
            Services
          </h1>
        </Hero>
      </main>
    )
}

export default Services;