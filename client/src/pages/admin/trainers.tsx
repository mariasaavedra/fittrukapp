import { useState, useEffect } from "react";
import Content from "../../components/Content/Content";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import TrainerList from "../../components/TrainerList/TrainerList";
import UserCard from "../../components/UserCard/UserCard";
// ES6 Modules or TypeScript
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css'
import { useForm, SubmitHandler } from "react-hook-form";

export default function Trainers() {
  const url = "http://localhost:3333/users/trainers";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url).then(async (response) => {
      if (response.status !== 200) {
        throw Error("Unable to retrieve trainers");
      } else {
        setData(await response.json());
      }
    });
  }, []);

  useEffect(() => {
    if (data.length > 0) console.log("data:", data);
  }, [data]);

  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);


  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        className='mx-auto py-8 min-w-[40vw] px-8'
        direction='right'>
        <form onSubmit={() => { }}>
          <div className='mb-8'>
            <h3 className="text-xl uppercase">Trainers</h3>
            <hr/>
          </div>

          <label>First Name</label>
          <input className='my-2 p-2 w-full border block rounded-lg' {...register("title")} placeholder="Enter First Name" />

          <label>Last Name</label>
          <input className='my-2 p-2 w-full border block rounded-lg' {...register("type")} placeholder="Enter Last Name" />

          <label>Email</label>
          <input className='my-2 p-2 w-full border block rounded-lg' {...register("description")} placeholder="Enter Email" />


          <label>City</label>
          <input className='my-2 p-2 w-full border block rounded-lg' {...register("price")} placeholder="Enter City" />

          <input className="bg-black my-4 w-full text-white rounded-md p-2" type="submit" />
        </form>
      </Drawer>
      <Layout>


        <Sidebar></Sidebar>
        <Content>
          <Header title={"Fittruk Trainers"}></Header>
          {data &&
            data.length > 0 &&
            data.map((trainer, id) => {
              return (
                <UserCard
                  key={id}
                  first_name={trainer.first_name}
                  last_name={trainer.last_name}
                  email={trainer.email}
                  city={trainer.city}
                  dob={trainer.dob}
                  zip={trainer.zip}
                  state={trainer.state}
                  onEdit={toggleDrawer}
                ></UserCard>
              );
            })}
        </Content>
      </Layout>
    </>
  );
}
