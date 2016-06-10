// constants
var vOffset=120;

// variables
var x0=0;
var y0=0;
var w=0;
var h=0;

$(document).ready( function() {
    setTimeout('generate()');
    resize();
});

$(window).resize( resize );

function resize() {
    $(".dot").remove();
    $("#warp-bg").width($(window).width());
    w=$(window).width();
    h=$(window).height();
    x0=w/2;
    y0=h/2+vOffset;
}

function generate() {
    for (var i = 0; i < 5 && w > 480; i++) {
	var dot = $("<div class=\"dot\"></div>");
	dot.offset({left:x0, top: y0});
	var size=Math.ceil(Math.random()*2);
	dot.width(size);
	dot.height(size);
	$("#warp-bg").append(dot);

	var rad = Math.random() * Math.PI * 2;
	var x = w * Math.cos(rad);
	var y = h * Math.sin(rad);
	var interval = Math.random() * 80000;
	dot.animate({
	    top: '+=' + y + 'px',
	    left: '+=' + x + 'px',
	    opacity: 0.1
	}, interval, function() {
	    $( this ).remove();
	})
    }

    var delay = Math.random() * 1000;
    // console.log($(".dot").length);
    setTimeout('generate()', delay);
}
