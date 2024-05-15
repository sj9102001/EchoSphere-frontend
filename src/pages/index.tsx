import { Inter } from "next/font/google";
import Layout from "@/components/Layout/Layout";
import Toast from "@/ui/Toast";
import { useSession } from "next-auth/react"
import Login from "./../components/Login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session, status } = useSession()
  if (status === "authenticated") {
    return (
      <div>
        <Toast></Toast>
        <Layout>
          <main>{session.user!.name}</main>
        </Layout>
      </div>
    );
  }

  return <Login></Login>

}
