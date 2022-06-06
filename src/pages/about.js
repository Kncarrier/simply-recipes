import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <main className="page">
      <section className="about-page">
        <article>
          <h2>I'm baby sustainable forage pitchfork</h2>
          <p>
            Tofu mlkshk tilde, church-key live-edge cold-pressed forage pabst.
            Kombucha bushwick wayfarers succulents, hella kogi put a bird on it
            vape tonx seitan.
          </p>
          <p>
            Gluten-free four dollar toast synth, green juice hot chicken disrupt
            celiac.
          </p>
          <Link to="/contact" className="btn">
            Contact
          </Link>
        </article>
        <StaticImage
          src="../assets/images/about.jpeg"
          alt="about image"
          className="about-img"
          placeholder="dominantColor"
        />
      </section>
    </main>
  </Layout>
)

export default AboutPage
