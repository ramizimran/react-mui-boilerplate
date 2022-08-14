import { Box, IconButton, Link, styled, Tooltip } from "@mui/material";

import { cloneElement } from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

let socials = [
  {
    platform: "github",
    url: "https://github.com/sizarcorpse",
    title: "github.com/sizarcorpse",
    component: <GitHubIcon />,
  },
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/ramizimran/",
    title: "linkedin.com/in/ramizimran",
    component: <LinkedInIcon />,
  },
  {
    platform: "facebook",
    url: "https://www.facebook.com/sizarcorpse",
    title: "facebook.com/sizarcorpse",
    component: <FacebookIcon />,
  },
  {
    platform: "twitter",
    url: "https://twitter.com/sizarcorpse",
    title: "twitter.com/sizarcorpse",
    component: <TwitterIcon />,
  },
  {
    platform: "instagram",
    url: "https://www.instagram.com/sizarcorpse/",
    title: "instagram.com/sizarcorpse",
    component: <InstagramIcon />,
  },
];

const MPSocial = () => {
  return (
    <Box className="MpSocial" sx={{ display: "flex", gap: 0 }}>
      {socials.map((social, index) => (
        <LinkStyled
          key={index}
          onClick={() => window.open(social.url, "_blank", "noopener")}
        >
          <Tooltip title={social.title} placement="top">
            <IconButton sx={{ p: 1 }}>
              {cloneElement(social.component, {
                fontSize: "medium",
              })}
            </IconButton>
          </Tooltip>
        </LinkStyled>
      ))}
    </Box>
  );
};

const LinkStyled = styled(Link)(({ theme }) => ({
  backgroundColor: "#edeff1",
  borderRadius: theme.spacing(4),
}));

export default MPSocial;
