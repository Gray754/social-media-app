require('dotenv').config();
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

const register = async (req, res) => {
  const db = req.app.get('db');
  const hash = await bcrypt.hash(req.body.password, 10);
  const mailOptions = {
    from: '"DevConnect" <PortfolioEmailTest@gmail.com>',
    to: req.body.email,
    subject: 'Welcome to DevConnect!',
    text: 'Thanks for joining DevConnect!',
    html: `<p>Thanks for signing up! We're excited to see you join, ${
      req.body.username
    }. Please update your account info asap so you can start getting connected with other Devs!</p>`
  };
  try {
    const response = await db.register_new_user({
      username: req.body.username,
      password: hash,
      email: req.body.email
    });
    req.session.user = { username: response[0].username, id: response[0] };
    res.send(req.session.user);
    transporter.sendMail(mailOptions);
    console.log(req.session.user);
  } catch (err) {
    console.log(err);
    res.status(401).send('There is an error.');
  }
};

const login = (req, res) => {
  const db = req.app.get('db');
  db.find_user(req.body.username).then((result) => {
    console.log(result[0]);
    if (!result.length) {
      res.status(401).json({ error: 'No User Found' });
    } else {
      const comparePassword = bcrypt.compare(
        req.body.password,
        result[0].password
      );
      if (comparePassword) {
        db.user_details(req.body.username).then((result) => {
          // console.log(result[0]);
          req.session.user = {
            id: result[0].id,
            username: result[0].username,
            email: result[0].email,
            fname: result[0].firstname,
            lname: result[0].lastname,
            city: result[0].city,
            state: result[0].state,
            hobbies: result[0].hobbies,
            profilePic: result[0].profilePic,
            profileBanner: result[0].profileBanner
          };
          res.json(req.session.user);
        });
        // console.log(req.session.user);
      } else {
        res.status(401).send({ error: 'Incorrect Password' });
      }
    }
  });
};

const logout = (req, res) => {
  req.session.destroy();
  res.status(200).send('Logged Out');
};

const userSession = (req, res) => {
  if (req.session.user) {
    console.log(req.session);
    res.send(req.session.user);
  } else {
    res.status(401).send({ error: 'Please Log In' });
  }
};

module.exports = {
  register,
  login,
  logout,
  userSession
};
