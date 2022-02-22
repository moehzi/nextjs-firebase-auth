import Head from "next/head";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import SignOutIcon from "@mui/icons-material/Logout";
import { logout } from "../../services/firebase";

const Authenticated = ({ children, title }) => {
  const defaultTitle = "Netflix";
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <AppBar>
        <Toolbar>
          <Typography sx={{ flex: 1 }}>Netflix</Typography>
          <ButtonBase onClick={logout}>
            <SignOutIcon />
            Sign Out
          </ButtonBase>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ pt: "64px" }}>
        <Container maxWidth="md">{children}</Container>
      </Box>
    </>
  );
};

export default Authenticated;
