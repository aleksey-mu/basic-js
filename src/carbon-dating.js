const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(SAMPLE) {
  if (typeof(SAMPLE) !== 'string') {
    return false;
  }
  const SAMPLE_ACTIVITY = parseFloat(SAMPLE);
  if (SAMPLE_ACTIVITY <= 0 || SAMPLE_ACTIVITY > 15) {
    return false;
  }
  if (Number(SAMPLE_ACTIVITY) != SAMPLE_ACTIVITY) {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil((Math.log(MODERN_ACTIVITY /SAMPLE_ACTIVITY) / k));
};
