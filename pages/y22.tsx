import { Menu, Button, Dropdown ,Layout} from "antd";
// import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import "antd/dist/antd.css";
import type { NextPage } from "next";
import { Navigation, SPIstruct } from "../components/navigation";
import { isMobile } from "react-device-detect";
import Table, { ColumnsType } from "antd/lib/table";
import { useEffect, useState } from "react";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
// import { styled, useTheme } from '@mui/material/styles';
// import styles from "../styles/SignupStyles.module.css";
import {
  EllipsisOutlined,
  UserOutlined,
  BookOutlined,
  SettingOutlined,
  SolutionOutlined,
  ApartmentOutlined,
  MenuOutlined,
  LeftOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;

import List from "@mui/material/List";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
const drawerWidth = 240;
// import {e } from 'recoil';
import { DownOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { useRecoilState, useRecoilValue } from "recoil";
import { Avatar } from "antd";
import { recoilSessionState } from "../pkg/recoilDeclarations";
import styles from "../styles/SignupStyles.module.css";
import { Popover } from "antd";
import DataType from "../components/typeDefinitions/datatype";
import {
  allSemsData,
  Sem10Data,
  Sem11Data,
  Sem12Data,
  Sem13Data,
  Sem14Data,
  Sem15Data,
  Sem16Data,
  Sem1Data,
  Sem2Data,
  Sem3Data,
  Sem4Data,
  Sem5Data,
  Sem6Data,
  Sem7Data,
  Sem8Data,
  Sem9Data,
} from "../components/typeDefinitions/recoilDeclarations";
import { BranchesSelect } from "../components/auxilliary_functions/branchesAndSemesters";
import router from "next/router";
import { ory } from "../pkg/open-source";
import { xenon } from "../pkg/xenon";
import { Loader } from "../components/loader";

const items = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
    key: "1",
  },
];

