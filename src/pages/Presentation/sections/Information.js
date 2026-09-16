/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/susti-logo-2.jpeg";
import bgBack from "assets/images/susti-logo-2.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Our
                    <br />
                    Mission
                  </>
                }
                description="Efficient Energy for a Greener Tomorrow."
              />
              <RotatingCardBack
                image={bgBack}
                title="Mission Statement"
                description="We empower people and organizations to use energy and resources more efficiently through practical engineering and sustainability solutions that reduce costs, improve performance, cut carbon and support sustainable development."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Our Commitment to People"
                  description="We invest in our people by building the skills, knowledge and expertise needed to deliver practical, innovative and high-quality energy, engineering, water and sustainability solutions, while fostering a culture of growth, collaboration and excellence."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Our Commitment to Clients"
                  description="We deliver practical, tailored energy, engineering, water and sustainability solutions that reduce costs, improve performance, increase resource efficiency and reduce carbon, creating lasting value for our clients."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Our Commitment to the Environment"
                  description="We are committed to protecting the environment by promoting energy and resource efficiency, renewable energy and sustainable engineering practices that reduce environmental impact and contribute to a healthier, more resilient planet."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Our Commitment to the Community"
                  description="We contribute to sustainable socio-economic development by sharing knowledge, supporting innovation, creating opportunities and empowering communities to adopt practical solutions that improve livelihoods and build a more sustainable future."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
