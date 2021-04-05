class UI {
    constructor()
    {
        this.question = document.getElementById('question'); 
        this.answer1 = document.getElementById('answer1'); 
        this.answer2 = document.getElementById('answer2'); 
        this.answer3 = document.getElementById('answer3'); 
        this.answer4 = document.getElementById('answer4'); 
        this.correctAnswer = document.getElementById('correctAnswer'); 
    }

    paint(question)
    {
        var index = 0;
        this.question.textContent = question[0].question;
        this.answer1.textContent = question[0].answers.answer_a;
        this.answer2.textContent = question[0].answers.answer_b;
        this.answer3.textContent = question[0].answers.answer_c;
        this.answer4.textContent = question[0].answers.answer_d; 
        if(question[0].correct_answers.answer_a_correct == "true")
        {
           this.correctAnswer.textContent = question[0].answers.answer_a;
        }
        if(question[0].correct_answers.answer_b_correct == "true")
        {
           this.correctAnswer.textContent = question[0].answers.answer_b;
        }
        if(question[0].correct_answers.answer_c_correct == "true")
        {
           this.correctAnswer.textContent = question[0].answers.answer_c;
        }
        if(question[0].correct_answers.answer_d_correct == "true")
        {
           this.correctAnswer.textContent = question[0].answers.answer_d;
        }
    }
}