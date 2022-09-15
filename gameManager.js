
class gameManager{
    constructor(limit){
        this.limit = limit;
        this.current=0;
        this.quizs=[];
    }
    //ktra câu tra loi dung hay sai
    checkAnswer(ans){
        if(ans== this.quizs[this.current].correct){
            return true;
        }else
        {
            return false;
        }
    }
    //Chon câu tra loi
    
    chooseAnswer(ans){
        if(this.checkAnswer(ans)){
            alert ("bạn đã trả lời đúng");
            
            
        }
        else{
            alert("bạn đã trả lời sai");
        }
    }
    //chuyển câu hỏi
    nextQuiz(){
        if(this.current< this.limit-1){
            this.current++; 
        }else
        {
            alert ("bạn đã đến câu hỏi cuối");
            this.current=0;
        }
    }
    endGame(){
        alert("bạn đã trả lời sai, vui lòng chơi lại từ đầu");
        this.nextGame();
    }
    //Chơi lại từ đầu
    nextGame(){
        this.current=0;
    }
    //CRUD QUIZ TRONG GAME
    //add quiz vào trong game
        addQuizz(quiz){
            this.quizs.push(quiz);
        }
        deleteQuizz(index){
            this.quizs.splice(index,deleteCount,1);
        }
}