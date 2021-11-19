import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import { Modal } from '../Modal';
import { Input } from '../Input';

import { Form } from './styles';
import { FoodInterface } from '../../types';

interface ModalEditFoodProps {
  isOpen: boolean;
  editingFood: FoodInterface;
  setIsOpen: () => void;
  handleUpdateFood: (food: FoodInterface) => Promise<void>;
}

export function ModalEditFood(props: ModalEditFoodProps) {
  const formRef = createRef<FormHandles>();
  const { setIsOpen, handleUpdateFood, editingFood, isOpen } = props;

  async function handleSubmit(data: FoodInterface) {
    await handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
