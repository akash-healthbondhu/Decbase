import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "../../styles/navigation.module.scss";
import icon from "/public/images/nav-icon.png";

const navigation = () => {
  return (
    <nav className={style.nav}>
      <div className={style.navBrand}>
        <Link href="">
          <a>
            <Image src={icon} width={150} height={50} alt="navigatin icon" />
          </a>
        </Link>
      </div>
      <div className={style.navMenu}>
        <ul>
          <li>
            <Link href="#">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>project</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>service</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>about</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>blog</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>shop</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>contact</a>
            </Link>
          </li>
        </ul>
        <div className={style.signupBtn}>
          <Link href="#">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default navigation;
