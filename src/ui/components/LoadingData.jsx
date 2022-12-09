import { CircularProgress, Grid } from "@mui/material";

export const LoadingData = () => {
  return (
    <Grid container spacing={0} direction="column" sx={{ minHeight: "100vh" }}>
      <Grid container direction="row" justifyContent="center">
        <CircularProgress color="warning" />
      </Grid>
    </Grid>
  );
};
