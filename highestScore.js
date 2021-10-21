function HighestScore( t ){
    let tally = t.split('');
    let score = 0;
    let highestScore = 0;

    for ( let i = 0; i < tally.length; i++ ){
        if ( tally[i] == "W"){
            score++;
            if ( score > highestScore ){
                highestScore = score;
            }
        }
        if ( tally[i] == "L" ){
            score--;
        }
    }
    return highestScore;
}

console.log(HighestScore('LWWWLWWWWL'));