import '@mantine/core/styles.css';
import {createTheme, MantineProvider} from "@mantine/core";
import {BrowserRouter} from "react-router-dom";
import {Routing} from "./features/Routing.tsx";

const theme = createTheme({})

function App() {
  return (
      <MantineProvider theme={theme}>

        <BrowserRouter>
          <Routing />
        </BrowserRouter>

      </MantineProvider>
  )
}

export default App