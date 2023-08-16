import { useState } from 'react';
import logoIgnite from '../../assets/ignite-logo.svg';
import { NewTransactionModal } from '../NewTransactionModal';
import { HeaderContainer, HeaderContent } from './styles';
import * as Dialog from '@radix-ui/react-dialog';

export function Header() {
  const [openModal, setOpenModal] = useState(false);

  function dismissModal() {
    return setOpenModal(false)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={logoIgnite} alt="" />
          <h3>DT Money</h3>
        </div>
        <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
          <Dialog.Trigger asChild>
            <button>Nova transação</button>
          </Dialog.Trigger>

          <NewTransactionModal dismissModal={dismissModal} />
        </Dialog.Root>

      </HeaderContent>
    </HeaderContainer>
  )
}