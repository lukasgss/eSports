import React, { Fragment } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Dialog, Transition } from "@headlessui/react";

import "./index.scss";

interface ModalProps {
  titulo: string;
  descricao: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal = ({
  titulo,
  descricao,
  isOpen,
  setIsOpen,
  children,
}: ModalProps) => {
  return (
    <Transition appear show={!!isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 min-w-[350px] p-5"
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
              <Dialog.Panel className="w-full max-w-md transform text-white overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all">
                <div
                  id="conteudoModal"
                  className="flex flex-col gap-10 justify-center items-center p-10"
                >
                  <AiOutlineClose
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-3 w-7 h-7 text-primary-pink cursor-pointer hover:opacity-90"
                  />
                  <Dialog.Title
                    as="h3"
                    className="text-5xl font-semibold leading-6"
                  >
                    {titulo}
                  </Dialog.Title>
                  <Dialog.Description className="text-[#bbb] text-lg font-semibold">
                    {descricao}
                  </Dialog.Description>
                </div>
                <div className="bg-dark-blue-gradient">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default Modal;
