import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { MuiTable } from "./MuiTable";

export const DataTable = () => {
  const { startDay } = useSelector((state) => state.energia);

  return (
    <>
      <Grid
        container
        component="div"
        justifyContent="flex-start"
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{
          display: startDay === null ? "none" : "",
        }}
      >
        <Grid item xs={17} md={17} lg={9}>
          <Card variant="outlined" sx={{ boxShadow: 5, borderRadius: 4 }}>
            <CardHeader
              sx={{
                backgroundColor: "primary.main",
                color: "primary.contrastText",
              }}
              title="Datos de la Red Eléctrica"
            />
            <CardContent>
              <MuiTable />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
