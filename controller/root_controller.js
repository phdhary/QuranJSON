const { PORT } = require("../constant")
function rootController(req, res, next) {
    var protocol = req.protocol
    var host = req.hostname
    var baseUrl = `${protocol}://${host}:${PORT}/`
    res.send({
        "All Surah": baseUrl,
        "Surah by id": {
            "": `${baseUrl}surah/{:surahId}`,
            "Example of surah Al-Fatihah": `${baseUrl}surah/1`
        }
    })
}

module.exports = rootController