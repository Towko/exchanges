$(document).ready(function() {
    $(".lang-switcher__link--current").click(function(){
        $(".lang-switcher__dropdown").toggleClass("lang-switcher__dropdown--active")
    });
    
    $("#pic").mousemove(function(e) {
        parallaxIt(e, ".pic__par", -50);
    });
      
    function parallaxIt(e, target, movement) {
        var $this = $("#pic");
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;
        
        gsap.to(target, 1, {
            x: (relX - $this.width() / 2) / $this.width() * movement,
            y: (relY - $this.height() / 2) / $this.height() * movement
        });
    }
})
