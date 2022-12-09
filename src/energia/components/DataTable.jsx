import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import TablePaginationActions from "./mui/TablePaginationActions";

export const DataTable = () => {
  const { startDay } = useSelector((state) => state.energia);

  return (
    <>
      <Grid
        container
        component="div"
        justifyContent="center"
        style={{
          display: startDay === null ? "none" : "",
          marginTop: 40,
        }}
      >
        <Grid item xs={12} md={12} lg={8}>
          <Card variant="outlined" sx={{ boxShadow: 5, borderRadius: 4 }}>
            <CardHeader
              sx={{
                backgroundColor: "primary.main",
                color: "primary.contrastText",
              }}
              title="Datos de la Red Eléctrica"
            />
            <CardContent>
              <TablePaginationActions />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
