import React from 'react'
import TabTables from 'components/Tables/TabTables'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function index() {
    const tabs = ["Show Beneficiaries", "Add Beneficiaries"];
    const header = ["Escrow Types", "Name", "Account Number", "Routing Number", "Payment Mode", "Frequency"]

    const [data, setData] = useState([
        {
            "EscrowType": "Mortgage Insurance",
            "Name": "MGIC",
            "AccountNumber": "93749376493649",
            "RoutingNumber": "GDH567",
            "PaymentMode": "Cheque",
            "Frequency": "Monthly"
        }
    ]);
    useEffect(() => {
        axios.get("http://localhost:5000/api/beneficiary")
            .then(response => {
                setData(response.data)
                console.log(response.data);
            }).catch((error) => {
                console.log("my error", error)
            })
    }, [])
    
    return (
        <TabTables TabName={tabs} form={true} header={header} datas={data} extra={false} />
        // <h1>ksudcgf</h1>
    )
}
