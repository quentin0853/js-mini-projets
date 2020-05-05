$( document ).ready(function() {

    let count=0;

    function ClickFlip() {
        $(this).addClass('flipped');
    }

    function HoverOnCard(){
        $(this).addClass('hovered')
    }
    $('.back-card').click(ClickFlip).hover(HoverOnCard);;

    function CountReturnedCard() {
        if ($(this).hasClass("flipped")){
            var CheckCard = $('.front-card').attr('src');
            count+=1;
            console.log(CheckCard);
        };
        if (count==2){
            console.log('toto')
            if (CheckCard == $('.front-card').attr('src')){
                
            }
            else{

            }

        };
    }

    $('.back-card').click(CountReturnedCard);














































});