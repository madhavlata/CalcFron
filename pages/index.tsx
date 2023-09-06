
import { ory } from "../pkg/open-source";
import Redirect from "@anciitk/kratos-verify-session";
import "@anciitk/kratos-verify-session/dist/index.css";
import { useRouter } from "next/router";
import { xenon } from "../pkg/xenon";
import { useRecoilState } from "recoil";
import { useContext, useEffect, useState } from "react";
import { recoilSessionState } from "../pkg/recoilDeclarations";
import { loginStatus } from "../components/typeDefinitions/recoilDeclarations";
import { NextPage } from "next";
import styles from '../styles/Home.module.css'
import { Button } from "antd";
import { Space, Typography } from 'antd';
import { Loader } from "../components/loader";
import 'antd/dist/antd.css';
const Home: NextPage = () => {
  const router = useRouter();
  const { Title} = Typography;

  
  const [session, setSession] = useRecoilState(recoilSessionState);
  const [isLogIn, setIsLogIn] = useRecoilState(loginStatus);
  const [showOptions, setShowOptions] = useState(false)
  setIsLogIn(true);
  if (session !== undefined) {
    setSession(session);
    router.push("/dashboard");
  }


  if (isLogIn === true) {
    if (session === undefined) {
      // routerloader.push("./verify");
    }
  }

  useEffect(() => {
    ory
      .toSession()
      .then(({ data: session }) => {
        ory
          .createSelfServiceLogoutFlowUrlForBrowsers()
          .then(({ data: logout }) => {
            xenon
              .whoami()
              .then((user) => {
                setSession({
                  active: true,
                  logoutUrl: logout.logout_url || '',
                  user: user,
                  session: session
                })
                router.push("/dashboard");
              })
              .catch((err) => {
                // router.push("/dashboard");
                setShowOptions(true)
                throw new Error(err)
              })
          })
          .catch((err) => {
            // router.push("/dashboard");
            setShowOptions(true)
            return Promise.reject(err)
          })
          .catch((err) => {
            switch (err.response?.status) {
              case 403:
                setShowOptions(true)
                // router.push("/dashboard");
              case 401:
                setShowOptions(true)
                // router.push("/dashboard");
                return
            }
            // router.push("/dashboard");
            return Promise.reject(err)
          })
      })
      .catch((err) => {
        // router.push("/dashboard");
        setShowOptions(true)
        return
      })
      setShowOptions(true)
  }, [])

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  return (
    <>

    {/* ##################################################### */}
{/* Add loader here. Make sure showOptions is false while displaying the loader */}
    {/* ##################################################### */}
    

    
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        
          
        }}
      >
        <div className={styles.form_signup}>
              <div className={styles.imgOfCaptcha}>
                <img
                  src="./anc-logo.png"
                  alt="AnC IITK logo"
                  height="100px"
                />
                <h2 className={styles.headingForCaptcha}>
                  Academics and Career Council,
                  <br />
                  IIT Kanpur
                </h2>
              
                <Button type="primary"
                  className={styles.buttonSignp}
                  onClick={() => router.push(`${process.env.NEXT_PUBLIC_LOGIN_URL}?return_to=${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`)}
                >
                  Login
                </Button>
                <Button type="primary"
                  className={styles.buttonSignp}
                  onClick={() => router.push(`${process.env.NEXT_PUBLIC_ACCOUNTS_URL}/registration?return_to=${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`)}
                >
                  Register
                </Button>
                <Button type="primary"
                  className={styles.buttonSignp}
                  onClick={() => router.push(`./dashboard`)}
                >
                  Continue without LogIn
                </Button>                
               
              </div>
            </div>
            <Title level={5} style={{"color":"white","position":"absolute","right":"20px","bottom":"10px"}}>Web Team AnC@ 2022</Title>
      </div>
    </div>
    
    </>
  );
};

export default Home;

