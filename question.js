class Question {
    constructor(category,difficulty)
    {
        this.apiKey = '9QiWGibXF1CWhVTk7alAIJdE3D5J73OT9NrMjPxw';
        this.category = category; 
        this.difficulty = difficulty;
    }

    //fetch question from API
    async getQuestion() {
        const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=${this.apiKey}&category=${this.category}&difficulty=${this.difficulty}&limit=1`);
        
        const responseData = await response.json();
    
        return responseData;
    }

    changeQuestion(category,difficulty)
    {
        this.category = category;
        this.difficulty = difficulty;
    }
}

