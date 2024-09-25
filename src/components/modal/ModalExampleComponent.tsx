import React, { useState } from "react";
import Modal from "./Modal";

const ModalExampleComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Modal Title"
        size="medium"
        footerActions={[
          { label: 'Cancel', onClick: closeModal },
          { label: 'Confirm', onClick: () => alert('Confirmed') },
        ]}
      >
        <p>This is the body content of the modal.</p>
      </Modal>
    </div>
  );
};
export default ModalExampleComponent;
