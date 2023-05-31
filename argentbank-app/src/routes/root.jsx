import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/header';
import { Log } from '../components/log';
import { Footer } from '../components/footer';

export default function Root() {
    return (
      <>
      <Header children={<Log />} />
            <Outlet/>
			<Footer />
		</>
  );
}