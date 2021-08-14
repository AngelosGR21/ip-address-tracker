import React, { useState, useEffect, useRef } from "react";

//IMPORTING FETCH
import fetchIP from "./utils/fetchIP";

//IMPORTING COMPONENTS
import Search from "./Components/Search";
import IPDetails from "./Components/IPDetails";
import Map from "./Components/Map";
import { ThemeProvider, createTheme } from "@material-ui/core";

const theme = createTheme({
  overrides: {
    MuiContainer: {
      root: {
        display: "flex",
        width: "80%",
        boxSizing: "border-box",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "16px",
        paddingRight: "16px",
      },
    },
  },
});
function App() {
  //STATE FOR IP DATA
  const [IPData, setIPData] = useState({});
  //STATE FOR COORDINATES
  const [position, setPosition] = useState([]);
  //LOADING STATE
  const [loading, setLoading] = useState(true);

  //VALUE INTRODUCED BY CLIENT
  const ipByClient = useRef(null);

  useEffect(() => {
    try {
      fetchIP("", setIPData, setPosition, setLoading);
    } catch (e) {
      console.log(e);
      console.log("Error Fetching");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let ip = ipByClient.current.value;
    fetchIP(ip, setIPData, setPosition, setLoading);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Search ipByClient={ipByClient} handleSubmit={handleSubmit} />
      <ThemeProvider theme={theme}>
        <IPDetails IPData={IPData} />
      </ThemeProvider>
      <Map IPData={IPData} position={position} />
    </>
  );
}

export default App;
