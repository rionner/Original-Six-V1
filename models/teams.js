var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({

  name: Object,
    year: String,
    games_played: Integer,
    home_games: Integer,
    road_games: Integer,
    wins: Integer,
    losses: Integer,
    overtime: Integer,
    shootout: Integer,
    team_goals: Integer,
    avg_goals_for: Integer,
    opponent_goals: Integer,
    avg_goals_against: Integer,
    total_attendance: Integer,
    home_attendance: Integer,  
});

// export
module.exports = mongoose.model('Team', TeamSchema);
