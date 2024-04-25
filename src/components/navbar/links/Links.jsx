"use client";

import { useState } from 'react';
import Link from 'next/link'
import styles from './links.module.css'
import NavLink from './navLink/navLink';
import Image from 'next/image';
export default function Links() {

  const [open, setOpen] = useState(false);

  const Links = [
    {
        title: "Homepage",
        path: '/'
    },
    {
        title: "About",
        path: '/about'
    },
    {
        title: "Contact",
        path: '/contact'
    },
    {
        title: "Blog",
        path: '/blog'
    },

  ]

  const session = true;
  const isAdmin  = true;

  return (
    <div>
        <div className={styles.links}>
            {Links.map((link) => (
                <NavLink item={link} key={link.title}/>
            ))}
            {session ? (
                <> 
                {
                    isAdmin && (
                        <NavLink item={{ title: "Admin", path: '/admin'}}/>
                    )
                }
                <button className={styles.logout}>Logout</button>
                </>
            ) : (
                <NavLink item = {{ title: 'Login', path: "/login"}} />
            )}
        </div>
        {/* <button className={styles.menuButton} onClick={() => setOpen(prev => !prev)}>Menu</button> */}
        <Image className={styles.menuButton} src="/menu.png" alt="" width={30}  height={30} onClick={() => setOpen(prev => !prev) } />
        {
            open && <div className={styles.mobileLinks}> 
            {Links.map((link) => (
                <NavLink item={link} key={link.title} />
            ))}
            </div>
        }
    </div>
  );
}
