const PROXY_CONFIG = [
  {
      context: [
          "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,hostname,discoverymethod,disc_year,pl_orbper,pl_masse,sy_dist+from+ps&format=json",
      ],
      target: "http://localhost:4200",
      secure: false
  }
]

module.exports = PROXY_CONFIG;
