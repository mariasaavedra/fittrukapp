import { useUser } from "@auth0/nextjs-auth0";
import {
  useState,
  useEffect,
} from "react";
import ClassCardList from "../../../components/ClassCardList/ClassCardList";
import Content from "../../../components/Content/Content";
import styles from "../../../components/Header/Header.module.css";
import Layout from "../../../components/Layout/Layout";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Title from "../../../components/Title/Title";
// ES6 Modules or TypeScript
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css'
import { useForm, SubmitHandler } from "react-hook-form";
import { ClassCardProps } from "../../../components/ClassCard/ClassCard";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

export default function Classes() {
  const url = "http://localhost:3333/events";
  const [data, setData] = useState([]);
  const { user, error, isLoading } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);
  const [q, setQ] = useState("");
  const router = useRouter();


  useEffect(() => {
    if (user) {
      if (user.email === 'msaav3@gmail.com') {
        setIsAdmin(true);
      }
      
      if (user.email === 'maria@advadigitalsolutions.com') {
        setIsAdmin(false);
      }
      // fetch(`http://localhost:3333/users/53`).then(async (response) => {
      //   if (response.status !== 200) {
      //     throw Error("Unable to load user");
      //   } else {
      //     const user = await response.json();
      //     if (user.role_id === 1 || user.role_id === 2) {
      //       setIsAdmin(true);
      //     }
      //   }
      // });
    }
  }, [user]);

  useEffect(() => {
    fetch(url).then(async (response) => {
      if (response.status !== 200) {
        throw Error("Unable to retrieve classes");
      } else {
        setData(await response.json());
      }
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const [selectedClass, setSelectedClass] = useState<Partial<ClassCardProps>>();

  const edit = (data: Partial<ClassCardProps>) => {
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
        fetch(`http://localhost:3333/events/${data.id}`,
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
        setTimeout(() => {
          router.reload();
        }, 500)
      }
    });
  };

  const onEdit = (selectedClass: Partial<ClassCardProps>) => {
    console.log(selectedClass);
    setSelectedClass(selectedClass);
    toggleDrawer();
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Partial<ClassCardProps>>();
  const onSubmit: SubmitHandler<Partial<ClassCardProps>> = (data) => {
    console.log(data)
    edit(data);
  }
  return (
    <>
      <Layout>
        <Sidebar></Sidebar>
        <Content>
          <div className={styles.HeaderComponent + " mt-0 mb-8"}>

            <Title> {"Classes"}</Title>
            {isAdmin && selectedClass && <>

              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                className='mx-auto py-8 min-w-[40vw] px-8'
                direction='right'>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='mb-8'>
                    <h3 className="text-xl uppercase">Classes</h3>
                    <hr />
                  </div>

                  <input type="hidden" {...register("id")} defaultValue={selectedClass.id}></input>

                  <label>Class Name</label>
                  <input className='my-2 p-2 w-full border block rounded-lg' {...register("title")} defaultValue={selectedClass.title} placeholder={selectedClass?.title || 'Enter'} />

                  <label>Class Level</label>
                  <input className='my-2 p-2 w-full border block rounded-lg' {...register("level")} defaultValue={selectedClass.level} placeholder={selectedClass?.level || ''} />

                  <label>Class Location</label>
                  <input className='my-2 p-2 w-full border block rounded-lg' {...register("location")} defaultValue={selectedClass.location} placeholder={selectedClass?.location || ''} />

                  <label>Class Price</label>
                  <input className='my-2 p-2 w-full border block rounded-lg' {...register("price")} defaultValue={selectedClass.price} placeholder={selectedClass?.price as string || ''} />

                  <label>Class Date</label>
                  <input className='my-2 p-2 w-full border block rounded-lg' {...register("startTime")} defaultValue={(selectedClass.startTime)?.toString()} placeholder={(selectedClass?.startTime)?.toString() || ''} />

                  <input className="bg-black my-4 w-full text-white rounded-md p-2" type="submit" />
                </form>
              </Drawer>
              <button onClick={toggleDrawer} className="p-2 w-[150px] absolute right-[50px] text-white bg-green-700 rounded-lg">
                Add Class
              </button>
            </>}
          </div>

          <ClassCardList onEdit={onEdit} isAdmin={isAdmin} classes={data}></ClassCardList>
        </Content>
      </Layout>
    </>
  );
}
