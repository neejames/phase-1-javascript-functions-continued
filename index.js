function saturdayFun(activity = 'roller-skate') {
     return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();

const mondayWork = (function (activity2 = 'go to the office') {
    return (`This Monday, I will ${activity2}.`);
})
mondayWork();
function wrapAdjective(choice = '*') {
    return function (name = 'special') {
        return `You are ${choice}${name}${choice}!`
    }
}