function plotWinsLosses(data){
  var n = 2; // number of layers
  var m = 18; // number of samples per layer
  var stack = d3.layout.stack();

  var wins = data.map(function(d, i){
    if (!d.playoffs) {
      var year = parseInt(d.year.substr(0, 4));
      return {x: year-1997, y: d.wins, y0: d.losses };
    } else {
      return null;
    }
  }).filter(function(n){return n;});

  var losses = data.map(function(d, i){
    var year = parseInt(d.year.substr(0, 4));
    if (!d.playoffs) {
      return {x: year-1997, y: d.losses, y0: 0 };
    } else {
      return null;
    }
  }).filter(function(n){return n;});

  var layers=[wins, losses];

  var yGroupMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y; }); });
  var yStackMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); });

  var margin = {top: 40, right: 10, bottom: 20, left: 10},
      width = 700 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

  var x = d3.scale.ordinal()
      .domain(d3.range(m))
      .rangeRoundBands([0, width], .08);

  var y = d3.scale.linear()
      .domain([0, yStackMax])
      .range([height, 0]);

  var teamPrimaryColor;
  var teamSecondaryColor;

  var primaryColors = data.map(function(d, i){
    if (d.team === 'Blackhawks') {
      var teamPrimaryColor = '#e3263a' };
  })
    // else if (d.team == 'Bruins') {
    //
    // } {
    //   return null;
    // }
  // });

  var secondaryColors = data.map(function(d, i){
    if (d.team === 'Blackhawks') {
      var teamSecondaryColor ='#000' };
    });

  var color = d3.scale.linear()
      .domain([0, n - 1])
      .range([teamPrimaryColor, teamSecondaryColor]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .tickSize(0)
      .tickPadding(6)
      .orient("bottom");

  var svg = d3.select(".win-loss").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var layer = svg.selectAll(".layer")
      .data(layers)
      .enter().append("g")
      .attr("class", "layer")
      .style("fill", function(d, i) { return color(i); });

  var rect = layer.selectAll("rect")
      .data(function(d) { return d; })
      .enter().append("rect")
      .attr("x", function(d) { return x(d.x); })
      .attr("y", height)
      .attr("width", x.rangeBand())
      .attr("height", 0);

  rect.transition()
      .delay(function(d, i) { return i * 10; })
      .attr("y", function(d) { return y(d.y0 + d.y); })
      .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); });

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  d3.selectAll("input").on("change", change);

  var timeout = setTimeout(function() {
    d3.select("input[value=\"grouped\"]").property("checked", true).each(change);
  }, 3000);

  function change() {
    clearTimeout(timeout);
    if (this.value === "grouped") transitionGrouped();
    else transitionStacked();
  }

  function transitionGrouped() {
    y.domain([0, yGroupMax]);

    rect.transition()
        .duration(500)
        .delay(function(d, i) { return i * 10; })
        .attr("x", function(d, i, j) { return x(d.x) + x.rangeBand() / n * j; })
        .attr("width", x.rangeBand() / n)
      .transition()
        .attr("y", function(d) { return y(d.y); })
        .attr("height", function(d) { return height - y(d.y); });
  }

  function transitionStacked() {
    y.domain([0, yStackMax]);

    rect.transition()
        .duration(500)
        .delay(function(d, i) { return i * 10; })
        .attr("y", function(d) { return y(d.y0 + d.y); })
        .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); })
      .transition()
        .attr("x", function(d) { return x(d.x); })
        .attr("width", x.rangeBand());
  }

}; // function plotWinsLosses
