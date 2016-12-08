/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* listitem  30 Minutes */
    
    
        /* button  #Back Button Pancakes */
    
    
        /* button  #Back Button Pancakes */
    
    
        /* button  #Back Button Pancakes */
    
    
        /* button  #Back Button Pancakes */
    
    
        /* button  #Back Button Pancakes */
    
    
        /* listitem  30 Minutes */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_page */
         activate_page("#uib_page_1"); 
         return false;
    });
    
        /* button  #Back Button Pancakes */
    
    
        /* button  #Back Button Pancakes */
    $(document).on("click", "#Back Button Pancakes", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  #Back Button */
    
    
        /* button  #Back Button */
    $(document).on("click", "#Back Button", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
