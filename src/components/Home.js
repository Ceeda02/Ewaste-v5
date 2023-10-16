import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

export function Home() {
  return (
    <>
      <Navigation />
      <div
        id="home"
        class="container-fluid home--background head--home pt-5 mt-5 mb-0 "
      >
        <div class="container-fluid mb-md-5">
          <div class="row ">
            <h2 class="home-header  header-- head--home-inner">
              SAVE THE ENVIRONMENT BY KEEPING OUR PLANET GREEN AND CLEAN
            </h2>
            <h2 class="home-header">FOR THE SAKE OF IMPROVEMENT</h2>
          </div>
        </div>

        <div class="container-fluid margin-none">
          <div class="row">
            <div class="col-md-6 ml-md-5 mt-2">
              <p class="home-paragraph header-paragraph">
                "EcoCycle" serves as a call to action, urging us all to engage
                in a process that not only disposes of electronic waste but also
                contributes positively to our environment. It encourages
                responsible and eco-friendly handling of E-WASTE, ensuring that
                these discarded electronic devices find new life through
                recycling, refurbishment, or safe disposal.
              </p>
              <p className="home-paragraph header-paragraph mt-md-5">
                By embracing the "EcoCycle" philosophy, we can make a
                significant impact on the health of our planet, reduce
                electronic waste's harmful effects, and promote a greener, more
                sustainable future. Let's come together to support proper
                E-WASTE disposal and be stewards of our environment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grn-bg">
        <div class="container-fluid  flex-mid-grn">
          <div class="container flex-mid-text pt-3 pb-3">
            <h4>
              Every year, the world generates approximately 53 million metric
              tons of electronic waste (e-waste), which is equivalent to the
              weight of almost 350 cruise ships.
            </h4>
          </div>
        </div>
      </div>
      <div className="container-fluid bgtest p-5">
        <div class="container margin-BT text-center">
          <h1 className="aboutUs-h1">About us</h1>
          <hr className="hr-body pb-5" />
          <p className="card-text aboutUs-text">
            At EcoCycle, we are passionate about creating a sustainable future
            for our planet. Our mission is to promote environmental
            consciousness and responsible waste management practices to protect
            the Earth's natural resources for future generations.
          </p>
          <h1 className="aboutUs-h1 pt-5">Who We Are</h1>
          <hr className="hr-body pb-5" />
          <p className="card-text aboutUs-text">
            EcoCycle is a dedicated team of eco-enthusiasts, environmentalists,
            and recycling advocates who share a common vision of reducing waste,
            conserving energy, and preserving the environment. With years of
            experience in the field of sustainability, we are committed to
            making a positive impact on the world.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card card-1 card-sze-1">
                <div className="card-body">
                  <h5 className="card-title-home pt-1 pb-1 ">Mission</h5>
                  <hr className="hr" />
                  <p className="card-text crd-text">
                    At Ecocycle, our mission is to be at the forefront of
                    transforming the e-waste landscape. We are committed to
                    safeguarding the environment, promoting sustainable
                    practices, and driving innovation in electronic waste
                    management. Through responsible recycling, resource
                    recovery, and community engagement, we aim to create a world
                    where electronic waste is not a problem but an opportunity.
                    We prioritize transparency, ethics, and our global
                    responsibility to leave a lasting legacy of environmental
                    stewardship for generations to come.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card card-2 card-sze-2">
                <div className="card-body">
                  <h4 className="card-title-home pt-1 pb-1 ">Vision</h4>
                  <hr className="hr" />
                  <p className="card-text crd-text">
                    At Ecocycle, we envision a world where electronic waste is
                    no longer a burden but a valuable resource. We strive to
                    lead the way in transforming the e-waste landscape, creating
                    a sustainable future where every discarded device
                    contributes to environmental conservation and technological
                    innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container margin-BT text-center">
          <h1 className="aboutUs-h1 pt-5">Get Involved</h1>
          <hr className="hr-body pb-5" />
          <p className="card-text aboutUs-text">
            Join us in our journey towards a greener, more sustainable world.
            Together, we can make a significant difference. Explore our website,
            participate in our programs, and let's work hand-in-hand to create a
            cleaner, healthier planet for all. Thank you for being a part of
            EcoCycle's mission to protect the Earth, one cycle at a time.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
