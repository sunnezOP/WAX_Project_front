import React, { FC, useState } from 'react';
import { chainsData } from '../helpers';
import LoginChoose from '../LoginChoose';
import './login.css';

type LoginPropsType = {
  show: boolean;
};

const Login: FC<LoginPropsType> = ({ show }) => {
  const [showLoginChoose, setShowLoginChoose] = useState(false);
  const chains = chainsData;
  const [selectedChain, changeSelectedChain] = useState<
    { chainId: string; nodeUrl: string } | unknown
  >(chains[0]);

  if (!show) {
    return null;
  }

  return (
    <>
      <div className='login-container'>
        <div>Welcome</div>
        <button
          className='login-button'
          onClick={() => setShowLoginChoose(!showLoginChoose)}
        >
          Login
        </button>
        <div className='login-button-container'>
          <div className='start-container'>
            <div className='select-container'>
              <select
                className='login-select-input'
                defaultValue={chains[0].nodeUrl}
                onChange={(e) => {
                  changeSelectedChain(
                    chains.find(
                      (item) => item.nodeUrl === e.target.value
                    ) as any
                  );
                }}
                aria-label='Default select example'
              >
                {chains.map((chain) => (
                  <option
                    style={{ color: '#000000' }}
                    key={chain.nodeUrl}
                    value={chain.nodeUrl}
                  >
                    {chain.nodeUrl}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <LoginChoose
        selectedChain={selectedChain}
        changeSelectedChain={changeSelectedChain}
        active={showLoginChoose}
        setActive={setShowLoginChoose}
      />
    </>
  );
};

export default Login;
