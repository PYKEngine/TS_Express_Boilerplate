import express, { Application } from "express"

/**
 * Determines the current environment and sets the appropriate variables
 * @param {Express App} app 
 */
export default function setEnvironment(app: Application) {
  if (!process.env.NODE_ENV || process.env.NODE_ENV.toString().trim() !== "production") {
    setDevEnv(app)
  } else {
    setProdEnv(app)
  }
}

/**
 * Used to set development environment variables
 * @param {Express App} app 
 */
function setDevEnv(app: Application) {
  process.env.NODE_ENV = "development"
  app.use(express.json())
  process.env.DB_URL = "mongodb://localhost:27017/PYKEngine-db"
}

/**
 * Used to set production environment variables
 * @param {Express App} app 
 */
function setProdEnv(app: Application) {
  process.env.NODE_ENV = "production"
  app.use(express.json())
  process.env.DB_URL = "mongodb://localhost:27017/PYKEngine-db" // Replace by production db
  app.use(express.static(__dirname + "/public/"))
}