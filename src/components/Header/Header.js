// CSS
import styles from "./Header.module.css";

// Hooks
import { useState } from 'react'

const Header = () => {

    const [activeProjeto, setActiveProjeto] = useState(false)
    const [activeContato, setActiveContato] = useState(false)

    const [activeMenu, setActiveMenu] = useState(false)

  return (
    <header className={styles.header}>
      <div>
        <div class="wrapper">
          <svg>
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              CFA
            </text>
          </svg>
        </div>
        <div className={styles.menu_bar} onClick={() => setActiveMenu((actualActiveMenu) => !actualActiveMenu)}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
        </div>
        <ul className={`${styles.menu} ${activeMenu && styles.active_menu}`}>
          <li >
            <a href="#jobs" onClick={() => setActiveMenu(false)} className={activeProjeto ? 'active' : 'noactive'} onMouseEnter={() => setActiveProjeto(true)} onMouseLeave={() => setActiveProjeto(false)}>Projetos</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setActiveMenu(false)} className={activeContato ? 'active' : 'noactive'} onMouseEnter={() => setActiveContato(true)} onMouseLeave={() => setActiveContato(false)}>Contatos</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
