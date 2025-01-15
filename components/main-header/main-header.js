"use client";

import Link from "next/link";
import React from "react";
import logoImage from "../../assets/logo.png";
import Image from "next/image";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";

const MainHeader = () => {
  let path = usePathname();
  // console.log(path);
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header} priority="true">
        <Link href="/" className={styles.logo}>
          <Image src={logoImage} alt="logo" />
          Next Level Meals
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link
                href="/meals"
                className={path == "/meals" ? styles.active : ""}
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={path == "/community" ? styles.active : ""}
              >
                Foodie Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
