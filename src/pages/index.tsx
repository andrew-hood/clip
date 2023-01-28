import type { NextPage } from "next";
import Layout from "@/components/layout/Layout";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { ChartBarIcon, CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />

      <Container className="py-20">
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl"
            >
              Products
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              Whether you're a professional videographer or a beginner, our
              products empowers you to express your creativity in new and
              exciting ways. Experience the future of video production today
              with Clip
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12">
            <Link href="/go1-wrapped" className="group">
              <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg bg-teal-500 group-hover:bg-teal-400">
                <div className="flex flex-col items-center justify-center text-white">
                  <ChartBarIcon className="h-10 w-10" />
                  <h3 className="font-bold text-xl">Go1 Wrapped</h3>
                </div>
              </div>
              <p className="mt-8 text-base text-gray-500">
                Get a comprehensive view of your learning habits and performance
                on other platforms. See which subjects and courses you've spent
                the most time on and identify areas for improvement.
              </p>
            </Link>
            <Link href="/sprint-shot" className="group">
              <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg bg-teal-500 group-hover:bg-teal-400">
                <div className="flex flex-col items-center justify-center text-white">
                  <CursorArrowRaysIcon className="h-10 w-10 " />
                  <h3 className="font-bold text-xl">Sprint Shot</h3>
                </div>
              </div>
              <p className="mt-8 text-base text-gray-500">
                Up your snack organization game with multiple compartment
                options. The quick-access stash pouch is ready for even the most
                unexpected snack attacks and sharing needs.
              </p>
            </Link>
          </div>
        </section>
      </Container>

      <Footer />
    </Layout>
  );
};

export default Home;
