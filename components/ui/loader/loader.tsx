'use client';
import ReactDOM from 'react-dom';
import s from './loader.module.scss';
import { useEffect, useState } from 'react';

export const Loader = ({ id }: { id: string }) => {
  const [loaderRoot, setLoaderRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById(id);

    if (!el) {
      console.error(`Id="${id}" is not exist`);
    }

    setLoaderRoot(el);
  }, [id]);

  if (!loaderRoot) return null;

  return ReactDOM.createPortal(
    <div className={s.wrapper}>
      <div className={s.loader}></div>
    </div>,
    loaderRoot
  );
};
