const mongoose = require('mongoose')
const app = require('./src/app')

const DB_URL = process.env.CLIVRE_DB_URL || 'mongodb://localhost:27017/clivre'

mongoose.Promise = Promise

mongoose.connection.on('connected', () => console.log('[MONGO] Connected'))
mongoose.connection.on('error', () => console.log('[MONGO] Error'))
mongoose.connection.on('disconnected', () => console.log('[MONGO] Disconnected'))

mongoose
  .connect(DB_URL, {useMongoClient: true})
  .then(app)
  .catch(error => console.log('Startup failed: ', error.message))
