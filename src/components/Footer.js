import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.subscribe}>
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <form className={styles.form}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
        <div className={styles.contact}>
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h4>CURRENCY</h4>
          <p>🇺🇸 USD</p>
          <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.bottomSection}>
        <div>
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className={styles.rightSection}>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <span>📷</span>
            <span>💼</span>
          </div>
          <h4>mettā muse ACCEPTS</h4>
          <div className={styles.paymentIcons}>
            <img src="/icons/gpay.png" alt="Gpay" />
            <img src="/icons/visa.png" alt="Visa" />
            <img src="/icons/paypal.png" alt="PayPal" />
            <img src="/icons/amex.png" alt="Amex" />
            <img src="/icons/applepay.png" alt="Apple Pay" />
            <img src="/icons/shopify.png" alt="Shopify" />
          </div>
        </div>
      </div>

      <div className={styles.copyRight}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
}
