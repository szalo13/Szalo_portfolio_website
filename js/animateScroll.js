(function() {
    
 classname = document.getElementsByClassName("page-scroll");
    for (var i=0; i < classname.length; i++){
    classname[i].onclick = function(e){
        event.preventDefault ? event.preventDefault() : (event.returnValue=false);
        
        var classHref = (e.target.getAttribute("href"));
        var elementHeight = classHref.slice(1, classHref.length);
        elementHeight = document.getElementById(elementHeight).offsetTop;

        function animateScroll(){
            if (document.body.scrollTop < elementHeight){
                    var distance = 30;
                    var heightCheck = document.body.scrollTop;
                    if ((elementHeight - document.body.scrollTop) < 300) distance = distance / 2;
                    if ((elementHeight - document.body.scrollTop) < 60) distance = 1;
                    window.scrollBy(0, distance);
                    if (document.body.scrollTop != heightCheck) setTimeout(animateScroll, 1);
            } else if (document.body.scrollTop > elementHeight){
                    var distance = 30;
                    var heightCheck = document.body.scrollTop;
                    if ((document.body.scrollTop - elementHeight) < 300) distance = distance / 2;
                    if ((document.body.scrollTop - elementHeight) < 60) distance = 1;
                    window.scrollBy(0, -distance);
                    if (document.body.scrollTop != heightCheck) setTimeout(animateScroll, 1);
            }
        }
        animateScroll();
        }
    };
})();

