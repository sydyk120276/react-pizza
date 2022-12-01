import express from 'express'
import cors from 'cors'
import cookieParser from "cookie-parser";
import favicon from "serve-favicon";
import { resolve } from 'path'

const PORT = process.env.PORT || 5000

const server = express()
server.use(cors())
server.use(cookieParser())
server.use(express.json())
server.use(express.static(resolve(__dirname, '../../build/static')))
server.use(favicon(resolve(__dirname, '../../public/favicon.ico')))