import React, { useEffect, useState } from "react";
import { useCountdown } from "../../hooks/useCountdown";
import Button from "../Button/Button";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import styles from "./ClassDetailsPage.module.css";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import ReadMoreReadLess from "../ReadMoreReadLess/ReadMoreReadLess";
import { useRouter } from "next/router";
import Link from "next/link";
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css'
import CanvasDraw from "react-canvas-draw";


export interface ClassDetailsPageProps {
  title: string;
  subtitle: string;
  startTime: Date;
  description: string;
  video?: string;
  image?: HTMLImageElement;
  name: string;
  experience: string;
  price: string | number;
  location: string;
  copyright: string;
  skill_level: string;
}

export default function ClassDetailsPage(props: ClassDetailsPageProps) {
  const router = useRouter();
  const { id } = router.query;

  const url = `http://localhost:3333/events/${id}`;

  console.log(url);

  const [data, setData] = useState<ClassDetailsPageProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayByTable, setDisplayByTable] = useState<boolean>(true);

  useEffect(() => {
    if (!id || data) {
      return;
    }
    fetch(url).then(async (response) => {
      const r = await response.json();
      console.log(r);
      setData(r);
    });
  }, [data, id, url]);

  const [days, hours, minutes] = useCountdown(props.startTime);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    fetch('http://localhost:3333/send-sms');
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div className={styles.ClassDetailsPageComponent}>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        className='mx-auto py-8 min-w-[40vw] px-8'
        direction='right'>
        <div>
          <div className='my-8'>
            <h3 className="text-xl uppercase">LIABILITY Waiver</h3>
            <hr />
            <p className='my-4 mt-6 leading-relaxed text-[#6D6E71]'>We need one more thing. By signing, you acknowledge that you understand and agree to the liability waiver for FitTruck.</p>

            <p className='my-4 leading-relaxed text-[#6D6E71]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse orci, neque enim tempus, non pulvinar at. Bibendum imperdiet consequat lectus quam at cras nec et.</p>

            <p className='my-4 leading-relaxed text-[#6D6E71]'> Vitae, et condimentum tellus convallis. Convallis nulla tellus pharetra bibendum natoque et tellus tellus tortor. Integer gravida nullam in morbi lectus sollicitudin risus nam nibh. Nulla ullamcorper senectus amet, pharetra. Pulvinar mauris tincidunt ac suscipit.</p>

            <p className='my-4 leading-relaxed text-[#6D6E71]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse orci, neque enim tempus, non pulvinar at. Bibendum imperdiet consequat lectus quam at cras nec et.</p>

            <CanvasDraw brushRadius={2} canvasHeight={200} hideGrid={true} />

            <Link target="_blank" href="https://buy.stripe.com/test_bIY29JgM0ckCbBK9AA">
              <Button stretch={true} backgroundColor="secondary">
                Submit
              </Button>
            </Link>

          </div>
        </div>
      </Drawer>
      <div className={styles.leftSide}>
        <section className={styles.containerOne}>
          <div>
            <h1 className={styles.title}>{data?.title}</h1>
            <h2 className={styles.subtitle}>{data?.skill_level}</h2>
          </div>
          <div className={styles.countdown}>
            <span>5d</span>:<span>11h</span>:<span>01m</span>
          </div>
          <ReadMoreReadLess
            description={data?.description || ""}
            textLimit={200}
          />
          <div className={styles.container}>
            <div className={styles.containerTwo}>
              <div className={styles.hexagon}>
                <div className={styles.hexagonOne}>
                  <div className={styles.hexagonTwo}></div>
                </div>
              </div>
              <div className={styles.infoContainer}>
                <h3 className={styles.name}>Roger Botosh</h3>
                <h4 className={styles.experience}>30 Years</h4>
              </div>
            </div>
            <p className={styles.price}>$1.99</p>
          </div>
          <div className={styles.classContainer}>
            <div className={styles.date}>
              <CalendarMonthOutlinedIcon />
              <span className={styles.dateText}>27/06/2022</span>
            </div>
            <div className={styles.time}>
              <ScheduleOutlinedIcon />
              <span className={styles.timeText}>8:45PM</span>
            </div>
            <div className={styles.location}>
              <PlaceOutlinedIcon />
              <span className={styles.locationText}>
                {" "}
                3, Bay area, California, USA
              </span>
            </div>
          </div>
          <div className={styles.registerContainer}>
            <div className={styles.textContainer}>
              <p className={styles.registerSubtitle}>Total Amount</p>
              <p className={styles.registerPrice}>$ 1.99</p>
            </div>

            <Button onClick={toggleDrawer} stretch={true} backgroundColor="secondary">
              Pay Now & Join Class
            </Button>

          </div>
        </section>
        <VideoPlayer src={"/videos/rope-class.mp4"} />
      </div>
    </div>
  );
}
