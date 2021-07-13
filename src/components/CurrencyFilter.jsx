import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function CurrencyFilter({ selectedCurrency, changeCurrency }) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Select Market </FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="usd"
          checked={selectedCurrency === "usd"}
          control={<Radio color="primary" />}
          onChange={() => changeCurrency("usd")}
          label="USD"
          labelPlacement="top"
        />
        <FormControlLabel
          value="inr"
          checked={selectedCurrency === "inr"}
          onChange={() => changeCurrency("inr")}
          control={<Radio color="primary" />}
          label="INR"
          labelPlacement="top"
        />
      </RadioGroup>
    </FormControl>
  );
}
