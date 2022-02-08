
var fs = require('fs')
async function surahController(req, res, next) {
    var surahId = req.params.surahId;
    fs.readFile(`surah/${surahId}.json`, 'utf8', (err, data) => {
        if (err) {
            next(Error(`Page not found in ${req.url}`))
        } else {
            res.send(JSON.parse(data))
        }
    });
}

module.exports = surahController