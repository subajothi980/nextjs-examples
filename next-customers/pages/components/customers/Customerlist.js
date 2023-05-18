import { customers } from "@/data/customers";
import Link from "next/link";
export default function Customerlist ({cdata}) {
    
    const getUniqCustomer = () => {
        const unique = [...new Set(cdata.map((item) => item.name))];
        return unique;
    };

    const getCustomerTotal = (cid) => {
        const filteredArr =
          cdata.length > 0 &&
          cdata.filter((value) => {
            return value.name === cid;
          });
        //console.log("filteredArr=>",filteredArr);
    
        const customertot = filteredArr.reduce((total, carr) => {
          return total + parseInt(carr.salary, 10);
        }, 0);
        return customertot;
    };

    const getCustomerName = (customerid) => {
        const customername = customers.filter((customer)=>{
          return customer.id===parseInt(customerid);
        });
        return (customername[0]?customername[0].name:'')
    }

    let uniqCustomer  = getUniqCustomer();

    return (<>
            <h2>Customer Summary</h2>
            <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Total</td>
                </tr>
                </thead>
                <tbody>
                {uniqCustomer && uniqCustomer.map((customerid,index)=>{
                  let custname = getCustomerName(customerid);
                  let ctotal = getCustomerTotal(customerid)
                    return (<tr key={index}>
                        <td><Link href={`/customers/${customerid}`}>{custname}</Link></td>
                        <td>{ctotal}</td>
                    </tr>)
                })}
                </tbody>
            </table>
            <Link href={`/`}>Back to Home</Link>
        </>);
}