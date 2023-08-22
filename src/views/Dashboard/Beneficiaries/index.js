import React from 'react'
import TabTables from 'components/Tables/TabTables'


export default function index() {
    const tabs = ["Show Beneficiaries", "Add Beneficiaries"];
    const header = ["Escrow Types","Name","Account Number", "Routing Number", "Payment Mode","Frequency"]
 
    const data = [
        {
            "EscrowType":"Mortgage Insurance",
            "Name":"MGIC",
            "AccountNumber":"93749376493649",
            "RoutingNumber":"GDH567",
            "PaymentMode":"Cheque",
            "Frequency":"Monthly"
        },
        {
            "EscrowType":"Mortgage Insurance",
            "Name":"MGIC",
            "AccountNumber":"93749376493649",
            "RoutingNumber":"GDH567",
            "PaymentMode":"Cheque",
            "Frequency":"Monthly"
        }
    ]
  return (
    <>  
        <TabTables TabName={tabs} form={true} header={header} datas={data} extra={false} />
    </>
  )
}
