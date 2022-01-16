import { Modal, ModalWrapper, CLose, ModalBody } from './styles';
import PropTypes from 'prop-types';
import { RiCloseCircleFill } from 'react-icons/ri';

export default function ModalCom({ children, isOpen, toggle }) {
  return (
    <Modal isOpen={isOpen}>
      <ModalWrapper>
        <ModalBody>
          <CLose onClick={toggle}>
            <RiCloseCircleFill size={25} />
          </CLose>

          {children}
        </ModalBody>
      </ModalWrapper>
    </Modal>
  );
}

ModalCom.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
};
