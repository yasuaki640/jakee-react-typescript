import { FC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" />
    </Routes>
  );
});
