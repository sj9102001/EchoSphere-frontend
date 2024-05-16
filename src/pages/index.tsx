import Layout from "@/components/Layout/Layout";
import { Inter } from "next/font/google";

export default function Home() {
  return <Layout>
    <div>Logged in</div>
  </Layout>

}

// export async function getServerSideProps(context: any) {
//   const req = context.req;
//   const cookieHeader = req.headers.cookie;
//   const authResponse = await fetch("http://localhost:8080/user/verifyAuth", {
//     headers: {
//       Cookie: cookieHeader,
//     },
//   });

//   if (authResponse.status === 401) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   const authData = await authResponse.json();

//   return {
//     props: {
//       user: {
//         name: authData.user.name,
//         email: authData.user.email,
//         id: authData.user.id,
//       },
//     },
//   };
// }
