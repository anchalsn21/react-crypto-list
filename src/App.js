import React, { useState, useEffect } from "react";
import { getApiData } from "./api/api";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "./components/AppBar";
import CoinTable from "./components/Coins/CoinsTable";
import { Container } from "@material-ui/core";
import TableLoader from "./components/Coins/TableLoader";
import CurrencyFilter from "./components/CurrencyFilter";
import TextField from "@material-ui/core/TextField";

import "./App.css";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "300px",
    },
  },
}));

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currency, setCurrency] = useState("inr");
  const [query, setQuery] = useState("");

  const classes = useStyles();

  const getCryptoData = async (curr) => {
    try {
      setLoading(true);
      const { data } = await getApiData({
        currency: curr,
        page: 1,
        order: "market_cap_desc",
      });
      setCryptoData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(async () => {
    await getCryptoData(currency);
  }, []);

  const filterCurrency = async (curr) => {
    try {
      setCurrency(curr);
      await getCryptoData(curr);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  };

  const filteredCoins = cryptoData.filter((coin) =>
    coin.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="top__container">
      <AppBar />
      <Container>
        <header className="main__header"></header>
        <div className="filter__header">
          <div className="currency__filter">
            <CurrencyFilter
              selectedCurrency={currency}
              changeCurrency={filterCurrency}
            />
          </div>
        </div>

        <div className="content__container">
          <div className="search Block">
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                onChange={(e) => setQuery(e.target.value)}
                id="outlined-basic"
                label="Search Coin"
                variant="outlined"
              />
            </form>
          </div>
        </div>
        {isLoading ? (
          <TableLoader />
        ) : (
          <CoinTable selectedCurrency={currency} data={filteredCoins} />
        )}
      </Container>
    </div>
  );
}

export default App;
