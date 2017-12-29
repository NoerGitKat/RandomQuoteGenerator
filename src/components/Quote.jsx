import React from "react";
import quotationMarks from "../images/quote-symbols.png";
import "../styles/Quote.css";

const Quote = ({ showing, showAQuote }) => {
  return (
    <div className="quoteContainer">
      {showing ? (
        <div>
          <div className="quote" />
          <button onClick={showAQuote}>Show another?</button>
        </div>
      ) : (
        <div>
          <h3>In need of some wisdom?</h3>
          <button style={{ margin: "0" }} onClick={showAQuote}>
            Show me a quote!
          </button>
        </div>
      )}
    </div>
  );
};

export default Quote;
