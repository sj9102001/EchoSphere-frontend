import Profile from "@/components/Profile/Profile";
import Layout from "@/components/Layout/Layout";
import React from "react";

type Props = {
    user: {
        username: string;
        email: string;
        id: number;
        bio: string | null;
    };
    visitingId: number
};

const ProfilePage = (props: Props) => {
    return (
        <Layout>
            <Profile visitingId={props.visitingId} email={props.user.email} name={props.user.username} bio={props.user.bio} />
        </Layout>
    );
};

export default ProfilePage;
export async function getServerSideProps(context: any) {
    const { userId } = context.params as { userId: string };
    try {
        const response = await fetch('http://localhost:8080/user/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId: parseInt(userId) })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return {
            props: {
                user: {
                    username: data.data.name,
                    email: data.data.email,
                    userId: data.data.id,
                    bio: data.data.bio
                },
                visitingId: userId
            }
        };
    } catch (error) {
        return {
            props: {
                user: {
                    username: "",
                    email: "",
                    userId,
                    bio: null
                },
                visitingId: userId
            }
        };
    }
}
