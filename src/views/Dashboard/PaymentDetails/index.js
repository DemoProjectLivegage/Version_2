import React, { useEffect, useState } from 'react'
import TabTables from 'components/Tables/TabTables'
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function PaymentDetails() {
    const tabs = ["Payment Schedule", "Escrow Beneficiaries", "Escrow Payment","Show Transactions","GL Transaction"];
    var [glheader,setglheader] = useState(["GL Account Number", "GL Account Name", "Description", "Debit", "Credit"]);

    var [headers, setHeader] = useState([ "Payment Date", "Principal Amount", "Interest Amount", "Escrow Amount","Monthly Payment","UPB Amount"]);
    var [header2, setHeader2] = useState(["Escrow Type", "Name", "Account Number", "Routing Number", "Payment Mode", "Frequency"]);
    var [header3,setHeader3] = useState(["Beneficiary Id","Date", "Escrow Payment Amount", "Escrow Disbursement Amount", "Beneficiary Name","Frequency","Escrow Balance"]);
    var [header4, setHeader4]=useState(["Transaction Date","Scheduled Amount","Received Amount","Interest Amount","Principal Amount","Escrow Amount","Late Charges","Other Fees","Suspense","UPB Amount"])
    const location = useLocation();
    const [data, setData] = useState([{
      "Payment Schedule":"Not Selected"
    }]);

    const [paymentdata, setPaymentdata] = useState([{
        "NotSelected": "Not Opted for escrow."
    }])
    const [gldata, setgldata] = useState([{
        "NotSelected": "Not Opted for GL."
    }])

    const [escrowdata, setEscrowdata] = useState([
        {
            "NotSelected": "Not Opted for escrow."
        }
    ])
    
    const [transaction,setTransaction]=useState([{
        "No Transaction": "Transaction is not yet done."
    }])
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

            axios.get(`http://localhost:5000/api/payment_hierarchy/${location.state}`)
            .then((response)=>{
                if (response.data.length !== 0)
                setTransaction(response.data)
            else setHeader4([""])
        }).catch((error)=>{
            setHeader4([""])
            })
            axios.get(`http://localhost:5000/api/`)
            .then((response)=>{
                if (response.data.length !== 0)
                setTransaction(response.data)
            else setglheader([""])
        }).catch((error)=>{
            setHeader4([""])
            })
    }, [])
    
    ////////////////GENERAL LEDGER API////////////////////////////////
            


    return (
        <>
            {console.log(header2)}
            <TabTables TabName={tabs} header={headers} glheader={glheader} gldata={gldata} datas={data} form={false} extra={true} header2={header2} data2={paymentdata} header3={header3} data3={escrowdata} header4={header4} data4={transaction}/>

        </>
    )
}
