import React from 'react'
import styles from '../../../CSSFiles/Home/Aboutus.module.css'
const AboutUs = () => {
  return (
    <section className={`${styles.wrapper}`}>
      <div className={`container pt-5`}>
        <div className={`card`}>
          <div className={`card-body`}>
            <div className={`row`}>
              <div className={`col-md-12`}>
                <h1 className={`text-center mb-4 ${styles.heading_wrapper}`}>
                  About Us
                </h1>
                <div
                  className={`d-flex flex-column justify-content-center align-items-center`}
                >
                  <h4 className={`${styles.heading}`}>Work with heart</h4>
                  <p className={`text-center ${styles.para}`}>
                    Aenean vulputate eleifend tellus. Aenean leo ligula,
                    porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                    lorem ante, dapibus in. Donec vitae sapien ut libero
                    venenatis faucibu. Nullam quis ante. Etiam sit amet orci
                    eget eros faucibus tincidunt
                  </p>
                </div>
              </div>

              <div
                className={`d-flex flex-column justify-content-center align-items-center`}
              >
                <h4 className={`${styles.heading}`}>Reliable services</h4>
                <p className={`text-center ${styles.para}`}>
                  Donec vitae sapien ut libero venenatis faucibu. Nullam quis
                  ante. Etiam sit amet orci eget eros faucibus tincidunt Donec
                  vitae sapien ut libero venenatis faucibu. Nullam quis ante.
                  Etiam sit amet orci eget eros faucibus tincidunt
                </p>
              </div>

              <div
                className={`d-flex flex-column justify-content-center align-items-center`}
              >
                <h4 className={`${styles.heading}`}>Great support</h4>
                <p className={`text-center ${styles.para}`}>
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                  eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  Donec vitae sapien ut libero venenatis faucibu. Nullam quis
                  ante. Etiam sit amet orci eget eros faucibus tincidunt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
