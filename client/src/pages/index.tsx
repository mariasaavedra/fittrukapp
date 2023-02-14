import type { NextPage } from "next";
import { useUser } from "@auth0/nextjs-auth0";
import SplashPage from "../components/SplashPage/SplashPage";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("member/classes");
    }
  }, [router, user]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}

      {!user && (
        <div>
          <SplashPage></SplashPage>
        </div>
      )}
    </>
  );
};

export default Home;
