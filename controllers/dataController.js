$(document).ready(function(){

  // team = blackhawks;
  // bruins
  // canadiens
  // mapleleafs
  // redwings
  // rangers

  $.ajax({
    method: 'get',
    url: '/api/blackhawks',
    dataType: json,
    success: function(data){
      console.log('success', data);
      // id =
      // team =
      // playoffs =
      // year =
      // games_played =
      // home_games =
      // road_games =
      // wins =
      // losses =
      // overtime =
      // shootout =
      // team_goals =
      // avg_goals_for =
      // opponent_goals =
      // avg_goals_against =
      // total_attendance =
      // home_attendance =
    }

  });

});
