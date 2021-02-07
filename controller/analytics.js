
import servCust from '../models/serviceCustomer.js';
import service from '../models/services.js';
const analytics = async (req, res) => {
    try{
        const services = await service.find();
        let contents = [];
        services.forEach(async (item,index) => {
            const servicesUsedByCustomer = await servCust.find({service: item.name});
            let count = 0, cost = 0;
            servicesUsedByCustomer.forEach((eachItem,index)=>{
                count += 1;
                cost += eachItem.cost;
            })
            const resultObject = {
                'name':item.name,
                'count':count,
                'cost':cost
            }
            console.log('result objects: ',resultObject);
            contents = [...contents,resultObject];
            console.log('inside for block',contents)
        });
        console.log('outside the for block',contents);
        res.send(contents);
    }
    catch(err){console.log('An error occured: ',err);}
}

export default analytics;