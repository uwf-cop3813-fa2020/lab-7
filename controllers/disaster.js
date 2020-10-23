/**
 * Routes for disasters
 */

const intensity = require("../helpers/intensity");
const logger = require("pino")();

module.exports = {
  // Intensity middleware
  intensityCheck: (req, res, next) => {
    if (req.query.intensity) {
      logger.info({ intensity: req.query.intensity }, "Intensity found");
      next();
      // If no intensity is found, log it and show an error
    } else {
      logger.error("No intensity specified!");
      res.render("error");
    }
  },

  // Handle earthquake requests
  earthquake: (req, res) => {
    res.render("event", {
      eventType: "earthquake",
      intensityType: "magnitude",
      intensityValue: req.query.intensity,
      category: intensity.getEarthquakeIntensity(req.query.intensity),
    });
  },

  // Handle tornado requests
  tornado: (req, res) => {
    res.render("event", {
      eventType: "tornado",
      intensityType: "wind speed",
      intensityValue: req.query.intensity,
      category: intensity.getTornadoIntensity(req.query.intensity),
    });
  },

  // Handle hurricane requests
  hurricane: (req, res) => {
    res.render("event", {
      eventType: "hurricane",
      intensityType: "wind speed",
      intensityValue: req.query.intensity,
      category: intensity.getHurricaneIntensity(req.query.intensity),
    });
  },
};
