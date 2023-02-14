import { useRouter } from "next/router";
import ClassDetailsPage from "../../../components/ClassDetailsPage/ClassDetailsPage";
import Content from "../../../components/Content/Content";
import Layout from "../../../components/Layout/Layout";
import Sidebar from "../../../components/Sidebar/Sidebar";

export default function ClassDetail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Layout>
        <Sidebar></Sidebar>
        <Content>
          <ClassDetailsPage
            title={""}
            subtitle={""}
            startTime={undefined}
            description={""}
            name={""}
            experience={""}
            price={""}
            location={""}
            copyright={""}
          ></ClassDetailsPage>
        </Content>
      </Layout>
    </>
  );
}
