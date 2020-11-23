// const { createProxyMiddleware } = require('http-proxy-middleware')
const path = require('path')
const DIST_DIR = path.join(__dirname, '../build')
const HTML_FILE = path.join(DIST_DIR, 'index.html')

const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.use(express.static(DIST_DIR))

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE)
})

app.listen(port, () => {
  console.log('Server running on port:', port)
})