import { databaseConnection } from './models'
import express, { Express, Request, Response } from 'express'

async function main (): Promise<Express> {
  const app = express()
  const { db, models } = databaseConnection()

  await db.sync()

  app.get('/', (req: Request, res: Response): void => {
    res.json({
      hello: 'World',
    })
  })

  return app
}

main().then((app): void => {
  const port = 1234

  app.listen(port, (): void => {
    console.log(`Listening on port ${port}`)
  })
}).catch((error: Error): void => {
  console.log(error)
})
