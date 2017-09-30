module.exports = {

  getAllItems: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {entryid, binid, itemname, itemprice} = req.body;

    dbInstance.get_all_items()
      .then(() => res.status(200).send(appData))
      .catch(() => res.status(500).send())
  }
}
