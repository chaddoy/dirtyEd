module.exports = function(app, allModels) {

    app.get('/employeeFind/:id', employeeFind);

    function employeeFind(req, res) {
        var options = {};
        var id = req.params.id;
        if (req.query.skip) {
            options.skip = req.query.skip;
        }
        if (req.query.limit) {
            options.limit = req.query.limit;
        }
        allModels.Users.find({
            _id: id
        }, null, options, function(err, docs) {
            if (err) {
                //console.log(err);
                res.send(500, err);
            } else {
                res.send(200, docs);
                console.log(docs);
            }
        });
    }
}