import './loginChoose.css';
import React, { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { WalletEnum } from '../../../types';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { loginThunk } from '../../../redux/user/loginThunk';

type LoginChoosePropsType = {
  active: boolean;
  setActive: (isActive: boolean) => void;
  changeSelectedChain: any;
  selectedChain: any;
};

const LoginChoose = ({
  selectedChain,
  changeSelectedChain,
  active,
  setActive,
}: LoginChoosePropsType) => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    return () => {
      changeSelectedChain({});
    };
  }, []);

  return (
    <>
      <Modal show={active}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please select your wallet to login:</p>
          <Button
            onClick={() => dispatch(loginThunk(WalletEnum.wax, selectedChain))}
          >
            Wax Cloud Wallet
          </Button>
          <Button
            onClick={() =>
              dispatch(loginThunk(WalletEnum.anchor, selectedChain))
            }
          >
            Anchor Wallet
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginChoose;
