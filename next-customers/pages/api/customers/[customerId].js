import {customerloan} from '../../../data/customersloan';
export default function handler(req,res){
    const { customerId } = req.query;
    const customer = customerloan.filter((customer)=>parseInt(customer.name)===parseInt(customerId));
    return res.status(200).json(customer);
}