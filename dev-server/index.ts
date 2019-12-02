import express, { Application, Request, Response, NextFunction } from "express"
import setEnvironment from "./config/env"
import connectToDB from "./config/db"

const app: Application = express()

setEnvironment(app)
connectToDB()

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("hello world")
})

app.listen(5000, () => console.log("server running"))