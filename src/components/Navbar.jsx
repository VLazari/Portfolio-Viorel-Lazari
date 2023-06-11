import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navLinks } from '../constanta';
import { menuBars, xMark } from '../assets';

function Navbar() {
  const [active, setActive] = useState('/');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full max-w-7xl flex items-center fixed top-0 z-50 py-4 px-8">
      <div className="w-full max-w-7xl flex justify-between items-center mx-auto">
        <Link className="bg-bg-main rounded-full" to="/">
          <img
            src="./../../public/vl-logo-no-bg.png"
            alt="Logo"
            className="h-14"
          />
        </Link>
        <ul className="hidden sm:flex bg-bg-main">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="m-3"
              onClick={() => setActive(link.id)}
            >
              <motion.a
                href={`#${link.id}`}
                className={`p-2 ${
                  active === link.id ? 'text-main-light' : 'text-main-gray'
                }`}
                {...(active === link.id && {
                  animate: {
                    opacity: [
                      1,
                      Math.random(),
                      Math.random(),
                      Math.random(),
                      1,
                    ],
                  },
                  transition: {
                    duration: 1,
                    repeat: 1,
                  },
                })}
              >
                {link.title}
              </motion.a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.img
            src={toggle ? xMark : menuBars}
            alt="menu"
            className="w-8 h-8 object-contain bg-bg-main"
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-1 absolute top-20 right-0 min-w-[30%] z-50 bg-bg-main`}
          >
            <motion.ul
              className="list-none flex justify-end items-start flex-1 flex-col gap-4 px-3"
              animate={
                toggle
                  ? 'inset(0% 0% 0% 0% round 10px)'
                  : 'inset(10% 50% 90% 50% round 10px)'
              }
            >
              {navLinks.map((nav, index) => (
                <motion.li
                  key={nav.id}
                  className={`font-medium cursor-pointer ${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  }`}
                  animate={
                    toggle
                      ? {
                          opacity: 1,
                          x: 0,
                          filter: 'blur(0px)',
                          transition: {
                            duration: 0.3,
                            delay: 0 + index / 5,
                          },
                        }
                      : {
                          opacity: 0,
                          x: 150,
                          filter: 'blur(20px)',
                        }
                  }
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.id);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
