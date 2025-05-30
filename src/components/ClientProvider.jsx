import ReactQueryProvider from "@/provider/ReactQueryProvider";

export default function ClientProvider({ children }) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}