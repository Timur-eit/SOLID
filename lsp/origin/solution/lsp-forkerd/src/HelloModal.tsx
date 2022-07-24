import React, { useState } from "react";
import Modal from "react-modal";

type Body = JSX.Element | { content: JSX.Element };

type HelloModalProps = {
  body: Body;
};

function isBodyContent(body: Body): body is { content: JSX.Element } {
  if (typeof body === "object") {
    return true;
  }
  return false;
}

const HelloModal: React.FC<HelloModalProps> = ({ body }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const clickHandler = (isOpenValue: boolean) => () => setIsOpen(isOpenValue);

  return (
    <>
      <button onClick={clickHandler(true)}>Open the modal</button>

      <Modal isOpen={isOpen} ariaHideApp={false}>
        {isBodyContent(body) ? body.content : body}
        <button onClick={clickHandler(false)}>Close the modal</button>
      </Modal>
    </>
  );
};

export default HelloModal;
