import { Fragment, PropsWithChildren, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import IconCross from "@go1d/go1d/build/components/Icons/Cross";
import { Button } from "./Button";

export default function SlideOver({
  label,
  children,
}: PropsWithChildren<{ label: string }>) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button className="w-full" onClick={() => setOpen(true)}>
        {label}
      </Button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-xl">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="bg-slate-700 py-6 px-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-lg font-medium text-white">
                            {label}
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="text-white"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <IconCross />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex-1 py-6 px-4 sm:px-6 overflow-y-auto">
                        {children}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
