import { useState,useEffect } from "react";
import { months } from "../../data/months";
import { customers } from "../../data/customers";
import Customerlist from "../components/customers/Customerlist";

export default function customersLoans(){
    const [cmonth,setCmonth] = useState('1');
    const [cname,setCname] = useState(0);
    const [csalary,setCsalary] = useState('');
    const [cdata,setCdata] = useState([]);

    const fetchCdata = async () => {
        const response = await fetch("/api/customers");
        const data = await response.json();
        setCdata(data);
    };

    useEffect(()=>{
        fetchCdata()},[]);

    const handleMonth = (e) =>{
        setCmonth(e.target.value)
    }
    const handleName = (e) =>{
        setCname(e.target.value)
    }
    const handleSalary = (e) =>{
        setCsalary(e.target.value)
    }

    const handleAdd = async () => {
        if(csalary!=='' && cname !==0){
            const newcustomer = {month:cmonth,name:cname,salary:csalary};
            const response = await fetch("/api/customers",{
                method:'POST',
                body:JSON.stringify(newcustomer),
                headers: {"Content-Type": "application/json"},
            });
            const data = await response.json();
            setCdata(data);
            setCmonth(1);
            setCsalary('');
        }
    }

    let moptions = [];
    Object.keys(months).forEach((monthIndex)=>{
        let monthName = months[monthIndex];
        moptions.push(<option key={monthIndex} value={monthIndex}>{monthName}</option>);
    });

    let cnames = [];
    customers.forEach((customer, index, array) => {
        cnames.push(<option key={index} value={customer.id}>{customer.name}</option>);
    });

    return (<>
        <h2>Customer Report</h2>
        <br />
        <br />
        <select name="month" onChange={handleMonth} defaultValue={cmonth}>
            <option value="0">Select Month</option>
            {moptions}
        </select>
        <select name="customername" onChange={handleName} defaultValue={cname}>
            <option value="0">Select Customer</option>
            {cnames}
        </select>
        <input type="text" name="salary" value={csalary} onChange={handleSalary} />
        <button type="button" name="btnAdd" onClick={handleAdd}>Add</button>
        
        <Customerlist cdata={cdata} />
    </>)
}