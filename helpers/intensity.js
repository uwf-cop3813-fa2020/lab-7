/**
 * This is a collection of helpers that calculate intensity for natural disasters
 */
module.exports = {
  /**
   * Take in an intensity value for an earthquake and return a ranking
   * @param {nunber} intensity Intensity value to rank
   */
  getEarthquakeIntensity: (intensity) => {
    // Compute the intensity of the earthquake
    let category = "minor";
    if (intensity >= 8) {
      category = "major";
    } else if (intensity >= 5) {
      category = "moderate";
    }
    return category;
  },

  /**
   * Take in an intensity value for a tornado and return a ranking
   * @param {nunber} intensity Intensity value to rank
   */
  getTornadoIntensity: (intensity) => {
    // Compute the intensity of the tornado
    const intense = intensity;
    let category = "F0";
    if (intense > 73 && intense <= 112) {
      category = "F1";
    } else if (intense > 113 && intense <= 157) {
      category = "F2";
    } else if (intense > 158 && intense <= 206) {
      category = "F3";
    } else if (intense > 207 && intense <= 260) {
      category = "F4";
    } else if (intense > 261) {
      category = "F5";
    }
    return category;
  },

  /**
   * Take in an intensity value for a hurricane and return a ranking
   * @param {nunber} intensity Intensity value to rank
   */
  getHurricaneIntensity: (intensity) => {
    // Compute the intensity of the hurricane
    const intense = intensity;
    let category = "Tropical Storm";
    if (intense > 74 && intense <= 95) {
      category = "Category 1";
    } else if (intense > 96 && intense <= 110) {
      category = "Category 2";
    } else if (intense > 111 && intense <= 129) {
      category = "Category 3";
    } else if (intense > 130 && intense <= 156) {
      category = "Category 4";
    } else if (intense > 157) {
      category = "Category 5";
    }
    return category;
  },
};
