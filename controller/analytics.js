import servCust from '../models/serviceCustomer.js';
import service from '../models/services.js';
const analytics = (req, res) => {
    service.find()
    .then((result) => {
        var contents = "answer: \n";
        result.forEach((item) => {
            servCust.find({service:item.name})
            .then((ans) => {
                var count = 0, tamount = 0;
                ans.forEach((anscon) => {
                    count += 1;
                    tamount += anscon.cost;
                });
                contents.concat(`\nthe total no of ${item.name} rented: ${count} and the total amount earned: ${tamount}`);
            })
            .catch((err) => console.log(err));
            
        })
        res.send(contents);
    })
    .catch((err) => console.log(err));
}

export default analytics;
        