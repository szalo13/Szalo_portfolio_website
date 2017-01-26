(function() {
    
    function enoughSigns(field, min)
    {
        return field.value.length > min;
    }
    
    
    
    var myForm = document.querySelector("#my-form"),
        fields = document.querySelectorAll("[data-error]"), 
        isValid = false,
        emailValid = false,
        errors = [];
    
    addEventListener("submit", function(e){
        e.preventDefault();
        errors = [];
        
        for(var i = 0; i < fields.length; i++){
            
            var field = fields[i],
                regexr = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
            
            if (field.type == "text"){
                isValid = enoughSigns(field, 2);
            } else if (field.type == "email"){
                isValid = regexr.test(field.value);
            } else if (field.type == "textarea"){
                isValid = enoughSigns(field, 10);
            }
            
            if(!isValid){
                errors.push(field.dataset.error);
            }            
        }
        
        console.log(errors);

        
    }, false);
    
})();
    