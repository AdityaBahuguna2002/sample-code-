import AuthServices from "@/lib/services/admin/auth.services";
import { AuthContextProvider } from "../context/authContext";
import { PostContextProvider } from "../context/postContext";

export default async function AppProviders({ children }) {
    const initialAuth = await AuthServices.getSession();

    return(
        <AuthContextProvider initialAuth={initialAuth?.data}>
            <PostContextProvider>
                {children}
            </PostContextProvider>
        </AuthContextProvider>
    )
}