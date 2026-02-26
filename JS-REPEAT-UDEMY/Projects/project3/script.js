const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmud',
    players: [
        [
            'Player1',
            'Player2',
            'Player3',
            'Player4',
            'Player5',
            'Player6',
            'Player7',
            'Player8',
            'Player9',
            'Player10',
        ],
        [
            'Player11',
            'Player12',
            'Player13',
            'Player14',
            'Player15',
            'Player16',
            'Player17',
            'Player18',
            'Player19',
            'Player20',
        ],
    ],
    score: '4:0',
    scored: ['Player1', 'Player2', 'Player3', 'Player4'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 11.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Player21', 'Player22', 'Player23'];
console.log(players1Final);

//5
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

//6
const printGoals = function(...players){
    console.log(`${players.length} goals were scored`)
}
printGoals('Player1', 'Player2', 'Player3', 'Player4',)
    printGoals('Player11', 'Player12')

//7
team1< team2 && console.log(`Team 1 is more likely to win`);
team1> team2 && console.log(`Team 2 is more likely to win`);
