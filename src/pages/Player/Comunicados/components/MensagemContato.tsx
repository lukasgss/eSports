import React from "react";
import Modal from "../../../../components/Common/Modais/Modal";
import ConteudoMensagem from "./ConteudoMensagem";
import { useWindowDimensions } from "../../../../hooks/useWindowDimensions";

import playerImage from "../../../../assets/img/playerImageStatus.png";

interface MensagemContatoProps {
  assunto: string | undefined;
  data: string | undefined;
  remetente: string | undefined;
  mensagem: string | undefined;
  modalMobileIsOpen: boolean;
  setModalMobileIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MensagemContato = ({
  assunto,
  data,
  remetente,
  mensagem,
  modalMobileIsOpen,
  setModalMobileIsOpen,
}: MensagemContatoProps) => {
  const dimensaoJanela = useWindowDimensions();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {assunto && data && remetente && mensagem ? (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {dimensaoJanela >= 768 ? (
            <div className="bg-primary-gray p-7 rounded-b-md">
              <div className="flex items-center justify-between">
                <span className="text-primary-pink font-bold text-5xl mb-4">
                  {assunto}
                </span>
                <span className="text-light-gray text-2xl font-bold">
                  {data}
                </span>
              </div>
              <div className="flex items-center gap-5">
                <img
                  src={playerImage}
                  alt="Imagem jogador"
                  className="rounded-full w-20"
                />
                <span className="font-bold text-3xl">{remetente}</span>
              </div>
              <div className="h-[3px] w-full rounded my-4 bg-[#464646]" />
              <p className="font-semibold text-[#bbb]">{mensagem}</p>
            </div>
          ) : (
            <Modal
              isOpen={modalMobileIsOpen}
              setIsOpen={setModalMobileIsOpen}
              backgroundColorClass="bg-primary-gray"
            >
              <ConteudoMensagem
                isModal
                assunto={assunto}
                data={data}
                mensagem={mensagem}
                playerImage={playerImage}
                remetente={remetente}
                setIsModalOpen={setModalMobileIsOpen}
              />
            </Modal>
          )}
        </>
      ) : null}
    </>
  );
};

export default MensagemContato;
