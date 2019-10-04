(function(){
    "use strict";

    $('[data-toggle="sidebar"]').click(function(event){
        event.preventDefault();
        $('.app').toggleClass('sidebar-toggled');
        
    });
})();