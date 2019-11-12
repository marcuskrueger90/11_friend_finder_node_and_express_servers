const peopleInfo = require('../data/friends.js')

module.exports = (app) => {

    app.get('/api/friends', (req, res) => {
        res.json(peopleInfo);
    });

    app.post('/api/friends', (req, res) => {
        let matchScore = req.body.scores;
        const scoreArray = [];
        let ultimateMatch = 0;

        for (var i = 0; i < peopleInfo.length; i++) {
            var difference = 0;
            for (var j = 0; j < matchScore.length; j++) {
                difference += (Math.abs(parseInt(peopleInfo[i].scores[j]) - parseInt(matchScore[j])))
            }
            scoreArray.push(difference);
        }

        for (var i = 0; i < scoreArray.length; i++) {
            if (scoreArray[i] <= scoreArray[ultimateMatch]) {
                ultimateMatch = i;
            }
        }

        let perfect = peopleInfo[ultimateMatch];
        res.json(perfect);
        peopleInfo.push(req.body)

    });

    app.post('/api/clear', (req, res) => {
        peopleInfo.length = [];
        res.json({
            ok: true
        })
    })
}