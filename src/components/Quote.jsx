import React from "react";

import "../styles/Quote.css";

const Quote = ({ showing, showAQuote }) => {
  return (
    <div className="quoteContainer">
      {showing ? (
        <div>
          <p className="quote" />
          <button onClick={showAQuote}>Show another?</button>
        </div>
      ) : (
        <div>
          <h3>In need of some wisdom?</h3>
          <button style={{ color: "black", margin: "0" }} onClick={showAQuote}>
            Show me a quote!
          </button>
        </div>
      )}
    </div>
  );
};

export default Quote;
