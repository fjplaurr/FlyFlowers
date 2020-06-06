module.exports = function getAllDocuments (model) {
  return async function (req, res, next) {
      try {
          let document = await model.find({});
          return res.status(200).send(document);
      } catch (err) {
          return next({
              status: 500,
              message: err.message
          });
      }
  }
}