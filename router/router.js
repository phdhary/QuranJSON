const express = require("express")

const controller = require("../controller/index")


function appRoutes() {

    const router = express.Router()

    router.get("/", requestTime, requestTime, controller.rootController)
    router.get("/surah", requestTime, requestTime, controller.allSurahController)
    router.get("/surah/:surahId", requestTime, requestTime, controller.surahController)
    return router
}


var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}

module.exports = appRoutes