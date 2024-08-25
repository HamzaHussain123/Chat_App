import jwt from 'jsonwebtoken'
import { errorHandler } from "../utils/error.js"

export const isAuthenticate = async (req, res, next) => {
    try {
        const token = req.cookies.access_token

        if (!token) {
            return next(errorHandler(401, "Unauthorized"))
        }

        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
            if (err) {
                return next(errorHandler(403, "forbidden"))
            }

            req.user = user

            next()
        })

    } catch (error) {
        next(error)

    }
} 