import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const PaymentHistory = () => {

    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data
        }
    })

    return (
        <div>
            <h2>Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th> Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment,i)=><tr key={payment._id}>
                            <th>{i + 1}</th>
                            <td>$ {payment.price}</td>
                            <td>{payment.transactionId}</td>
                            <td>{payment.status}</td>
                        </tr>)}
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;