const Home: NextPage = () => {

  const [collapsed, setCollapsed] = useState(true);
  const onCollapse = () => {
    if (collapsed === false) {
      setCollapsed(true);
    } else if (collapsed === true) {
      setCollapsed(false);
    }
  };

  const [session, setSession] = useRecoilState(recoilSessionState);
  const [loading, setLoading] = useState(false)

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
                setLoading(true)
              })
              .catch((err) => {
                return
                throw new Error(err)
              })
          })
          .catch((err) => {
            
            return Promise.reject(err)
          })
          .catch((err) => {
            switch (err.response?.status) {
              case 403:
                return
              case 401:
                
                return
            }
            
            return Promise.reject(err)
          })
      })
      .catch((err) => {
        
        
      })
      setLoading(true)
  }, [])


  const logoutUrl = session?.logoutUrl;
  const content = (
    <div>
      <Button
        style={{ width: "100%", borderColor: "#ffffff", textAlign: "left" }}
      >
        <Link href="./settings">
          <p className={styles.logoutMenuItem}>Settings</p>
        </Link>
      </Button>
      <Button
        style={{ width: "100%", borderColor: "#ffffff", textAlign: "left" }}
      >
        <Link href={`${logoutUrl}`}>
          <p className={styles.logoutMenuItem}>Logout</p>
        </Link>
      </Button>
    </div>
  );
  const sessiondata = useRecoilValue(recoilSessionState);
  // const userImage = `https://images-students-iitk.sgp1.digitaloceanspaces.com/images-students-iitk/${sessiondata?.user.rollno}.jpg`;
  var userImage = `https://img.freepik.com/free-icon/user_318-804790.jpg`;
  if (sessiondata?.user.rollno){
    userImage = `https://oa.cc.iitk.ac.in/Oa/Jsp/Photo/${sessiondata?.user.rollno}_0.jpg`;
  }
  const handleClick1 = () => {
    const element1 = document.getElementById("spi-cpi");
    element1?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick2 = () => {
    const element2 = document.getElementById("acad-status");
    element2?.scrollIntoView({ behavior: "smooth" });
  };
  const theme = useTheme();

  const [semData, setSemData] = useRecoilState(allSemsData);
  // const [trial, setTrial] = useState<DataType[][]>()
  const [status, setStatus] = useState("Normal");
  const [showStat, setShowStat] = useState(false);
  const [sem1a] = useRecoilState(Sem1Data);
  const [sem2a] = useRecoilState(Sem2Data);
  const [sem3a] = useRecoilState(Sem3Data);
  const [sem4a] = useRecoilState(Sem4Data);
  const [sem5a] = useRecoilState(Sem5Data);
  const [sem6a] = useRecoilState(Sem6Data);
  const [sem7a] = useRecoilState(Sem7Data);
  const [sem8a] = useRecoilState(Sem8Data);
  const [sem9a] = useRecoilState(Sem9Data);
  const [sem10a] = useRecoilState(Sem10Data);
  const [sem11a] = useRecoilState(Sem11Data);
  const [sem12a] = useRecoilState(Sem12Data);
  const [sem13a] = useRecoilState(Sem13Data);
  const [sem14a] = useRecoilState(Sem14Data);
  const [sem15a] = useRecoilState(Sem15Data);
  const [sem16a] = useRecoilState(Sem16Data);
  const tempFunc = () => {
    setSemData([]);
    let semDataAll = semData;
    semDataAll = [];
    if (sem1a.length !== 0) {
      semDataAll = [sem1a];
    }
    if (sem2a.length !== 0) {
      semDataAll?.push(sem2a);
    }
    if (sem3a.length !== 0) {
      semDataAll?.push(sem3a);
    }
    if (sem4a.length !== 0) {
      semDataAll?.push(sem4a);
    }
    if (sem5a.length !== 0) {
      semDataAll?.push(sem5a);
    }
    if (sem6a.length !== 0) {
      semDataAll?.push(sem6a);
    }
    if (sem7a.length !== 0) {
      semDataAll?.push(sem7a);
    }
    if (sem8a.length !== 0) {
      semDataAll?.push(sem8a);
    }
    if (sem9a.length !== 0) {
      semDataAll?.push(sem9a);
    }
    if (sem10a.length !== 0) {
      semDataAll?.push(sem10a);
    }
    if (sem11a.length !== 0) {
      semDataAll?.push(sem11a);
    }
    if (sem12a.length !== 0) {
      semDataAll?.push(sem12a);
    }
    if (sem13a.length !== 0) {
      semDataAll?.push(sem13a);
    }
    if (sem14a.length !== 0) {
      semDataAll?.push(sem14a);
    }
    if (sem15a.length !== 0) {
      semDataAll?.push(sem15a);
    }
    if (sem16a.length !== 0) {
      semDataAll?.push(sem16a);
    }
    setSemData(semDataAll);
  };

  const getStats = (semData: DataType[][]) => {
    let semDataAll = semData;
    semDataAll = [];
    if (sem1a.length !== 0) {
      semDataAll = [sem1a];
    }
    if (sem2a.length !== 0) {
      semDataAll?.push(sem2a);
    }
    if (sem3a.length !== 0) {
      semDataAll?.push(sem3a);
    }
    if (sem4a.length !== 0) {
      semDataAll?.push(sem4a);
    }
    if (sem5a.length !== 0) {
      semDataAll?.push(sem5a);
    }
    if (sem6a.length !== 0) {
      semDataAll?.push(sem6a);
    }
    if (sem7a.length !== 0) {
      semDataAll?.push(sem7a);
    }
    if (sem8a.length !== 0) {
      semDataAll?.push(sem8a);
    }
    if (sem9a.length !== 0) {
      semDataAll?.push(sem9a);
    }
    if (sem10a.length !== 0) {
      semDataAll?.push(sem10a);
    }
    if (sem11a.length !== 0) {
      semDataAll?.push(sem11a);
    }
    if (sem12a.length !== 0) {
      semDataAll?.push(sem12a);
    }
    if (sem13a.length !== 0) {
      semDataAll?.push(sem13a);
    }
    if (sem14a.length !== 0) {
      semDataAll?.push(sem14a);
    }
    if (sem15a.length !== 0) {
      semDataAll?.push(sem15a);
    }
    if (sem16a.length !== 0) {
      semDataAll?.push(sem16a);
    }
    setSemData(semDataAll);

    let numSems = 0;
    let prevSemCreds = 0;
    let totCreds = 0;
    let prevSemStatus = "Normal";

    for (let index = 0; index < semDataAll.length; index++) {
      for (let index2 = 0; index2 < semDataAll[index].length; index2++) {
        // if( semData[index][index2].credits_received !== 0 || semData[index][index2].grade !== "E") {
        totCreds = totCreds + semDataAll[index][index2].credits;
        if (index !== semDataAll.length - 1) {
          prevSemCreds = prevSemCreds + semDataAll[index][index2].credits;
        }
        // }
      }
      // setNumSems(numSems+1);
      numSems = numSems + 1;
      if (
        prevSemCreds >= 30 &&
        totCreds >= numSems * (numSems + 24) &&
        totCreds < 36 * numSems
      ) {
        setStatus("Warning");
      }
      if (prevSemCreds < 30 && totCreds >= 36 * numSems) {
        setStatus("Warning");
      }

      if (prevSemCreds >= 30 && totCreds < (24 + numSems) * numSems) {
        setStatus("Academic Probation");
        prevSemStatus = "Academic Probation";
      } else if (
        prevSemCreds < 30 &&
        totCreds >= numSems * (numSems + 24) &&
        totCreds < 36 * numSems
      ) {
        setStatus("Academic Probation");
        prevSemStatus = "Academic Probation";
      } else if (
        prevSemCreds < 30 &&
        totCreds < (24 + numSems) * numSems &&
        prevSemStatus != "Academic Probation"
      ) {
        setStatus("Academic Probation");
        prevSemStatus = "Academic Probation";
      } else if (
        prevSemStatus == "Academic Probation" &&
        prevSemCreds < 30 &&
        totCreds < (24 + numSems) * numSems
      ) {
        setStatus("Programme Termination");
      }
    }
    setShowStat(true);
  };

  const [results, setResults] = useState<SPIstruct[]>([]);
  const [cpi, setCpi] = useState(0);
  const [showStat2, setShowStat2] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const columns: ColumnsType<SPIstruct> = [
    {
      title: "Semester",
      dataIndex: "sem_name",
      key: "sem_name",
    },
    {
      title: "SPI",
      dataIndex: "spi",
      key: "spi",
    },
    {
      title: "Credits Completed",
      dataIndex: "credits_completed",
      key: "credits_completed",
    },
  ];

  const getSPI = () => {
    let semDataAll = semData;
    semDataAll = [];
    if (sem1a.length !== 0) {
      semDataAll = [sem1a];
    }
    if (sem2a.length !== 0) {
      semDataAll?.push(sem2a);
    }
    if (sem3a.length !== 0) {
      semDataAll?.push(sem3a);
    }
    if (sem4a.length !== 0) {
      semDataAll?.push(sem4a);
    }
    if (sem5a.length !== 0) {
      semDataAll?.push(sem5a);
    }
    if (sem6a.length !== 0) {
      semDataAll?.push(sem6a);
    }
    if (sem7a.length !== 0) {
      semDataAll?.push(sem7a);
    }
    if (sem8a.length !== 0) {
      semDataAll?.push(sem8a);
    }
    if (sem9a.length !== 0) {
      semDataAll?.push(sem9a);
    }
    if (sem10a.length !== 0) {
      semDataAll?.push(sem10a);
    }
    if (sem11a.length !== 0) {
      semDataAll?.push(sem11a);
    }
    if (sem12a.length !== 0) {
      semDataAll?.push(sem12a);
    }
    if (sem13a.length !== 0) {
      semDataAll?.push(sem13a);
    }
    if (sem14a.length !== 0) {
      semDataAll?.push(sem14a);
    }
    if (sem15a.length !== 0) {
      semDataAll?.push(sem15a);
    }
    if (sem16a.length !== 0) {
      semDataAll?.push(sem16a);
    }
    setSemData(semDataAll);

    let totCreds = 0;
    let receivedCreds = 0;
    let res = results;
    res = [];
    for (let index = 0; index < semDataAll.length; index++) {
      let spi_cred = 0;
      let spi_cred_done = 0;
      let cred = 0;
      for (let index2 = 0; index2 < semDataAll[index].length; index2++) {
        if (
          semDataAll[index][index2].grade !== "S" &&
          semDataAll[index][index2].grade !== "X"
        ) {
          if (semDataAll[index][index2].is_repeated === false) {
            totCreds = totCreds + semDataAll[index][index2].credits;
            receivedCreds =
              receivedCreds + semDataAll[index][index2].credits_received;
          }
          spi_cred = spi_cred + semDataAll[index][index2].credits;
          spi_cred_done =
            spi_cred_done + semDataAll[index][index2].credits_received;
        }
        if (
          semDataAll[index][index2].grade !== "X" &&
          semDataAll[index][index2].grade !== "E(old)" &&
          semDataAll[index][index2].grade !== "E(new)" &&
          semDataAll[index][index2].grade !== "F"
        ) {
          cred += semDataAll[index][index2].credits;
        }
      }
      let sem_name = index.toString();
      let singleSem: SPIstruct = {
        sem_name: sem_name,
        spi: Number(((spi_cred_done / spi_cred) * 10).toFixed(3)),
        credits_completed: cred,
      };
      res.push(singleSem);
    }
    setCpi(Number(((receivedCreds / totCreds) * 10).toFixed(3)));
    setResults(res);
    setShowStat2(true);
  };
  const displayAllInfo = () => {
    return (
      <>
      
        <Navigation />
        <div>
          {" "}
          {showStat && (
            <div style={{ paddingBottom: "50px" }}>
              {semData.length > 0 && (
                <p
                  style={{
                    fontSize: "25px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {status}
                </p>
              )}
              {semData.length == 0 && (
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Enter data into the semesters to find out your academic status
                </p>
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button onClick={() => setShowStat(false)}>Hide Status</Button>
              </div>
            </div>
          )}
        </div>

        <div>
          {showStat2 && (
            <div style={{ paddingBottom: "50px" }}>
              {semData.length > 0 && (
                <div>
                  <Table columns={columns} dataSource={results} />
                  <p
                    style={{
                      fontSize: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Overall CPI : {cpi}
                  </p>
                </div>
              )}
              {semData.length == 0 && (
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Enter data into the semesters to find out your SPI / CPI
                </p>
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button onClick={() => setShowStat2(false)}>
                  Hide CPI / SPI
                </Button>
              </div>
            </div>
          )}
        </div>
      </>
    );
  };
  return (
    

    
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Layout style={{
        height: "100vh",  
      }}>
        {/* <Header
          style={{
            display: "flex",
            position: "fixed",
            zIndex: 1,
            width: "100%",
            top: 0,
            right: 0,
            left: 0,
            boxShadow: "0px 10px 5px lightblue",
          }}
        >
          {
            <div className={styles.mobile}>
              <Button
                onClick={handleDrawerOpen}
                style={{
                  backgroundColor: "#001529",
                  color: "lightgray",
                  marginTop: "15px",
                  marginRight: "15px",
                }}
              >
                <MenuIcon />
              </Button>
              <Drawer
                sx={{
                  width: 0,
                  flexShrink: 0,
                  zIndex: 10000,
                  "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                  },
                }}
                variant="persistent"
                anchor="left"
                open={open}
              >
                <>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "ltr" ? (
                      <ChevronLeftIcon />
                    ) : (
                      <ChevronRightIcon />
                    )}
                  </IconButton>
                </>
                <Divider />
                <List>
                  <ListItem key="Cpi">
                    <ListItemButton
                      onClick={() => {
                        tempFunc();
                        getSPI();
                        handleClick1();
                      }}
                    >
                      <ListItemText primary="Get Spi/Cpi" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key="AP">
                    <ListItemButton
                      onClick={() => {
                        tempFunc();
                        getStats(semData);
                        handleClick2();
                      }}
                    >
                      <ListItemText primary="Find Status" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key="y22">
                    <ListItemButton href="./">
                      <ListItemText primary="Non Y22" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Drawer>{" "}
            </div>
          }
          <div
            className="logo"
            style={{
              marginRight: "30px",
              paddingLeft: "15px",
              paddingRight: "15px",
              backgroundColor: "whitesmoke",
              borderRadius: 5,
            }}
          >
            <a href="https://anciitk.in">
              <img
                src="https://anciitk.in/img/anc-logo.png"
                alt="AnC IITK logo"
                height="50px"
              />
            </a>
          </div>
          {
            <div
              className={styles.nonmobile}
              style={{
                color: "whitesmoke",
                paddingLeft: 10,
                paddingRight: 30,
                fontSize: 30,
                minWidth: 500,
              }}
            >
              {" "}
              Academics and Career Council{" "}
            </div>
          }
          {
            <div className={styles.nonmobile}>
              <Menu
                theme="dark"
                mode="horizontal"
                items={[
                  {
                    key: "SPI",
                    label: "Get SPI / CPI",
                    onClick: () => {
                      tempFunc();
                      getSPI();
                      handleClick1();
                    },
                  },
                  {
                    key: "AP",
                    label: "Find Status",
                    onClick: () => {
                      tempFunc();
                      getStats(semData);
                      handleClick2();
                    },
                  },
                ]}
              />
            </div>
          }
          <Button
            // style={{
            //   backgroundColor: "#001529",
            //   color: "lightgray",
            //   marginTop: "15px",
            // }}
            href="./"
            className={styles.loaderY22}
          >
            Pre Y22
          </Button>
          <div>
            {sessiondata?.user.id && (
              <Popover
                placement={"bottomRight"}
                content={content}
                title="My Profile"
                trigger="click"
              >
                <Avatar
                  size={50}
                  src={userImage}
                  style={{
                    position: "absolute",
                    right: 20,
                    top: 20,
                  }}
                ></Avatar>
              </Popover>
            )}
            {!sessiondata?.user.id && (
              <Button
                style={{
                  position: "fixed",
                  right: "30px",
                }}
                className={styles.loaderY22}
                href={`${process.env.NEXT_PUBLIC_LOGIN_URL}?return_to=${process.env.NEXT_PUBLIC_BASE_URL}/y22`}
              >
                Login
              </Button>
            )}
          </div>
        </Header> */}



        <div>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{position:"fixed",height:"100vh", top:"0vh",zIndex:"100"}}>
            <Menu theme="dark"  mode="inline">
              <Menu.Item key="1" icon={<UserOutlined />}  onClick={() => {
              tempFunc();
              getSPI();
              handleClick1();
            }} style={{borderBottom:"0.5px #757575 solid"}}>
                <Link href={''}>Get SPI/CPI</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<ApartmentOutlined />}  onClick={() => {
              tempFunc();
              getStats(semData);
              handleClick2();
            }} style={{borderBottom:"0.5px #757575 solid"}}>
              <Link href={``}>Find Status</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<SolutionOutlined />} onClick={() => router.push("/dashboard")} style={{borderBottom:"0.5px #757575 solid"}}>
              <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`}>PRE Y22</Link>
              </Menu.Item>
              
            </Menu>
          </Sider>
          <Header
              className="site-layout-background"
              style={{
                padding: 0,
                // position:"relative",
                backgroundColor: "#ffffff",
                width:"100vw",
                height: "70px",
                boxShadow: "2px 2px 4px #b1b1b1",
                display: "flex",
                justifyContent:"center"
              }}
            >
              <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`}>
                <img
                  src="https://anciitk.in/img/anc-logo.png"
                  alt="AnC IITK logo"
                  height="53px"
                  className={styles.profileLogo}
                />
              </Link>
              <div
              className={styles.nonmobileT}
              // className={styles.nonmobile}
              style={{
                color: "black",

                
                // minWidth: 500,
              }}
            >
              
              Academics and Career Council
            </div>
            <Popover placement={"bottomRight"} content={content} title="My Profile" trigger="click">
              <div style={{
                padding: 0,
                backgroundColor: "#ffffff",
                width:"15vw",
                height: "70px",
                boxShadow: "4px 2px 4px #b1b1b1",
                display: "flex",
                position:"absolute",
                right:"0px",
                zIndex:"10",
                
              }}>
              

              {sessiondata?.user.rollno && <Avatar
                size={50}
                // src={profileAvatarUrl}
                src={userImage}
                style={{
                  // backgroundColor:"#ffffff",
                  // height:"90px",
                  // boxShadow: "2px 2px 4px #b1b1b1",
                  position: "absolute",
                  right: 20,
                  top: 5,
                }}
              >    
                
              </Avatar>}
              </div>
              </Popover>
            </Header></div>
        <div></div>
        <div>
          {!isMobile && (
            <Content
            className={styles.bothmobile}
            >
              {/* <div  style={{ justifyContent:'center', alignItems:'center'}}> */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  CPI/SPI/Status Calculator
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Find your semwise SPI and CPI using the AnC calculator. Add
                  new semesters and add new courses to each semester to get the
                  data. You can also click on the button &quot;repeated&quot; if
                  that course has been repeated by the student and the better
                  grade is obtained in the next attempt. Note that only the best
                  attempt of each course should have the repeated button not
                  clicked.
                </p>
              </div>
              <div>
                <BranchesSelect />
              </div>

              {!isMobile && (
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 200 }}
                >
                  {displayAllInfo()}
                </div>
              )}
              {isMobile && (
                <div
                  className="site-layout-background"
                  style={{ minHeight: 620 }}
                >
                  {displayAllInfo()}
                </div>
              )}
            </Content>
          )}
        </div>
        <div>
          {isMobile && (
            <Content
            className={styles.bothmobile}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  CPI/SPI/Status Calculator
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p className={styles.nonmobileP}
                  style={{
                    fontSize: "15px",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "10px",
                  }}
                >
                  Find your semwise SPI and CPI using the AnC calculator. Click
                  on &quot;Semesters Done&quot; button to select your current
                  semester, and choose your beanch from the &quot;Select
                  Branch&quot; button. You can also click on the button
                  &quot;repeated&quot; if that course has been repeated by the
                  student and the better grade is obtained in the next attempt.
                  Note that only the best attempt of each course should have the
                  repeated button not clicked.
                </p>
              </div>

              <div
                className="site-layout-background"
                style={{ padding: 24, }}
              >
                <Navigation />
                <div id="acad-status">
                  {" "}
                  {showStat && (
                    <div style={{ paddingBottom: "50px" }}>
                      {semData.length > 0 && (
                        <p
                          style={{
                            fontSize: "25px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {status}
                        </p>
                      )}
                      {semData.length == 0 && (
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          Enter data into the semesters to find out your
                          academic status
                        </p>
                      )}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button onClick={() => setShowStat(false)}>
                          Hide Status
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                <div id="spi-cpi">
                  {showStat2 && (
                    <div style={{ paddingBottom: "50px" }}>
                      {semData.length > 0 && (
                        <div>
                          <Table columns={columns} dataSource={results} />
                          <p
                            style={{
                              fontSize: "30px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            Overall CPI : {cpi}
                          </p>
                        </div>
                      )}
                      {semData.length == 0 && (
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          Enter data into the semesters to find out your SPI /
                          CPI
                        </p>
                      )}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button onClick={() => setShowStat2(false)}>
                          Hide CPI / SPI
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Content>
          )}
        </div>

        <Footer
          style={{
            textAlign: "center",
            position: "fixed",
            bottom: "0px",
            left: "0px",
            right: "0px",
          }}
        >
          AnC web team ©2022{" "}
        </Footer>
      </Layout>
    </div>
    
  );
};

export default Home;
