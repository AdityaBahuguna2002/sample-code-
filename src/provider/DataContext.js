// "use client";
// import { setCookie } from "@/lib/utils";
// import {
//   useState,
//   useEffect,
//   useContext,
//   createContext,
//   ReactNode,
// } from "react";

// type DataContextProps = {
//   children: ReactNode;
// };

// interface DataContext {
//   progress: string[];
//   progrssStatus: any;
//   ticketsData: any;
//   setAllTickets: any;
//   token: string;
//   saveToken: any;
//   userDetails: any;
//   saveUserDetails: any;
//   saveProfileURL: any;
//   imagefront: any;
//   setimagefront: any;
//   setimageback: any;
//   imageback: any;
//   eventbox: any;
//   seteventbox:any;
//   refreshtable:any, setRefreshtable:any
// }

// const defaultValues: DataContext = {
//   progress: [],
//   progrssStatus: () => { },
//   ticketsData: [],
//   setAllTickets: () => { },
//   token: "",
//   saveToken: () => { },
//   userDetails: {},
//   saveUserDetails: () => { },
//   saveProfileURL: () => { },
//   imagefront: () => { },
//   setimagefront: () => { },
//   setimageback: () => { },
//   imageback: () => { },
//   seteventbox: () => { },
//   eventbox: ()=>{},
//   setRefreshtable: () => { },
//   refreshtable: () => { },
// };

// export const DataContext = createContext<DataContext>(defaultValues);

// export default function DataContextProvider({ children }: DataContextProps) {
//   let STATIC_TOKEN =
//     "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik9XTkVSLTAwMDAwMDAwNiIsImZhY2Vib29rSWQiOm51bGwsImVtYWlsIjoiZGl2eWFuc2h1LmJpc2h0QGN5bm90ZWNrLmNvbSIsInVzZXJSb2xlIjo0LCJpc0d1ZXN0IjpmYWxzZSwiaGFzUHJvZmlsZSI6dHJ1ZSwidW5pcXVlS2V5IjpmYWxzZSwiaWF0IjoxNzA2NTA0OTExLCJleHAiOjMyODQzODQ5MTF9.BHNPNyDyWZImOlDYHhIf_JvJVTuz0jU7SvF5Y10-CrU";

//   const [progress, setProgress] = useState<string[]>([""]);
//   const [eventbox, seteventbox] = useState<any>(true);
//   const [imagefront, setimagefront] = useState<any>();
//   const [imageback, setimageback] = useState<any>();
//   const [ticketsData, setTicketsData] = useState<any>([]);
//   const [token, setToken] = useState<string>(STATIC_TOKEN);
//   const [userDetails, setUserDetails] = useState<any>({});
//   const [refreshtable, setRefreshtable] = useState<any>(false);

//   const progrssStatus = (data: string) => {
//     const newarry = [...progress, data];
//     setProgress(newarry);
//   };

//   const saveUserDetails = (data: any) => {
//     let updatedData = typeof data != "string" ? data : JSON.parse(data);
//     setUserDetails(updatedData);
//     if (data.token) {
//       setCookie("sportifitoken", data.token, 365*10);
//     }
//   };

//   const setAllTickets = (data: any) => {
//     setTicketsData(data);
//   };

//   const saveToken = (key: string) => {
//     localStorage.setItem("sportifitoken", key);
//     setToken(key);
//   };
  

//   const saveProfileURL = (url: string) => {
//     setUserDetails((prev: any) => {
//       return {
//         ...prev,
//         user: {
//           ...prev?.user,
//           profileUrl: url,
//         },
//       };
//     });
//   };

//   useEffect(() => {
//     const progrssData: any = localStorage.getItem("progress");
//     const tickets: any = localStorage.getItem("allTickets");
//     const token = localStorage.getItem("sportifitoken");
//     const userInfo = localStorage.getItem("userDetails");

//     if (progrssData) progrssStatus(progrssData);
//     if (tickets) setAllTickets(tickets);
//     if (token) saveToken(token);
//     if (userInfo) saveUserDetails(userInfo);
//   }, []);

//   const values = {
//     progress,
//     progrssStatus,
//     ticketsData,
//     setAllTickets,
//     token,
//     saveToken,
//     userDetails,
//     saveUserDetails,
//     saveProfileURL,
//     imagefront,
//     setimagefront,
//     setimageback,
    
//     imageback,
//     seteventbox,
//     eventbox,
//     refreshtable, setRefreshtable,
//   };

//   return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
// }

// export function useDataContext() {
//   return useContext(DataContext);
// }
