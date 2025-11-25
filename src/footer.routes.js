// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/svg/martin.svg";

const date = new Date().getFullYear();

export default {
  brand: {
    image: logoCT,
    route: "https://www.linkedin.com/in/martin-ochieng-a829b67b/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "company",
      items: [{ name: "about us", href: "/pages/landing-pages/about-us" }],
    },
    {
      name: "contact us",
      items: [
        { name: "+254 716 433 156", href: "" },
        { name: "sustienergyslns@gmail.com", href: "" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} From Martin{" "}
      <MKTypography
        component="a"
        href="https://www.linkedin.com/in/martin-ochieng-a829b67b/"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        With ❤️
      </MKTypography>
      .
    </MKTypography>
  ),
};
