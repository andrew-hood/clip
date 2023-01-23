import React, { PropsWithChildren } from "react";

export const Project = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative overflow-hidden bg-gray-800">
      <div
        className="hidden sm:absolute sm:inset-0 sm:block"
        aria-hidden="true"
      >
        <svg
          className="absolute bottom-0 right-0 mb-48 translate-x-1/2 transform text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:translate-x-0 xl:transform-none"
          width={364}
          height={384}
          viewBox="0 0 364 384"
          fill="none"
        >
          <defs>
            <pattern
              id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} fill="currentColor" />
            </pattern>
          </defs>
          <rect
            width={364}
            height={384}
            fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
          />
        </svg>
      </div>
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                <div>
                  <div className="hidden sm:mb-4 sm:flex sm:justify-center lg:justify-start">
                    <div className="flex items-center rounded-full bg-gray-900 p-1 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base">
                      <span className="rounded-full bg-teal-400 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                        Sprint Shot
                      </span>
                      {/* <ChevronRightIcon className="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" /> */}
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                    Capture your sprint goals and share it
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Sprint Shot auto generates a video of what you accomplished
                    in your sprint. Share what your team achieved to the rest of
                    your company and more.
                  </p>
                  <div className="mt-8 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                    <div className="flex flex-wrap items-start justify-between">
                      <div className="flex justify-center px-1">
                        <img
                          className="h-9 sm:h-10"
                          src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                          alt="Tuple"
                        />
                      </div>
                      <div className="flex justify-center px-1">
                        <img
                          className="h-9 sm:h-10"
                          src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                          alt="Workcation"
                        />
                      </div>
                      <div className="flex justify-center px-1">
                        <img
                          className="h-9 sm:h-10"
                          src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                          alt="StaticKit"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
                <div className="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg p-6 lg:min-h-[400px]">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
