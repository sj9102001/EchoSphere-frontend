import { Inter } from "next/font/google";
import Layout from "@/components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Layout>
        <main>Main Content</main>
      </Layout>
    </div>
  );
}
