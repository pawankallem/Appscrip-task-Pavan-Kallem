import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("mobile");
      } else if (width >= 768 && width <= 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div>Lorem ipsum dolor</div>
        <div>Lorem ipsum dolor</div>
        <div>Lorem ipsum dolor</div>
      </div>

      <div className={styles.middleBar}>
        <img src="/icons/logo.png" alt="Logo" className={styles.logoLeft} />
        <div className={styles.logo}>LOGO</div>
        <div className={styles.icons}>
          <img src="/icons/search.png" alt="Search" />
          {screenSize !== "mobile" && (
            <>
              <img src="/icons/heart.png" alt="Wishlist" />
              <img src="/icons/cart.png" alt="Cart" />
            </>
          )}
          <img src="/icons/user.png" alt="User" />
          {screenSize !== "mobile" && (
            <div className={styles.language}>
              <img src="/icons/arrowDown.png" alt="Language" />
              <span>ENG</span>
            </div>
          )}
        </div>
      </div>

      {screenSize === "desktop" && (
        <nav className={styles.navbar}>
          <Link href="/shop">SHOP</Link>
          <Link href="/skills">SKILLS</Link>
          <Link href="/stories">STORIES</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT US</Link>
        </nav>
      )}
    </header>
  );
}
