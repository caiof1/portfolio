import styles from "./Whatsapp.module.css";

const Whatsapp = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=960434439" target="_blank" className={styles.icon}>
      <i class="fa-brands fa-whatsapp"></i>
    </a>
  );
};

export default Whatsapp;
