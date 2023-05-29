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
    function computeRanks(number, games) {
  
  let todosLosEquipos = {}
    
  for (let team = 0; team < number; team++){
    let teamPoints = 0
    let teamGD = 0
    let golesAFavor = 0
    let golesEnContra = 0
    
    for (let game of games) {
    
      if (team === game[0] || team === game[1]){

          let teamPos = game.indexOf(team)
          let teamGoalsIndex = teamPos + 2
          let teamGoals = game[teamGoalsIndex]
          let rivalGoalsIndex = 0
          
          console.log(teamGoalsIndex)
          
          if (teamGoalsIndex === 2){
              rivalGoalsIndex = 3
          }
          
          else {
              rivalGoalsIndex = 2
          }
          
          console.log(rivalGoalsIndex)
          
          let rivalGoals = game[rivalGoalsIndex]

          golesAFavor = golesAFavor + teamGoals

          golesEnContra = golesEnContra + rivalGoals

          teamGD = golesAFavor - golesEnContra

          if (teamGoals > rivalGoals){
              teamPoints = teamPoints + 2
          }
          else if (teamGoals === rivalGoals) {
              teamPoints = teamPoints + 1
          }

      }

    }
    
    let equipo = {
      puntos: teamPoints,
      gd: teamGD,
      gf: golesAFavor,
      gc: golesEnContra
    }
    
    todosLosEquipos[`${team}`] = equipo
    
  }
  
  return todosLosEquipos
  
//   falta generar el array q es output
  
}
}