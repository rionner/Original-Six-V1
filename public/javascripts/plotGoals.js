function plotGoals(data){
  var n = 2;
  var width = 500;
  var height = 500;
  var radius = height / 2;

  var colors = data.map(function(d, i) {
      var colorArray = [];
      var temp = {};

      temp.primary_color = d.primary_color;
      temp.secondary_color = d.secondary_color;

      for (var color in temp) {
         var selectedColor = temp[color];

         selectedColor = selectedColor.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
         selectedColor = (selectedColor && selectedColor.length === 4) ? "#" +
          ("0" + parseInt(selectedColor[1],10).toString(16)).slice(-2) +
          ("0" + parseInt(selectedColor[2],10).toString(16)).slice(-2) +
          ("0" + parseInt(selectedColor[3],10).toString(16)).slice(-2) : '';

          temp[color] = selectedColor;
          colorArray.push(selectedColor);
      }
      return colorArray;
  });

  var color = d3.scale.linear()
    .range(colors[0]);

  var goalObjects = data.map(function(d, i){
    if (!d.playoffs) {
      var year = d.year.substr(0, 4);
      return ({ label: year, value: [d.team_goals, d.opponent_goals] }) ;
    }
    else {
      return null;
    }
  }).filter(function(n){return n;});

  goalsPairs = goalObjects.map(function(d){
    return d.value;
  });

  var goals = [].concat.apply([], goalsPairs).map(function(d){
    return {value: d};
  });

  var svg = d3.select(".total-goals").append("svg")
      .data([goals])
          .attr("width", width)
          .attr("height", height)
      .append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var arc = d3.svg.arc()
      .innerRadius(radius - 60)
      .outerRadius(radius);

  var pie = d3.layout.pie()
      .value(function(d, i) {
          return d.value
       })
      .padAngle(0.01)
      .sort(null);

  var arcs = svg.selectAll("g.slice")
      .data(pie)
      .enter()
          .append("g")
          .attr("class", "slice")
            .attr("fill", function(d,i) {
              return colors[0][i%2]; })
          .append("g")
          	.attr("class", "labels")
          .append("g")
          	.attr("class", "lines");

  arcs.append("path")
      .attr("d", arc);

  arcs.append("text")
      .data(goalObjects)
      // .attr("transform", function(d){
      //   d.innerRadius = 0;
      //   d.outerRadius = radius;
      //   return "translate(" + arc.centroid(d) + ")";
      // })
      .attr("text-anchor", "middle")
      .text(function(d, i) { return data[i].label; });

};
