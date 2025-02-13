let score = JSON.parse(localStorage.getItem('Score'));
          
    if(!score){
        score ={
        Win:0,
        Losses:0,
        Tie:0
          };
    }

    function updateScore(res){
      if(res==='WIN'){
        score.Win++;
      }
      else if(res==='LOSE'){
        score.Losses++;
      }
      else{
        score.Tie++;
      }
      updateScoreEle();
    }

    function reset(){
      score.Win=0;
      score.Losses=0;
      score.Tie=0;
      updateScoreEle();
    }

    function compname(){
        let random=Math.random();
        if(random>=0 && random<1/3){
          comp='ROCK';
        } else if(random>=1/3 && random<2/3){
          comp='PAPER';
        } else if(random>=2/3 && random<1){
          comp='SCISSORS';
        }
        return comp;
    }
    
    let isautoPlay= false;
    let intervalId;

    function autoplay(){
       if(!isautoPlay){
         intervalId=setInterval(function(){
  
          const playermove= compname();
          playgame(playermove)
  
         },1500);
         isautoPlay=true;
        }
        else{
          clearInterval(intervalId);
          isautoPlay=false;
        }

    }

    document.querySelector('.js-rock-button').addEventListener('click',()=>{

      playgame('ROCK');
    });

    document.querySelector('.paper-button').addEventListener('click',()=>{

      playgame('PAPER');
    });

    document.querySelector('.sci-button').addEventListener('click',()=>{

      playgame('SCISSORS');
    });

    function playgame(choice){
      var res='';
      comp=compname();
      if(choice==='ROCK'){
        if(comp === 'ROCK'){
          res='TIE';
        }
        else if(comp==='PAPER'){
        res='LOSE';
        }
        else{
        res='WIN';
        }
      }
      else if(choice==='PAPER'){
        res='';
        if(comp === 'ROCK'){
            res='WIN';
        }
        else if(comp==='PAPER'){
          res='TIE';
        }
        else{
          res='LOSE';
        }
      }
      else{
          res=''
          if(comp === 'ROCK'){
          res='LOSE';
          }
          else if(comp==='PAPER'){
          res='WIN';
          }
          else{
          res='TIE';
        }
      }
      updateScore(res);
      localStorage.setItem('Score',JSON.stringify(score));
      
      document.querySelector('.js-result').innerHTML=`${res}`;

      document.querySelector('.js-moves').innerHTML=`You <img src="${choice}-emoji.png">  - Computer <img src="${comp}-emoji.png">`;
    }
    

    function updateScoreEle(){
      document.querySelector('.js-score').innerHTML=`Wins: ${score.Win}, Losses: ${score.Losses} , Ties: ${score.Tie}`;
    }
    