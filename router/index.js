const model = require("../model/index.js");

module.exports = (app) => {
  app.get("/", async (req, res) => {
    return res.send("api is working!");
  });
  app.post("/create", async (req, res) => {
    try {
      return res.send(
        await model.create(`contents`, `content`, `'${req.body.content}'`)
      );
    } catch (err) {
      return res.send({
        status: "error",
        message: err.message,
        data: null,
      });
    }
  });
  app.post("/read", async (req, res) => {
    try {
      return res.send(
        await model.read(
          `*`,
          `contents`,
          `id="${req.body.id}"`,
          null,
          null,
          1,
          null
        )
      );
    } catch (err) {
      return res.send({
        status: "error",
        message: err.message,
        data: null,
      });
    }
  });
};
