// import { Button } from "@/components/Button";
// import { Container } from "@/components/layout/Container";
// import { Logo } from "@/components/Logo";
// import Link from "next/link";

// export function Header() {
//   return (
//     <header className="relative z-50 pb-8 lg:pt-8">
//       <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
//         <Link href="/" className="mt-4 lg:mt-0 lg:grow lg:basis-0">
//           <Logo className="w-auto text-slate-900" />
//         </Link>
//         {/* <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-2 font-mono text-sm text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
//           <div className="mx-auto flex items-center gap-4 px-4">
//             <p>
//               <time dateTime="2022-04-04">04</time>-
//               <time dateTime="2022-04-06">06 of April, 2022</time>
//             </p>
//             <p>Los Angeles, CA</p>
//           </div>
//         </div> */}
//         <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
//           <Button href="/sprint-shot">Login</Button>
//         </div>
//       </Container>
//     </header>
//   );
// }

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChartBarIcon,
  CheckCircleIcon,
  CursorArrowRaysIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Logo } from "../Logo";
import Link from "next/link";
import { Container } from "./Container";

const solutions = [
  {
    name: "Go1 Wrapped",
    description: "View your current journey with Go1",
    href: "/go1-wrapped",
    icon: ChartBarIcon,
  },
  {
    name: "Sprint Shot",
    description: "Showcase your sprint goals with a fun video",
    href: "/sprint-shot",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Headless",
    description: "A headless CMS experience for videos",
    href: "/headless",
    icon: ShieldCheckIcon,
  },
  // {
  //   name: "Integrations",
  //   description: "Connect with third-party tools that you're already using.",
  //   href: "#",
  //   icon: Squares2X2Icon,
  // },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact", href: "#", icon: PhoneIcon },
];

export function Header() {
  return (
    <Popover className="relative z-40">
      {({ open }) => (
        <>
          <div className="relative z-10 bg-white shadow">
            <Container className="justify-between py-6">
              <Link href="/">
                <Logo className="w-auto text-slate-900" />
              </Link>
              <Popover.Button
                className={clsx(
                  open ? "text-gray-900" : "text-gray-500",
                  "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900"
                )}
              >
                <span className="sr-only">Products</span>
                <Bars3Icon
                  className={clsx(
                    open ? "text-gray-600" : "text-gray-400",
                    "ml-2 h-5 w-5 group-hover:text-gray-500"
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>
            </Container>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel className="absolute inset-x-0 z-10 transform shadow-lg">
              <div className="bg-white">
                <Container className="grid gap-y-6 p-6 sm:grid-cols-2 sm:gap-8 sm:py-8 lg:grid-cols-3 lg:px-8 lg:py-12 xl:py-16">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex flex-col justify-between rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                    >
                      <div className="flex md:h-full lg:flex-col">
                        <div className="flex-shrink-0">
                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-teal-400 text-white sm:h-12 sm:w-12">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                        </div>
                        <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                          <div>
                            <p className="text-base font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                          <p className="mt-2 text-sm font-medium text-teal-400 lg:mt-4">
                            Learn more
                            <span aria-hidden="true"> &rarr;</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </Container>
              </div>
              <div className="bg-gray-50">
                <div className="mx-auto max-w-7xl space-y-6 px-6 py-5 sm:flex sm:space-y-0 sm:space-x-10 lg:px-8">
                  {callsToAction.map((item) => (
                    <div key={item.name} className="flow-root">
                      <a
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 transition duration-150 ease-in-out hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">{item.name}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
