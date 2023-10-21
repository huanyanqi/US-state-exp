const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", 
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", 
    "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", 
    "New_Hampshire", "New_Jersey", "New_Mexico", "New_York", "North_Carolina", "North_Dakota", "Ohio", "Oklahoma", 
    "Oregon", "Pennsylvania", "Rhode_Island", "South_Carolina", "South_Dakota", "Tennessee", "Texas", "Utah", "Vermont", 
    "Virginia", "Washington", "West_Virginia", "Wisconsin", "Wyoming"];

const statePoints = {
    Alabama: 0,        Alaska: 0,
    Arizona: 0,        Arkansas: 0,
    California: 0,     Colorado: 0,
    Connecticut: 0,    Delaware: 0,
    Florida: 0,        Georgia: 0,
    Hawaii: 0,         Idaho: 0,
    Illinois: 0,       Indiana: 0,
    Iowa: 0,           Kansas: 0,
    Kentucky: 0,       Louisiana: 0,
    Maine: 0,          Maryland: 0,
    Massachusetts: 0,  Michigan: 0,
    Minnesota: 0,      Mississippi: 0,
    Missouri: 0,       Montana: 0,
    Nebraska: 0,       Nevada: 0,
    New_Hampshire: 0,  New_Jersey: 0,
    New_Mexico: 0,     New_York: 0,
    North_Carolina: 0, North_Dakota: 0,
    Ohio: 0,           Oklahoma: 0,
    Oregon: 0,         Pennsylvania: 0,
    Rhode_Island: 0,   South_Carolina: 0,
    South_Dakota: 0,   Tennessee: 0,
    Texas: 0,          Utah: 0,
    Vermont: 0,        Virginia: 0,
    Washington: 0,     West_Virginia: 0,     
    Wisconsin: 0,      Wyoming: 0
};

const stateAbbrev = {
    Alabama: "AL",        Alaska: "AK",
    Arizona: "AZ",        Arkansas: "AR",
    California: "CA",     Colorado: "CO",
    Connecticut: "CT",    Delaware: "DE",
    Florida: "FL",        Georgia: "GA",
    Hawaii: "HI",         Idaho: "ID",
    Illinois: "IL",       Indiana: "IN",
    Iowa: "IA",           Kansas: "KS",
    Kentucky: "KY",       Louisiana: "LA",
    Maine: "ME",          Maryland: "MD",
    Massachusetts: "MA",  Michigan: "MI",
    Minnesota: "MN",      Mississippi: "MS",
    Missouri: "MO",       Montana: "MT",
    Nebraska: "NE",       Nevada: "NV",
    New_Hampshire: "NH",  New_Jersey: "NJ",
    New_Mexico: "NM",     New_York: "NY",
    North_Carolina: "NC", North_Dakota: "ND",
    Ohio: "OH",           Oklahoma: "OK",
    Oregon: "OR",         Pennsylvania: "PA",
    Rhode_Island: "RI",   South_Carolina: "SC",
    South_Dakota: "SD",   Tennessee: "TN",
    Texas: "TX",          Utah: "UT",
    Vermont: "VT",        Virginia: "VA",
    Washington: "WA",     West_Virginia: "WV",  
    Wisconsin: "WI",      Wyoming: "WY",
};

const colorLived = "rgb(232, 76, 61)";
const colorStayed = "rgb(213, 131, 55)";
const colorVisited = "rgb(243, 194, 24)";
const colorAlight = "rgb(48, 204, 112)";
const colorPassed = "rgb(53, 152, 219)";
const colorNone = "rgb(255, 255, 255)";

const colorDict = {
    0: colorNone,
    1: colorPassed,
    2: colorAlight,
    3: colorVisited,
    4: colorStayed,
    5: colorLived
}


let totalPoints = 0;
let pointStr = "";

function updateTotalPoints() {
    totalPoints = 0;
    for (const state in statePoints) {
        totalPoints += statePoints[state];
    }
    const pointsElement = document.getElementById('points');
    pointsElement.textContent = totalPoints;
}

function updatePointStr() {
    pointStr = "";
    for (const state in statePoints) {
        pointStr += statePoints[state].toString();
    }
    const pointsElement = document.getElementById('points-str');
    pointsElement.value = pointStr;
}

function updateColor() {
    const svgObject = document.getElementById("svgmap");
    const svgDocument = svgObject.contentDocument;

    for (const state in statePoints) {
        const statePath = svgDocument.getElementById(state);
        if (statePath) {
            statePath.style.fill = colorDict[statePoints[state]];
        }
    }
}

function copyPointStr() {
    var copyText = document.getElementById("points-str");
    navigator.clipboard.writeText(copyText.value);
}

function loadPointStr() {
    var loadText = document.getElementById("points-str").value;
    for (let i = 0; i < states.length; i++) {
        statePoints[states[i]] = parseInt(loadText[i]);
    }
    updateTotalPoints();
    updatePointStr();
    updateColor();
}


// Initialize state
updateTotalPoints();
updatePointStr();
updateColor();