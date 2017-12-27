import React from "react";

import Quote from "../components/Quote";

const QuoteContainer = ({ showing, showAQuote }) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Quote showing={showing} showAQuote={showAQuote} />
    </div>
  );
};

export default QuoteContainer;
