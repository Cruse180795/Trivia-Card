$(document).ready(() =>{
    
    const $wrongOne = $('.wrong-answer-one');
    const $wrongTwo = $('.wrong-answer-two');
    const $wrongThree = $('.wrong-answer-three');
    
    const $wrongTextOne = $('.wrong-text-one');
    const $wrongTextTwo = $('.wrong-text-two');
    const $wrongTextThree = $('.wrong-text-three');
    const $frown = $('.frown');
    const $smiley = $('.smiley');
    const $btn = $('.btn');

    

    function handleHitBox(){
        const $hitBox = $('.hint-box');

        $hitBox.on('click', () =>{
            $('.hint').slideToggle(500);
        });
    }

    function handleWrongAnswers(){

        $wrongOne.on('click', () =>{
            $wrongTextOne.fadeOut('slow');
            $frown.show();
            $btn.show();
        });

        $wrongTwo.on('click', () =>{
            $wrongTextTwo.fadeOut('slow');
            $frown.show();
            $btn.show();
        });

        $wrongThree.on('click', () =>{
            $wrongTextThree.fadeOut('slow');
            $frown.show();
            $btn.show();
        });
    }

    function handleCorrectAnswer(){

        const $correctAnswer = $('.correct-answer');
        

        $correctAnswer.on('click', () =>{
            $frown.hide();
            $smiley.show();
            $btn.show();
            $wrongTextOne.fadeOut('slow');
            $wrongTextTwo.fadeOut('slow');
            $wrongTextThree.fadeOut('slow');
        });
    }

    function ButtonReset(){
        
        $btn.on('click', () =>{
            $btn.hide();
            $smiley.hide();
            $frown.hide();
            $wrongTextOne.show();
            $wrongTextTwo.show();
            $wrongTextThree.show();
        });
    }

    handleHitBox();
    handleWrongAnswers();
    handleCorrectAnswer();
    ButtonReset();
})
    