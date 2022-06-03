import React from "react"
import Layout from "../components/layout"

const ContactPage = () => (
  <Layout>
    <main className="page">
      <section className="contact-page">
        <article className="contact-info">
          <h3>Want to Get In Touch?</h3>
          <p>
            Shabby chic tote bag direct trade, hella asymmetrical post-ironic
            VHS. +1 twee unicorn, tattooed gochujang tonx echo park gluten-free
            lomo 8-bit hot chicken etsy beard YOLO.
          </p>
          <p>
            Fam letterpress banh mi gochujang church-key before they sold out
            bushwick celiac yr.
          </p>
          <p>
            Pinterest waistcoat wolf williamsburg leggings letterpress normcore
            poke cray tacos lomo aesthetic iPhone schlitz butcher. Polaroid
            pop-up tonx affogato, you probably haven't heard of them helvetica
            intelligentsia taxidermy glossier coloring book viral.
          </p>
        </article>
        <article>
          <form className="form contact-form">
            <div className="form-row">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </article>
      </section>
    </main>
  </Layout>
)

export default ContactPage
