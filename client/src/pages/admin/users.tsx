import Title from '../../components/Title/Title';
import { useState, useEffect } from "react";
import Content from "../../components/Content/Content";
import Header from "../../components/Header/Header";
import InputSearch from "../../components/InputSearch/InputSearch";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import UserCard, { UserCardProps } from "../../components/UserCard/UserCard";
import ViewToggle from "../../components/ViewToggle/ViewToggle";
import styles from "../../components/Header/Header.module.css";
// ES6 Modules or TypeScript
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css'
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from 'sweetalert2';


export default function Users() {
  const url = "http://localhost:3333/users";

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


  const [selectedUser, setSelectedUser] = useState<Partial<UserCardProps>>();

  const edit = (data: Partial<UserCardProps>) => {
    console.log('edit', data)
    Swal.fire({
      title: "You're about to update this event",
      text: "Are you sure?",
      icon: "info",
      confirmButtonColor: "#333",
      confirmButtonText: "Update",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:3333/users/${data.id}`,
          {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
          .then(
            () => (console.log("edited"))
          );
        Swal.fire("Edited!", "", "success");
      }
    });
  };

  const onEdit = (selectedUser: Partial<UserCardProps>) => {
    console.log(selectedUser);
    setSelectedUser(selectedUser);
    toggleDrawer();
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Partial<UserCardProps>>();
  const onSubmit: SubmitHandler<Partial<UserCardProps>> = (data) => {
    console.log(data)
    edit(data);
  }

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        className='mx-auto py-8 min-w-[40vw] px-8'
        direction='right'>
        {selectedUser && <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-8'>
            <h3 className="text-xl uppercase">Users</h3>
            <hr />
          </div>
          <input type={'hidden'} {...register("id")} defaultValue={selectedUser?.id} />

          <label>First Name</label>
          <input className='my-2 p-2 w-full border block rounded-lg' {...register("first_name")} placeholder={selectedUser?.first_name} defaultValue={selectedUser?.first_name} />

          <label>Last Name</label>
          <input className='my-2 p-2 w-full border block rounded-lg' {...register("last_name")} placeholder={selectedUser?.last_name} defaultValue={selectedUser?.last_name} />

          <label>Email</label>
          <input className='my-2 p-2 w-full border block rounded-lg' {...register("email")} placeholder={selectedUser?.email} defaultValue={selectedUser?.email} />


          <label>City</label>
          <input className='my-2 p-2 w-full border block rounded-lg' {...register("city")} placeholder={selectedUser?.city} defaultValue={selectedUser?.city} />

          <input className="bg-black my-4 w-full text-white rounded-md p-2" type="submit" />
        </form>}

      </Drawer>
      <Layout>
        <Sidebar></Sidebar>
        <Content>
          <div className={styles.HeaderComponent + " mt-0 mb-8"}>
            <Title> {"Users"}</Title>
            {/* <InputSearch></InputSearch>
            <ViewToggle
              displayTableIcon={false}
              toggleFn={() => {}}
            ></ViewToggle> */}
          </div>
          {data &&
            data.length > 0 &&
            data.map((trainer, id) => {
              return (
                <UserCard
                  id={trainer.id}
                  key={id}
                  first_name={trainer.first_name}
                  last_name={trainer.last_name}
                  email={trainer.email}
                  city={trainer.city}
                  dob={trainer.dob}
                  zip={trainer.zip}
                  state={trainer.state}
                  onEdit={onEdit}
                ></UserCard>
              );
            })}
        </Content>
      </Layout>
    </>
  );
}