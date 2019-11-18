import { GraphQLServer } from "graphql-yoga"
import logger from 'morgan'
require('dotenv').config()

import schema from './schema'
import passport from 'passport'
import './passport'
import { authenticateJwt } from "./passport"
import { isAuthenticated } from './middlewares'

const PORT = process.env.PORT || 4000
const options = {
    port: PORT,
    endpoint: '/graphql',
    playground: '/playground',
    subscriptions: '/subscriptions',
    uploads: {
        maxFileSize: 10000000, // 10 MB
        maxFiles: 10},
}

const server = new GraphQLServer({ schema, 
    context: ({request}) => ({request, isAuthenticated }) 
})

server.express.use(logger("dev"))
server.express.use(authenticateJwt)


server.express.get('/hello', function(req, res) {
    res.send('hello world');
  });

server.start(options, () => console.log(`Server running on http://localhost:${PORT}`))