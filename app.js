const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

// MongoDB bağlantısı
/*mongoose.connect('mongodb://localhost:27017/authexample', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
*/
// Kullanıcı şeması
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

// Kullanıcı modeli
const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Kayıt ol endpoint'i
app.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).send('Kayıt başarılı.');
  } catch (error) {
    res.status(500).send('Kayıt sırasında bir hata oluştu.');
  }
});

// Giriş yap endpoint'i
app.post('/login', async (req, res) => { 
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).send('Kullanıcı bulunamadı.');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      res.status(200).send('Giriş başarılı.');
    } else {
      res.status(401).send('Parola yanlış.');
    }
  } catch (error) {
    res.status(500).send('Giriş sırasında bir hata oluştu.');
  }
});
app.use(express.static('public'));
app.listen(port, () => {
  console.log(`Server çalışıyor: http://localhost:${port}`);
});
