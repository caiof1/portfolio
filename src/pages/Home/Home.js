// CSS
import styles from "./Home.module.css";

// Images
import imgContainer from "../../images/hero-img.png";
import job1 from "../../images/job1.png";
import job2 from "../../images/job2.png";

const Home = () => {
  const jobs = [
    {
      imgURL: job1,
      linguagens: ["HTML", "CSS", "JS", "Bootstrap"],
      linkSite: "https://caiofernandes.tech/finans",
    },
    {
      imgURL: job2,
      linguagens: ["ReactJS", "Fontawesome"],
      linkSite: "https://ademoselassistenciaespecializada.vercel.app",
    },
  ];

  return (
    <div className={styles.container_home}>
      <section className={styles.container_img_name}>
        <div className={styles.name_container}>
          <h1>
            Oi, eu sou o <span>C</span>aio, desenvolvedor web
          </h1>
          <span>Especialista em criação de sites diversos</span>
          <a href="#jobs">
            <button className="btn">Ver projetos</button>
          </a>
        </div>
        <div className={styles.img_container}>
          <img
            src={imgContainer}
            alt="imagem de um boneco mexendo no computador"
          />
        </div>
      </section>

      <section id="jobs" className={styles.container_jobs}>
        <h2 className="border">Trabalhos</h2>
        <div className={styles.jobs}>
          {jobs &&
            jobs.map((job) => (
              <div>
                <img src={job.imgURL} alt="Trabalho" />
                <div>
                  {job &&
                    job.linguagens?.map((linguagem) => (
                      <span>{linguagem} </span>
                    ))}
                </div>
                <a href={job.linkSite} target="_blank">
                  <button className="btn">Visitar site</button>
                </a>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
