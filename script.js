function check()
{
    var score=0;
    var q1=document.quiz.quest1.value;
    var q2=document.quiz.quest2.value;
    var q3=document.quiz.quest3.value;
    var q4=document.quiz.quest4.value;
    var q5=document.quiz.quest5.value;
    
    if(q1=="A"){score++;}
    if(q2=="B"){score++;}
    if(q3=="C"){score++;}
    if(q4=="C"){score++}
    if(q5=="A"){score++}
    
    var percent= (score/5)*100;
  
 document.getElementById('result').innerHTML= "Your Score is : " + parseInt(percent)+"%";
}