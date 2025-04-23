const db = require('../db/connection');

exports.getAllFilms = (req, res, next) => {
    db.query('SELECT * FROM films', (err, results) => {
        if (err) return next(err);
        res.json(results);
    });
};

exports.getFilmDetails = (req, res, next) => {
    const filmId = req.params.id;
    db.query(
        `SELECT * FROM films WHERE id = ?; SELECT * FROM reviews WHERE film_id = ?`,
        [filmId, filmId],
        (err, results) => {
            if (err) return next(err);
            res.json({
                film: results[0][0],
                reviews: results[1]
            });
        }
    );
};
