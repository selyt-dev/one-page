import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Venda o que não quer",
    url: "#1",
    description:
      "Venda o que não quer, para que possa dar um novo uso aos produtos que já não usa.",
  },
  {
    text: "Promova o seu negócio",
    url: "#2",
    description:
      "Quer seja uma pequena ou grande empresa, pode divulgar e promover os seus produtos e serviços para que mais pessoas possam usá-los.",
  },
  {
    text: "Facilidade de uso",
    url: "#3",
    description:
      "A nossa aplicação mobile é de fácil uso, com uma interface amigável, intuitiva e familiar, garantindo a qualidade da plataforma.",
  },
  {
    text: "Alta segurança",
    url: "#4",
    description:
      "A nossa aplicação mobile é segura, confiável e de código aberto, garantindo a segurança dos seus dados pessoais e intransmissíveis.",
  },
  {
    text: "Uso de tecnologia de ponta",
    url: "#5",
    description:
      "Utilizamos tecnologias de ponta, como React Native, Expo e Firebase para garantir a qualidade do nosso serviço.",
  },
  {
    text: "Rápido suporte",
    url: "#6",
    description:
      "Caso encontre algum problema ou dúvida, não hesite em entrar em contato connosco, estamos sempre prontos para ajudar.",
  }
]

const moreLinks = [
  { text: "Termos e Condições", url: "#" },
  {
    text: "Política de Privacidade",
    url: "#",
  },
  {
    text: "GitHub",
    url: "https://github.com/selyt-dev/",
  },
  {
    text: "Instagram",
    url: "https://instagram.com/selyt.pt/",
  },
  {
    text: "Suporte",
    url: "mailto:support@selyt.pt",
  },
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/selyt-logo.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Selyt
      </h1>
      <p className={styles.intro}>
        If you don't want it, just selyt.
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <b>{link.text}</b>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>

    <hr></hr>

    <div className={styles.textCenter}>
      <h2>
        Transfira já a nossa aplicação para Android!
      </h2>
      <p className={styles.intro}>
        Faça o download da nossa aplicação e comece a dar um novo uso aos seus produtos.
      </p>
      <a
          href="https://play.google.com/store/apps/details?id=pt.selyt.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: `none`, color: `white` }}
        >
      <button className={styles.button}>
        
          Transferir
      </button>
      </a>
    </div>

    <br></br>
    <hr></hr>

    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

export default IndexPage
