import Banner from "../../components/Banner/Banner";
import Content from "../../components/Content/Content";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./profile.module.css";
import { useUser } from "@auth0/nextjs-auth0";

export interface ProfileProps {
  name: string;
  email: string;
  phone: string;
  dob: string;
  city: string;
  state: string;
}
export default function Profile(props: ProfileProps) {
  const { user, isLoading } = useUser();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <Layout>
        <Sidebar></Sidebar>
        <Content>
          {/* <Banner name={props.name}></Banner> */}
          <h3>{props.name}</h3>
          {user && (
            <div>
              <img
                className="rounded-full"
                src={user?.picture}
                alt={user?.name}
              />
              <h3 className="text-lg font-weight-bold my-4 mx-2">Personal Information</h3>
              <div className="inline-flex shadow-lg card rounded-xl bg-white max-w-xs text-center p-4 m-2">
                <p>{user?.given_name + ' ' +  user?.family_name}</p>
              </div>
              <div className="inline-flex shadow-lg card rounded-xl bg-white max-w-xs text-center p-4 m-2">
                <p>{user?.email}</p>
              </div>

            
            </div>
          )}
        </Content>
      </Layout>
    </>
  );
}
