const prompt = require('prompt-sync')();

function insertName(name) {
    name = prompt("What's your name? ");

    if (typeof name !== 'string' || name.trim() === '') {
        console.log('Invalid name. Please enter a valid name.');
        return insertName(name);
    }
    else {
        return name;
    }
}

function insertXP(xp) {
    xp = prompt("How much is your XP? ").trim();

    if (isNaN(xp) || xp.trim() === '' || Number(xp) <= 0) {
        console.log('Invalid XP. Please enter a valid number for your experience.');
        return insertXP(xp);
    } else {
        xp = Number(xp);
        return xp;
    }
}
let name = insertName();
let levelExperience = insertXP();
let levelRank;


if (levelExperience <= 1000) {
    levelRank = 'Iron';
}
else if (levelExperience > 1000 && levelExperience <= 2000) {
    levelRank = 'Bronze';
}
else if (levelExperience > 2000 && levelExperience <= 5000) {
    levelRank = 'Silver';
}
else if (levelExperience > 5000 && levelExperience <= 7000) {
    levelRank = 'Gold';
}
else if (levelExperience > 7000 && levelExperience <= 8000) {
    levelRank = 'Platinum';
}
else if (levelExperience > 8000 && levelExperience <= 9000) {
    levelRank = 'Ascendant';
}
else if (levelExperience > 9000 && levelExperience <= 10000) {
    levelRank = 'Immortal';
}
else {
    levelRank = 'Radiant';
}

console.log('The greatest hero named ' + name + ' is in the level rank ' + levelRank);
