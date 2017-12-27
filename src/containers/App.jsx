import React from "react";
import QuoteContainer from "./QuoteContainer";
import $ from "jquery";
import "../styles/Global.css";

class App extends React.Component {
  state = {
    showQuote: false
  };

  showAQuote = () => {
    $.getJSON(
      "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
      function(a) {
        $(".quote").html(a[0].content + "<p>&mdash; " + a[0].title + "</p>");
      }
    );

    const randomColorChange =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    $("body").css("background-color", randomColorChange);
    $("button").css("background-color", randomColorChange);

    // $("body").animate({
    //   backgroundColor: 
    // })

    this.setState({ showQuote: true });
  };

  render() {
    const { showQuote } = this.state;
    return (
      <div className="container">
        <QuoteContainer showing={showQuote} showAQuote={this.showAQuote} />
      </div>
    );
  }
}

export default App;
