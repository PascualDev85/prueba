import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { startForm } from "../../store/energia";
import formatDate from "../../utils/formatDate";
import { useForm } from "../../hooks/useForm";
import { CSVLink } from "react-csv";

const today = formatDate(new Date());

const formData = {
  language: "",
  type: null,
  startDay: "",
  endDay: "",
};

export const Form = () => {
  const { isLoading, dataTable } = useSelector((state) => state.energia);
  const dispatch = useDispatch();

  console.log(isLoading);

  const { language, type, startDay, endDay, onInputChange } = useForm(formData);

  const isDownloading = useMemo(
    () => dataTable?.length === 0 || dataTable === undefined,
    [dataTable]
  );

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(startForm(language, type, startDay, endDay));
  };

  return (
    <>
      <Box container component="div">
        <Grid item>
          <Card variant="outlined" sx={{ boxShadow: 5, borderRadius: 4 }}>
            <CardHeader
              sx={{
                backgroundColor: "primary.main",
                color: "primary.contrastText",
              }}
              title="Formulario de la Red Eléctrica"
            />
            <CardContent>
              <form onSubmit={onFormSubmit}>
                <Grid
                  container
                  direction="column"
                  spacing={3}
                  sx={{ display: "block", mb: 2 }}
                >
                  <Grid item xs={10}>
                    <FormControl fullWidth>
                      <InputLabel id="language">Idiomas</InputLabel>
                      <Select
                        name="language"
                        id="language"
                        label="language"
                        value={language || ""}
                        onChange={onInputChange}
                      >
                        <MenuItem value={"es"}>Español</MenuItem>
                        <MenuItem value={"en"}>Ingles</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={10}>
                    <FormControl fullWidth>
                      <InputLabel id="type">Energía</InputLabel>
                      <Select
                        name="type"
                        id="type"
                        label="energia"
                        value={type || ""}
                        onChange={onInputChange}
                      >
                        <MenuItem value={0}>Renovable</MenuItem>
                        <MenuItem value={1}>No Renovable</MenuItem>
                        <MenuItem value={2}>Demanda</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={10}>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                      <TextField
                        inputProps={{ max: today }}
                        name="startDay"
                        id="startDay"
                        // label="Fecha de inicio"
                        type="date"
                        value={startDay || []}
                        onChange={onInputChange}
                        max={today}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={10}>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                      <TextField
                        name="endDay"
                        id="endDay"
                        // label="Fecha de inicio"
                        type="date"
                        value={endDay || []}
                        onChange={onInputChange}
                        inputProps={{ max: today }}
                      />
                    </FormControl>
                  </Grid>

                  <Grid
                    item
                    sx={{
                      display: "flex",
                      mt: 1,
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      type="submit"
                      variant="outlined"
                      sx={{
                        backgroundColor: "#f37840",
                        borderColor: "#333",
                        color: "#333",
                      }}
                      disabled={isLoading}
                    >
                      {isLoading ? "Cargando..." : "Enviar"}
                    </Button>
                    <Button
                      sx={{
                        backgroundColor: "#f37840",
                        borderColor: "#333",
                        color: "#333",
                      }}
                      disabled={isDownloading}
                      variant={isDownloading ? "contained" : "outlined"}
                    >
                      <CSVLink
                        filename={"Datos-Tabla"}
                        data={dataTable || []}
                        style={{ color: "#333", textDecoration: "none" }}
                      >
                        Descargar
                      </CSVLink>
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Box>
    </>
  );
};
