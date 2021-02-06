import User from '../models/users.js';

const home = (req, res) => {
    res.render('authentication');
}

const login = (req, res) => {
    var email = req.body.lemail;
    var password = req.body.lpassword;
    User.findOne({email})
    .then((result) => {
       if(result.password == password) {
        if(result.role == 'guest') {
            res.send('guest');
        }else {
            res.redirect('/staff');
            res.send(result);
           // res.render('staff', {data:result});
        }
       }else {
           res.send('invalid credentials');
       }
    })
    .catch((err) => console.log(err));
}

const register = (req, res) => {
    const user = new User(req.body);
    user.save()
    .then((result) => res.send('created'))
    .catch((err) => console.log(err));
}


export {home, login, register};