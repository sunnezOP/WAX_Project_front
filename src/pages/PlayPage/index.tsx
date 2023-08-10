import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Play/Header';
import Login from '../../components/Play/Login';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const PlayPage = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return (
    <>
      <Helmet>
        <title>Play</title>
      </Helmet>
      <Login show={!isLoggedIn} />
      {isLoggedIn && <Header />}
    </>
  );
};

export default PlayPage;
