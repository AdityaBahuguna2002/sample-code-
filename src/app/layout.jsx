import ClientProvider from "@/components/ClientProvider";
import "./globals.css";
import { testConnection } from '@/lib/database/connection';
import { syncDatabase } from '@/lib/database/sync';
import '@/lib/database/models';

export default async function RootLayout({ children }) {
  
  // const isConnected = await testConnection();
  // console.log("isConnected", isConnected);
  
  // if (!isConnected) {
  //   return (
  //     <html>
  //       <body>
  //         <h1>Database Connection Failed</h1>
  //         <p>Please check your database configuration</p>
  //       </body>
  //     </html>
  //   );
  // }

  // await syncDatabase();

  return (
    <html lang="en">
      <body className="font-sans">
        <ClientProvider>
          {children}
          </ClientProvider>
      </body>
    </html>
  );
}