/*
* On page load
*/
window.addEventListener("load", () => {
    // Load Crypto list
    $(".navbar").load("components/header.html");
    $(".main").load("components/main.html");
    $("#tradingviewCryptoList").load("components/cryptoListFromTradingviews.html");
    
});