module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { title, year, image_url } = req.body;

    dbInstance
      .create_movie([title, year, image_url])
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({ errorMessage: "We will get right on that!" });
        console.log(err);
      });
  },
  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    dbInstance
      .read_movie(id)
      .then((movie) => res.status(200).send(movie))
      .catch((err) => {
        res.status(500).send({ errorMessage: "We will get right on that!" });
        console.log(err);
      });
  },
  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .read_movies()
      .then((movies) => res.status(200).send(movies))
      .catch((err) => {
        res.status(500).send({ errorMessage: "We will get right on that!" });
        console.log(err);
      });
  },
  update: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params, query } = req;
    dbInstance
      .update_movie([params.id, query.desc])
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({ errorMessage: "We will get right on that!" });
        console.log(err);
      });
  },
  delete: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .delete_movie(id)
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({ errorMessage: "We will get right on that!" });
        console.log(err);
      });
  },
};