import User from '../models/users.js';

const home = (req, res) => {
    res.render('authentication');
}

const login = (req, res) => {
    var email = req.body.data.email;
    var password = req.body.data.password;
    User.findOne({email})
    .then((result) => {
        if(result){
            if(result.password == password) {
                res.send(result);
            }else {
                res.send('invalid credentials');
            }
        }else {
            res.send('invalid credentials');
        }
    })
    .catch((err) => console.log(err));
}

const register = (req, res) => {
    const user = new User({
        role: req.body.data.role,
        name: req.body.data.name,
        email: req.body.data.email,
        password: req.body.data.password, 
        phone: req.body.data.phone
    });
    user.save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
}


export {home, login, register};