require "nokogiri" # for single pages (use mechanize for multiple pages)
require "open-uri"
require 'json'


global_data = (1997..2014).map do |year|

  year1 = year
  year2 = year.to_i + 1

  # maple leafs
  # url = "http://mapleleafs.nhl.com/club/gamelog.htm?season=#{year1}#{year2}&gameType=3"

  # rangers
  # url = "http://rangers.nhl.com/club/gamelog.htm?season=#{year1}#{year2}&gameType=3"

  # canadiens
  # url = "http://canadiens.nhl.com/club/gamelog.htm?season=#{year1}#{year2}&gameType=2"

  # red wings
  # url = "http://redwings.nhl.com/club/gamelog.htm?season=#{year1}#{year2}&gameType=3"

  # bruins
  # url = "http://bruins.nhl.com/club/gamelog.htm?season=#{year1}#{year2}&gameType=2"

  # blackhawks
  # url = "http://blackhawks.nhl.com/club/gamelog.htm?season=#{year1}#{year2}&gameType=2"
  # puts url

  doc = Nokogiri::HTML(open(url))

  season = { year: "#{year1}-#{year2}", games_played: 0, home_games: 0, road_games: 0, wins: 0, losses: 0, overtime: 0, shootout: 0, team_goals: 0, avg_goals_for: 0, opponent_goals: 0, avg_goals_against: 0, total_attendance: 0, home_attendance: 0 }

  doc.css('.data').map do |item|

    item.css('tr').each do |row|

    # GAME DECISION TOTALS
      # win, loss, and overtime count
      win_loss = row.css('td:nth-child(4)').text

      if (win_loss == 'W')
        season[:wins] += 1
      elsif (win_loss == 'L')
        season[:losses] += 1
      elsif (win_loss == 'O')
        season[:overtime] += 1
      end

      # shootout count
      shootout = row.css('td:nth-child(5)').text
      if (shootout == 'SO')
        season[:shootout] += 1
      end



    # GOAL TOTALS
      # scored by blackhawks
      goals_for = row.css('td:nth-child(8)').text
      if (goals_for)
        season[:team_goals] += goals_for.to_i
      end

      # scored by opponent
      goals_against = row.css('td:nth-child(9)').text
      if (goals_against)
        season[:opponent_goals] += goals_against.to_i
      end



    # HOME vs ROAD GAME COUNT
      home_road = row.css('td:nth-child(3)').text
      if (home_road === 'H')
        season[:home_games] += 1
      elsif (home_road == 'R')
        season[:road_games] += 1
      end



    # TOTAL ATTENDANCE
      attendance = row.css('td:nth-child(18)').text.to_i
      season[:total_attendance] += attendance

      # total attendance for home games
      if (home_road === 'H')
        season[:home_attendance] += attendance.to_i
      end



      # total games played
      season[:games_played] = season[:wins].to_i + season[:losses].to_i + season[:overtime].to_i


      # average team goals
      avg_goals_for = season[:team_goals].to_i / season[:games_played].to_i.to_f
      season[:avg_goals_for] = avg_goals_for.round(2)

      # average opponent goals
      avg_goals_against = season[:opponent_goals].to_i / season[:games_played].to_i.to_f
      season[:avg_goals_against] = avg_goals_against.round(2)

    end

  end

  # puts season
  sleep 1
  season
end


File.write('data.json', global_data.to_json)
