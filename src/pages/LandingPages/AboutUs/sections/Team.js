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
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import nick from "assets/images/nick.jpg";
import loise from "assets/images/loise.jpg";
import shantel from "assets/images/shantel.jpg";
import koech from "assets/images/koech.jpg";
import martin from "assets/images/martin.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The Executive Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
              at. That&apos;s my skill.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={nick}
                name="Nicholas Ogola, MSc,CEM, PMP"
                position={{ color: "info", label: "Director, Susti Energy Consulting Limited" }}
                description="Nicholas Ogola is a certified energy and engineering professional with extensive experience in sustainable solutions, leading operations, efficiency programs, and strategic projects that help organizations reduce costs, improve resource management, and transition toward cleaner energy across Africa."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={shantel}
                name="Shantel Magombe Munga"
                position={{ color: "info", label: "Electrical & Energy Engineer" }}
                description="Shantel Munga is an Electrical and Energy Engineer with practical experience in electrical maintenance, hotel engineering operations, energy monitoring, and implementing conservation measures—delivering 10–18% savings—while leading system upgrades, analyzing energy data, and driving sustainability-focused efficiency improvements across commercial facilities."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={loise}
                name="Loise Anono"
                position={{ color: "info", label: "Energy Engineer & Technical Consultant" }}
                description="Loise is a multidisciplinary Energy Engineer with over four years of experience leading 20+ energy audits, implementing advanced M&V protocols, developing carbon reduction strategies for 25+ facilities, and deploying data-driven, technology-enabled sustainability solutions—including IoT monitoring, AI/ML reporting, and innovative ECMs—while actively advancing clean energy adoption and pursuing Certified Energy Manager accreditation."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={koech}
                name="Irvine Koech"
                position={{ color: "info", label: "Mechanical Engineer" }}
                description="Irvine Koech is a Mechanical Engineer with extensive experience supporting and delivering 60+ investment-grade energy audits, leading ISO 50002–compliant assessments, and advancing clean energy initiatives—from hybrid solar PV feasibility studies to e-mobility capacity-building—while applying strong analytical and technical expertise to help organizations reduce energy costs, optimize systems, and transition toward a low-carbon future."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={martin}
                name="Martin Ochieng"
                position={{ color: "info", label: "Lead Engineer" }}
                description="Martin Ochieng is a seasoned Electrical and Software Engineer with six years of experience conducting 100+ energy audits, leading Safaricom’s ISO50001 certification as Lead Internal Energy Auditor, and integrating engineering expertise with cloud-native data analytics, real-time monitoring, and automation to deliver high-impact, technology-driven solutions that enhance energy performance, reduce costs, and accelerate sustainable transitions."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
