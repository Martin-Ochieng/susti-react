import Icon from "@mui/material/Icon";

// @mui icons

import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Presentation from "layouts/pages/presentation";

const routes = [
  {
    name: "pages",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Pages",
        collapse: [
          {
            name: "home",
            route: "/pages/presentation",
            component: <Presentation />,
          },
          {
            name: "about us",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "contact us",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
        ],
      },
    ],
  },
];

export default routes;
