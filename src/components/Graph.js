import React, { Component } from "react";
import { Paper, Typography, Select, MenuItem } from "@material-ui/core";
import { Chart } from "react-google-charts";

class Graph extends Component {
  state = {
    selectedDuration: "6"
  };

  handleChange = event => {
    this.setState({ selectedDuration: event.target.value });
  };

  render() {
    const style = {
      Paper: { padding: "20px", marginTop: "40px" },
      Title: { fontSize: "18px", color: "#4D4F5C", flex: "4" }
    };

    return (
      <Paper style={style.Paper} elevation={1}>
        <div style={{ display: "flex" }}>
          <Typography variant="caption" style={style.Title}>
            Statistics
          </Typography>
          <Select
            value={this.state.selectedDuration}
            onChange={this.handleChange}
          >
            <MenuItem value={6}>Last 6 Months</MenuItem>
            <MenuItem value={12}>Last 12 Months</MenuItem>
          </Select>
        </div>
        <Chart
          width={"100%"}
          height={"400px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["x", "dogs"],
            [0, 0],
            [1, 10],
            [2, 23],
            [3, 17],
            [4, 18],
            [5, 9],
            [6, 11],
            [7, 27],
            [8, 33],
            [9, 40],
            [10, 32],
            [11, 35]
          ]}
          options={{
            hAxis: {
              title: "Time"
            },
            vAxis: {
              title: "Popularity"
            }
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </Paper>
    );
  }
}

export default Graph;
