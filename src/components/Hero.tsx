import Image from "next/image";

import { Container } from "@/components/Container";
import backgroundImage from "@/images/background.jpg";

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        <Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-teal-400 sm:text-7xl">
            Clip is a suite of tools for video content creation
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-slate-900">
            <p>
              Introducing AI-powered video creation for businesses! Our
              state-of-the-art tools and technology make it easy for you to
              generate professional-quality videos with minimal effort. From
              product demos and explainer videos to social media content and
              marketing materials, our automated platform can handle it all.
            </p>
            <p>
              Say goodbye to expensive production costs and time-consuming
              editing processes – our AI-driven solutions deliver high-quality
              results in a fraction of the time. Upgrade your video strategy
              today with our cutting-edge technology.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
