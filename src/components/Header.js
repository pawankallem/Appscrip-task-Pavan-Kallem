import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
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
          <img src="/icons/heart.png" alt="Wishlist" />
          <img src="/icons/cart.png" alt="Cart" />
          <img src="/icons/user.png" alt="User" />
          <div className={styles.language}>
            <img src="/icons/arrowDown.png" alt="Language" />
            <span>ENG</span>
          </div>
        </div>
      </div>

      <nav className={styles.navbar}>
        <Link href="/shop">SHOP</Link>
        <Link href="/skills">SKILLS</Link>
        <Link href="/stories">STORIES</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/contact">CONTACT US</Link>
      </nav>
    </header>
  );
}
