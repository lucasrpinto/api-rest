import express from "express"

const PORT = 3333

const app = express()

app.get("/", (req, res) => {
  res.send("Hello World Express!")
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))