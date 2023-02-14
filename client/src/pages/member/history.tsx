import { useState } from "react";
import ClassCardList from "../../components/ClassCardList/ClassCardList";
import Content from "../../components/Content/Content";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "../../components/Table/Table";

export default function History() {
  const [displayByTable, setDisplayByTable] = useState<boolean>(true);
  return (
    <>
      <Layout>
        <Sidebar></Sidebar>
        <Content>
          <Header
            title={"History"}
            toggleView={true}
            toggleFn={() => {
              setDisplayByTable((prev) => !prev);
            }}
          ></Header>
          {displayByTable ? (
            <Table columns={[]} data={[]}></Table>
          ) : (
            <ClassCardList></ClassCardList>
          )}
        </Content>
      </Layout>
    </>
  );
}
