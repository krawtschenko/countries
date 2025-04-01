'use client';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Container } from '@/components/layout/container/container';
import s from './header.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  return (
    <header className={s.header}>
      <Container>
        <div className={s.wrapper}>
          <Link href={'/'} className={s.link}>
            Where is the world?
          </Link>

          <div className={s.switcher} onClick={toggleTheme}>
            {theme === 'light' ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}

            <span>{theme} Theme</span>
          </div>
        </div>
      </Container>
    </header>
  );
};
