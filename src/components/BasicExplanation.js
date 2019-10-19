import React from "react"
import Paper from "@material-ui/core/Paper"

class BasicExplanation extends React.Component {
  render() {
    return (
      <div
        className="explanation"
        style={{
          alignItems: "center",
          margin: "10px"
        }}
      >
        <Paper
          style={{
            padding: "40px"
          }}
          justify="center"
        >
          <h3>What is this?</h3>
          <p>
            This is a simple calculator that tells you how much it will cost (in
            items) to upgrade a minion to a selected tier.
          </p>
        </Paper>
      </div>
    )
  }
}

export default BasicExplanation
