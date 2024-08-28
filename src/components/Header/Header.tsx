import React, { FC } from 'react';
import './Header.css';

const Header: FC = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <img
          src='https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg'
          alt='Formula 1 Logo'
        />
      </div>
      <nav className='nav'>
        <ul>
          <li>React Formula 1</li>
          <li>
            <a
              href='https://github.com/christophe77/react-formula-one'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
