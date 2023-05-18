import { customers } from '../../../data/customers';
import { months } from '../../../data/months';
import {customerloan} from '../../../data/customersloan';

export default function handler(req,res){
    if(req.method==='POST'){
        customerloan.push(req.body);
        res.status(200).json(customerloan);
    }else if(req.method==="GET"){
        res.status(200).json(customerloan);
    }
    
}