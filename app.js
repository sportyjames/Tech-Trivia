const question = new Question('sql','Medium'); 

//initalize UI
const ui = new UI();

//get question on DOM load
document.addEventListener('DOMContentLoaded',getQuestion);

// Change question event
document.getElementById('switch-btn').addEventListener('click', (e) => {
    const category = document.getElementById('category').value;
    const difficulty = document.getElementById('difficulty').value;
  
    // Change 
    question.changeQuestion(category, difficulty);
  
    // Get and display question
    getQuestion();
  
    
  });


function getQuestion(){
    question.getQuestion()
        .then(result => {
            ui.paint(result);
            console.log(result);
        })
        .catch((err) => console.log(err));
}

// //Check if answer correct
document.getElementById('answer1').addEventListener('click', (e) => {
    const ans = document.getElementById('answer1').textContent;
    const correct_ans = document.getElementById('correctAnswer').textContent;
    if(ans === correct_ans)
    {
        alert("Correct!");
    }
    else
    {
        alert("Wrong!");
    }

    //get new question
    getQuestion();

    
  });

//Check if answer correct
document.getElementById('answer2').addEventListener('click', (e) => {
    const ans = document.getElementById('answer2').textContent;
    const correct_ans = document.getElementById('correctAnswer').textContent;
    if(ans === correct_ans)
    {
        alert("Correct!");
    }
    else
    {
        alert("Wrong!");
    }

    //get new question
    getQuestion();

    
  });

//Check if answer correct
document.getElementById('answer3').addEventListener('click', (e) => {
    const ans = document.getElementById('answer3').textContent;
    const correct_ans = document.getElementById('correctAnswer').textContent;
    if(ans === correct_ans)
    {
        alert("Correct!");
    }
    else
    {
        alert("Wrong!");
    }

    //get new question
    getQuestion();

    
  });

//Check if answer correct
document.getElementById('answer4').addEventListener('click', (e) => {
    const ans = document.getElementById('answer4').textContent;
    const correct_ans = document.getElementById('correctAnswer').textContent;
    if(ans === correct_ans)
    {
        alert("Correct!");
    }
    else
    {
        alert("Wrong!");
    }

    //get new question
    getQuestion();

    
  });