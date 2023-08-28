import React, { useEffect, useState } from 'react'
import TabTables from 'components/Tables/TabTables'
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function PaymentDetails() {
    const tabs = ["Payment Schedule", "Escrow Beneficiaries", "Escrow Payment"];
    var [headers, setHeader] = useState([ "Payment Date", "Principal Amount", "Interest Amount", "Escrow Amount","Monthly Payment","UPB Amount","Note Interest Rate"]);
    var [header2, setHeader2] = useState(["Escrow Type", "Name", "Account Number", "Routing Number", "Payment Mode", "Frequency"]);
    const [header3,setHeader3] = useState(["Beneficiary Id","Date", "Escrow Payment Amount", "Escrow Disbursement Amount", "Beneficiary Name","Escrow Balance","Frequency"]);

    const location = useLocation();
    const [data, setData] = useState([{
      "Payment Schedule":"Not Selected"
    }]);

    const [paymentdata, setPaymentdata] = useState([{
        "NotSelected": "Not Opted for escrow."
    }])

    const [escrowdata, setEscrowdata] = useState([
        {
            "NotSelected": "Not Opted for escrow."
        }
    ])

    useEffect(() => {
        // const loan_id =1;
        // ids =location.state
        axios.get(`http://localhost:5000/api/paymentschedule/${location.state}`)
            .then((response) => {
                if (response.data.length !== 0)
                    setData(response.data)
               
            }).catch((error) => {
                setHeader("");
            })
        axios.get(`http://localhost:5000/api/beneficiary/${location.state}`)
            .then((response) => {
                console.log(response.data)
                if (response.data.length !== 0)
                    setPaymentdata(response.data)
                else{
                    setHeader2([""])
                }
            }).catch((error)=>{
                setHeader2([""])
            })

        axios.get(`http://localhost:5000/api/escrowdisbursement/${location.state}`)
            .then((response) => {
                if (response.data.length !== 0)
                    setEscrowdata(response.data)
                else setHeader3([""])
            }).catch((error)=>{
                setHeader3([""])
            })
    }, [])


    return (
        <>
            {console.log(header2)}
            <TabTables TabName={tabs} header={headers} datas={data} form={false} extra={true} header2={header2} data2={paymentdata} header3={header3} data3={escrowdata} />

        </>
    )
}
