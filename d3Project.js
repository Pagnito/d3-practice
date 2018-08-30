import * as d3 from "d3";

const chartHeight = "100%";
const chartWidth = "100%";

var data = [];
for (var i = 0; i < 30; i++) {
  data.push(Math.floor(Math.random() * (90 - 20)) + 20);
}
var svg = d3.select(".chart1").append("svg");
svg.attr("height", chartHeight).attr("width", chartWidth);

svg
  .selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d, i) => (100 / data.length) * i + "%")
  .attr("y", d => 200 - d)
  .attr("height", d => d)
  .style("fill", d => (d < 40 ? "white" : d > 80 ? "#f9e87a" : "lightgreen"))
  .attr("width", 95 / data.length + "%");
