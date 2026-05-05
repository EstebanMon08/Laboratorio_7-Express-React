import express from "express"
import fs from "fs/promises"
import path from "path"

const PORT = 3000
const app = express()

app.get("/", (req, res) => {
  res.status(200).send("Servidor activo")
})

app.get("/info", (req, res) => {
  res.status(200).json({ mensaje: "Ruta de información" })
})

app.get("/api/student", async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "datos.json")
    const texto = await fs.readFile(filePath, "utf-8")
    const datos = JSON.parse(texto)
    res.status(200).json(datos)
  } catch (error) {
    res.status(500).json({ error: "No se pudo leer el archivo de datos" })
  }
})

app.use((req, res) => {
  res.status(404).send("Ruta no encontrada")
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})