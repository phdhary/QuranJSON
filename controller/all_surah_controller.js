var fs = require('fs');

async function allSurahController(req, res, next) {
    var quran = JSON.parse(fs.readFileSync('quran.json', 'utf8'));
    res.send(quran)
}

module.exports = allSurahController