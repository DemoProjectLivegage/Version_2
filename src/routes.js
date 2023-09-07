import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
// import Information from "views/Dashboard/Tables/Borrower_information/Information";
import Beneficiaries from "views/Dashboard/Beneficiaries";
import RTLPage from "views/Dashboard/RTL";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";
import TabTables from "components/Tables/TabTables";
import PaymentDetails from "views/Dashboard/PaymentDetails";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
  BeneficiaryIcon,
  General,MastercardIcon
} from "components/Icons/Icons";
import general_Mapper from "views/GeneralLedger";
import GL_Table from "views/GeneralLedger/components/GL_Table";
// import {FaBook} from  'react-icons/fa';

var dashRoutes = [
  {
    path: "/tables",
    name: "Loan Tables",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/paymentdetails",
    name: "Hidden",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: PaymentDetails,
    layout: "/admin",
  },
  {
    path: "/info",
    name: "Hidden",
    // rtlName: "لوحة القيادة",
    // icon: <PersonIcon color="inherit" />,
    // secondaryNavbar: true,
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/beneficiary",
    name: "Show Beneficiairies",
    icon: <PersonIcon color="inherit" />,
    component: Beneficiaries ,
    layout: "/admin",
   },
  {
    path: "/Map_ledger",
    name: "Create General Ledger",
    icon: <CreditIcon color="inherit"  />,
    component:  general_Mapper,
    layout: "/admin",
  },
  {
    path: "/general_ledger",
    name: "Show General Ledgers",
    icon: <DocumentIcon color="inherit"  />,
    component:  GL_Table,
    layout: "/admin",
   }
  // {
  //   name: "ACCOUNT PAGES",
  //   category: "account",
  //   rtlName: "صفحات",
  //   state: "pageCollapse",
  //   views: [
  //     {
  //       path: "/profile",
  //       name: "Profile",
  //       rtlName: "لوحة القيادة",
  //       icon: <PersonIcon color="inherit" />,
  //       secondaryNavbar: true,
  //       component: Profile,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/signin",
  //       name: "Sign In",
  //       rtlName: "لوحة القيادة",
  //       icon: <DocumentIcon color="inherit" />,
  //       component: SignIn,
  //       layout: "/auth",
  //     },
  //     {
  //       path: "/signup",
  //       name: "Sign Up",
  //       rtlName: "لوحة القيادة",
  //       icon: <RocketIcon color="inherit" />,
  //       secondaryNavbar: true,
  //       component: SignUp,
  //       layout: "/auth",
  //     },
  //   ],
  // },
  
];
export default dashRoutes;
