// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
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
      icon: <GitHubIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "/" },
        { name: "freebies", href: "/" },
        { name: "premium tools", href: "/" },
        { name: "blog", href: "/" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "/" },
        { name: "bits & snippets", href: "/" },
        { name: "affiliate program", href: "/" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "/" },
        { name: "knowledge center", href: "/" },
        { name: "custom development", href: "/" },
        { name: "sponsorships", href: "/" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "/" },
        { name: "privacy policy", href: "/" },
        { name: "licenses (EULA)", href: "/" },
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
