var period = 24 * 60 * 60 * 15;
var cardPriceJPY = 400000

$(document).ready( function() {
    updateGemPrice();
});

function updateGemPrice() {
    let date = new Date();
    let ang = angle(date.getHours());
    let modAngle = Math.PI * 2 * ((date.getTime() / 1000) % period) / period;
    let gemsPerCard = Math.sin(ang) * 4 + Math.sin(modAngle) * 2 + 12;
    let JPYperGem = cardPriceJPY / gemsPerCard
    $("p.gem").text("Gem price: " + JPYperGem.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " JPY");
	$("p.gem-time").text($.format.date(date, "MMM d, H:mm"));
}

function angle(hour) {
    return Math.PI * 2 * ((hour - 1) % 12) / 12
}