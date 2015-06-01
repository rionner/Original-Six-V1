var mongoose = require('mongoose');
var TeamsSchema = new mongoose.Schema({
    playoffs: Boolean,
    team: String,
    year: String,
    games_played: Number,
    home_games: Number,
    road_games: Number,
    wins: Number,
    losses: Number,
    overtime: Number,
    shootout: Number,
    team_goals: Number,
    avg_goals_for: Number,
    opponent_goals: Number,
    avg_goals_against: Number,
    total_attendance: Number,
    home_attendance: Number
});

// export
module.exports = mongoose.model('TeamsSchema', TeamsSchema);
