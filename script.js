'use strict';

console.log(document.querySelector('.message').textContent);

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score =20;
let highscore =0;

document.querySelector('.number').textContent = '?';
// console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function(){
    const guess= Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    if(!guess)
    {
        document.querySelector('.message').textContent="No Number";
    }
    else if(guess === secretNumber)
    {
        document.querySelector('.message').textContent= ' ... Correct Number ... ';
        document.querySelector('.number').textContent = secretNumber;

        if(score > highscore)
        {
            document.querySelector('.highscore').textContent = score;
        }

        document.querySelector('body').style.background ='green';
        // document.querySelector('body').style.width ='20rem';

    }
    else if (guess !== secretNumber)
    {
        if(score >1)
            {
                document.querySelector('.message').textContent = guess > secretNumber ? '... Too High ... ' : '... Too Low ..';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else
            {
                document.querySelector('.score').textContent = 0;
                document.querySelector('.message').textContent = 'Your are Eliminated ';
            }
    }
    // else if(guess < secretNumber)
    // {
    //     if(score >1)
    //     {
    //         document.querySelector('.message').textContent = '... Too Low ... ';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else
    //     {
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('.message').textContent = 'Your are Eliminated ';
    //     }
        
    // }
    // else if(guess > secretNumber)
    // {
    //     if(score >1)
    //     {
    //         document.querySelector('.message').textContent = '... Too High ... ';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else
    //     {
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('.message').textContent = 'Your are Eliminated ';
    //     }
        
    // }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;

    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start Guessing';
    document.querySelector('.number').textContent =  '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.background ='black';

})