// Description
// You organize a sports league in a round-robin-system. Each team meets all other teams. In your league a win gives a team 2 points, a draw gives both teams 1 point. After some games you have to compute the order of the teams in your league. You use the following criteria to arrange the teams:

// Points
// Scoring differential (the difference between goals scored and those conceded)
// Goals scored
// First you sort the teams by their points. If two or more teams reached the same number of points, the second criteria comes into play and so on. Finally, if all criteria are the same, the teams share a place.

// Input
// number: Number of teams in your league.
// games: An array of arrays. Each item represents a played game with an array of four elements [TeamA,TeamB,GoalA,GoalB] (TeamA played against TeamB and scored GoalA goals and conceded GoalB goals ).
// Output
// positions: An array of positions. The i-th item should be the position of the i-th team in your league.
// Example
// number = 6
// games = [[0, 5, 2, 2],   // Team 0 - Team 5 => 2:2
//          [1, 4, 0, 2],   // Team 1 - Team 4 => 0:2
//          [2, 3, 1, 2],   // Team 2 - Team 3 => 1:2
//          [1, 5, 2, 2],   // Team 1 - Team 5 => 2:2
//          [2, 0, 1, 1],   // Team 2 - Team 0 => 1:1
//          [3, 4, 1, 1],   // Team 3 - Team 4 => 1:1
//          [2, 5, 0, 2],   // Team 2 - Team 5 => 0:2
//          [3, 1, 1, 1],   // Team 3 - Team 1 => 1:1
//          [4, 0, 2, 0]]   // Team 4 - Team 0 => 2:0
// You may compute the following table:

// Rank	Team	For : Against	GD	Points
// 1.	Team 4	5 : 1	+4	5
// 2.	Team 5	6 : 4	+2	4
// 3.	Team 3	4 : 3	+1	4
// 4.	Team 0	3 : 5	-2	2
// 4.	Team 1	3 : 5	-2	2
// 6.	Team 2	2 : 5	-3	1
// Team 5 and Team 3 reached the same number of points. But since Team 5 got a better scoring differential, it ranks better than Team 3. All values of Team 0 and Team 1 are the same, so these teams share the fourth place.

// In this example you have to return the array [4, 4, 6, 3, 1, 2].



function computeRanks(number, games) {
  // Step 1: Create an array of objects to store team information
  let teams = [];
  for (let i = 0; i < number; i++) {
    teams.push({ team_number: i, points: 0, goal_diff: 0, goals_scored: 0 });
  }

  // Step 2: Update team information based on the games
  for (let game of games) {
    let [teamA, teamB, goalA, goalB] = game;
    teams[teamA].goals_scored += goalA;
    teams[teamA].goal_diff += goalA - goalB;
    teams[teamB].goals_scored += goalB;
    teams[teamB].goal_diff += goalB - goalA;

    if (goalA > goalB) {
      teams[teamA].points += 2; // Team A wins
    } else if (goalA < goalB) {
      teams[teamB].points += 2; // Team B wins
    } else {
      teams[teamA].points += 1; // Draw
      teams[teamB].points += 1;
    }
  }

  // Step 3: Sort the teams based on criteria
  teams.sort((a, b) => {
    if (a.points !== b.points) {
      return b.points - a.points; // Sort by points (descending)
    } else if (a.goal_diff !== b.goal_diff) {
      return b.goal_diff - a.goal_diff; // Sort by goal difference (descending)
    } else {
      return b.goals_scored - a.goals_scored; // Sort by goals scored (descending)
    }
  });

  // Step 4: Assign positions based on ranking
  let positions = [];
  let rank = 1;
  let prevTeam = teams[0];
  for (let i = 0; i < number; i++) {
    let team = teams[i];
    if (i > 0 && (team.points !== prevTeam.points || team.goal_diff !== prevTeam.goal_diff || team.goals_scored !== prevTeam.goals_scored)) {
      rank = i + 1;
    }
    positions[team.team_number] = rank;
    prevTeam = team;
  }

  // Step 5: Return the positions array
  return positions;
}