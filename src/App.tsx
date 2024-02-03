import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navbar";

const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: ` "nav" "main" `,
          lg: ` "nav nav" "aside main" `,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          main
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
