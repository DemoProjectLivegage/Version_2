import React from 'react'
import TabTables from 'components/Tables/TabTables'



export default function PaymentDetails()
{
    const tabs=["Payment Schedule", "Escrow Beneficiaries", "Escrow Payment"]
    const headers=["Loan Id", "Payment Date", "Principal Amount","Interest Amount","Escrow"]
    const header2=["Escrow Type","Name","Account Number","Routing Number","Payment Mode","Frequency"];
    const header3=["Date","Escrow Payment Amount","Escrow Disbursement Amount","Escrow Balance"];
    const data=[{
        "LoanId":"12",
        "PaymentDate":"02/09/2023",
        "PrincipalAmount":"$23345",
        "InterestAmount":"$1000",
        "Escrow":"$600",
    }]

    const data2=[{
        "EscrowType":"Mortgage Insurance",
        "Name":"MGIC",
        "AccountNumber":"93749376493649",
        "RoutingNumber":"GDH567",
        "PaymentMode":"Cheque",
        "Frequency":"Monthly"
    }]
   const data3=[
    {
        "Date":"02/08/2023",
        "Escrow Payment Amount":"$4321",
        "Escrow Dsibursement Amount":"$3214",
        "Escrow Balance":"$1234"
    }
   ]
    return(
    <>
      <TabTables TabName={tabs} header={headers} datas={data} form={false} extra={true} header2={header2} data2={data2} header3={header3} data3={data3}/>
       
      </>    
    )
}
