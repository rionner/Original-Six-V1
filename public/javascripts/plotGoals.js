function plotGoals(data){

  var n = 2;

  var goals = data.map(function(d, i){
    if (!d.playoffs) {
      var year = parseInt(d.year.substr(0, 4));
      return { date: year, goals_for: d.team_goals, goals_against: d.opponent_goals };
    } else {
      return null;
    }
  }).filter(function(n){return n;});

  var parseDate = d3.time.format("%m/%d/%Y").parse;

  for (i = 0; i < data.length; i++) {
            data[i].year = parseDate(data[i].Date);
        }


  var colors = data.map(function(d, i) {
      var arr = [];
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
          arr.push(selectedColor);
      }
      return arr;
  });


  var color = d3.scale.linear()
    .domain([0, n - 1])
    .range(colors[0]);


  var width = 960,
      height = 500,
      radius = height / 2 - 10;

  var arc = d3.svg.arc()
      .innerRadius(radius - 40)
      .outerRadius(radius);

  var pie = d3.layout.pie()
      .padAngle(.02);

  var color = d3.scale.category10();

  var svg = d3.select(".total-goals").append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var path = svg.selectAll("path")
      .data(pie(goals))
      .enter().append("path")
      .style("fill", function(d, i) { return color(i); })
      .attr("d", arc);


};
