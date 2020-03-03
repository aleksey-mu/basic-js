module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const turns = Math.pow(2, disksNumber) - 1;
    const turnsPerSec = turnsSpeed / 3600;
    const seconds = turns / turnsPerSec;
    return { turns: turns, seconds: seconds };
}