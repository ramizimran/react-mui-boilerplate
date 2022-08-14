import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { forwardRef } from "react";
import { Box, CssBaseline, styled } from "@mui/material/";

const PageStyled = styled(Box)(({ theme }) => ({
  background: theme.palette.common.white,
}));

const Page = forwardRef(({ children, title = "", ...other }, ref) => (
  <PageStyled ref={ref} {...other}>
    <CssBaseline />
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </PageStyled>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
