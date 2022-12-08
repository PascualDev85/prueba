import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { NavBar } from "../energia/components";
import { FormView, GraphicView } from "../energia/views";
import { CheckingAuth } from "../ui/components/CheckingAuth";

export const HomePage = () => {
  const { isLoading } = useSelector((state) => state.energia);

  return (
    <>
      <NavBar />

      <Grid
        item
        variant="h1"
        component="h1"
        sx={{ textAlign: "center", mt: 15, mb: 8 }}
      >
        <img
          src="https://www.ree.es/themes/custom/newree/logo.svg"
          alt="red-electrica-logo"
          style={{ width: 360 }}
        />
      </Grid>

      <Grid container component="main" spacing={4} sx={{ mb: 10 }} padding={3}>
        <Grid item xs={12} md={12} lg={3}>
          <FormView />
        </Grid>

        <Grid item xs={12} md={12} lg={9}>
          {isLoading && <CheckingAuth />}
          <GraphicView />
        </Grid>
      </Grid>
    </>
  );
};
