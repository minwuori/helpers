// скрыть/показать правила
function showRules(){

    var btns = document.querySelectorAll('.rules__content');

    btns.forEach(function(btn){

        btn.addEventListener('click', function(evt){

            var rules = btn.querySelector('.rules__list');
            
            if (btn.querySelector('.show')) {

                rules.classList.remove('show');
                setTimeout(function(){
                	rules.classList.remove('mt_20')
                }, 915)

            } else{

                rules.classList.add('show', 'mt_20')

            }
            
        });
    });
}