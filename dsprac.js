

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  const [players1, players2]=game.players
  console.log(players1,players2);

  const [gk,...fieldplayers]=players1
  console.log(gk,fieldplayers);
  

  const allplayers=[...players1,...players2]
  console.log(allplayers);

  const players1Final=[allplayers,'Thiago','Countinho','Perisic']
  console.log(players1Final);

  const {team1,x:draw,team2}=game.odds
  console.log(team1,draw,team2);


  function printGoals(...players)
  {  
      console.log(players);
    console.log(`${players.length} goals were scored`);
  }
//   printGoals('Davies','Muller','Lewandoski','Kimich')

printGoals(...game.scored)

team1 < team2 &&
console.log('Team 1 is likely to win');

team1 > team2 &&
console.log('Team 2 is likely to win');

//goals
for (const [i,player] of game.scored.entries())
console.log(`Goal ${i +1}: ${player}`);


//avg
const odds=Object.values(game.odds)
let avg=0;
for(const odd of odds)
avg +=odd;
avg /= odds.length
console.log(avg);

//odds
for (const [team,odd] of Object.entries(game.odds))
{
   const teamStr=team==='x' ? 'draw' :`victory ${game[team]}`;
  console.log(`Odd of ${teamStr} is ${odd}`);

}

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
x: 3.25,
gameEvents.delete(64)
console.log(gameEvents);

console.log(`An event happened, on average, every ${gameEvents.size/90} minutes`);

const time=[...gameEvents.keys()].pop()
console.log(time);

//halves
for (const[min,event] of gameEvents)
{ 
  const half = min <=45 ? 'FIRST' : 'SECOND'
  console.log(`${half} [HALF] ${min} : ${event}`);
}

//coding challenge 4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
  😀
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click',function()
{
  const inp = document.querySelector('textarea').value
   const rows=inp.split('\n');
   console.log(rows);

   for(const [i,row]  of rows.entries())
   {
     const [first,second] = row.toLowerCase().trim().split('_')
     
     const output =`${first}${second.replace(second[0],second[0].toUpperCase())}`
     console.log(`${output.padEnd(20)}${'✅'.repeat(i+1)}`);
   }
  })

  const places='We love goa'
  const [init,others]=places.split('')
  console.log(init,others);

  
  const poll={
 question:"What is your favourite programming language",
 options :['0:Javascript','1:Python','2:Rust','3:C++','4:php'],

    registerNewAnswer()
  {   const answer=Number(
     prompt(`${this.question}\n ${this.options.join('\n')} \n(Write option number)`)
  )
  console.log(answer);
 typeof answer === 'number' && answer<this.answer.length && this.answer[answer]++;
  
 console.log(this.answer);
}
  
  }
  poll.registerNewAnswer();
  
  