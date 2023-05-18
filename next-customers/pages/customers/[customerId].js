import Link from "next/link"
import { customers } from "@/data/customers";
import { months } from "@/data/months";
export default function customerDetails({customerdata}){

    const getCustomerName = (customerid) => {
        const customername = customers.filter((customer)=>{
          return customer.id===parseInt(customerid);
        });
        return (customername[0]?customername[0].name:'')
    }
    return (<>
    <h2>Customer Details</h2>
    <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Month</td>
                    <td>Salary</td>
                </tr>
                </thead>
                <tbody>
    {customerdata.map((customer,index)=>{
        let custname = getCustomerName(customer.name);
        return(
            <tr key={index}>
                <td>{custname}</td>
                <td>{months[customer.month]}</td>
                <td>{customer.salary}</td>
            </tr>
        )
    })}
    </tbody>
    </table>
    <Link href={`/customers`}>Back to Customers page</Link>
    </>)
}

export async function getServerSideProps(context){
    const { query } = context;
    const { customerId } = query;
    const response = await fetch(`http://localhost:3000/api/customers/${customerId}`);
    const data = await response.json();
    return {
        props:{
            customerdata : data
        }
    }
}