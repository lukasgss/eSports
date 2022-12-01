import React, { Fragment, Dispatch, SetStateAction, ReactNode } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  titulo?: string;
  descricao?: string;
  className?: string;
  backgroundColorClass?: string;
  children: ReactNode;
}

const Modal = ({
  isOpen,
  setIsOpen,
  titulo,
  descricao,
  className = "",
  backgroundColorClass,
  children,
}: ModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className={`relative z-50 min-w-[350px] p-5 ${className}`}
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform text-white rounded-2xl text-left align-middle shadow-xl transition-all">
                <div
                  className={`relative pb-6 ${
                    backgroundColorClass || "bg-dark-blue-gradient"
                  }`}
                >
                  <AiOutlineClose
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-3 w-7 h-7 text-primary-pink cursor-pointer hover:opacity-90"
                  />

                  {titulo ? (
                    <Dialog.Title
                      as="h3"
                      className="text-5xl font-semibold leading-6"
                    >
                      {titulo}
                    </Dialog.Title>
                  ) : null}

                  {descricao ? (
                    <Dialog.Description className="text-[#bbb] text-lg font-semibold">
                      {descricao}
                    </Dialog.Description>
                  ) : null}
                </div>
                <div
                  className={`${
                    backgroundColorClass || "bg-dark-blue-gradient"
                  }`}
                >
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
