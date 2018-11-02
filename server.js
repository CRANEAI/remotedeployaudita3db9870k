const express = require("express")
const path = require("path")
const cors = require("cors")

console.log(`
Created with
███████╗██╗   ██╗███████╗██╗ ██████╗ ███╗   ██╗         ██████╗ ██████╗ ██████╗ ███████╗
██╔════╝██║   ██║██╔════╝██║██╔═══██╗████╗  ██║        ██╔════╝██╔═══██╗██╔══██╗██╔════╝
█████╗  ██║   ██║███████╗██║██║   ██║██╔██╗ ██║        ██║     ██║   ██║██║  ██║█████╗  
██╔══╝  ██║   ██║╚════██║██║██║   ██║██║╚██╗██║        ██║     ██║   ██║██║  ██║██╔══╝  
██║     ╚██████╔╝███████║██║╚██████╔╝██║ ╚████║███████╗╚██████╗╚██████╔╝██████╔╝███████╗
╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝
Fusion_Code. 2018. 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
* 
*`)

global.__basedir = __dirname

const app = express()
app.use(
  express.json({
    extended: false
  })
)

app.use(cors())

app.disable("x-powered-by")

app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff")
  res.setHeader("X-XSS-Protection", "1")
  res.setHeader(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains"
  )
  next()
})

/**
 * Api Directories
 *
 */
app.use("/api/v1", require("./server/api/v1/routes"))

/**
 * Static file serving directories
 *
 */
app.use(express.static(path.join(__dirname, "public/")))
app.use(express.static(path.join(__dirname, "client/")))
app.use(express.static(path.join(__dirname, "node_modules")))

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "client", "index.html"))
})

/**
 * Launch Server
 *
 */

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log("listening on port", port)
})
