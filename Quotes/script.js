const quotes = [
    {name: "Stephen King", quote: "Get busy living or get busy dying."},
    {name: "Meraj Khan", qoute: "Unless you are not doing something to improve your current situation, do not complain."}]

hexBtn.addEventListener("click", getHex);

function getHex(){
    let hexCol = "#";

    for (let i = 0; i<6; i++){
        let random = Math.floor(Math.random()*hexNumbers.length);
        hexCol+=hexNumbers[random];
        console.log(hexCol);

    }
    bodyBcg.style.backgroundColor= hexCol;
    hex.innerHTML = hexCol;

}