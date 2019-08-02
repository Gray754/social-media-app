module.exports = {
  getUserInfo: async (req, res) => {
    try {
      const db = req.app.get('db');
      const userInfo = await db.get_user_info();
      return res.status(200).send(userInfo);
    } catch (err) {
      console.log(err);
      res.status(500).send('Error fetching User Info');
    }
  }
};
