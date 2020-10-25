// var scoresObj = {scoresStr : "Starting..."};
// alert("Starting "+ scoresObj.scoresStr);
// Try un-commenting above two lines, and nothing will work right. The alert popping up when you naviage between two pages will be instructive. 

function initialize(){
    var scoresObj = {scoresStr : ""};
    localStorage.setItem('scoresObj', JSON.stringify(scoresObj));
    alert("Initializing "+ scoresObj.scoresStr);
}



/* This writes the supposedly persistent object. */
function getAndStore() {
    scoresObj  = JSON.parse(localStorage.getItem('scoresObj'));
    tempStr = prompt("Enter name and score");
    scoresObj.scoresStr =  scoresObj.scoresStr + tempStr + ",";
    localStorage.setItem('scoresObj', JSON.stringify(scoresObj));
    console.log(scoresObj.scoresStr);
}

/* This is used to get the supposedly persistent object. */
function showScores() {
    scoresObj  = JSON.parse(localStorage.getItem('scoresObj'));
    console.log(scoresObj.scoresStr);
    alert("Current String:"+scoresObj.scoresStr)
}

/* This is used to clear the scores. */
function clearScores(){
    localStorage.clear();
}
