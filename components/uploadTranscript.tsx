import { InputRef, Tag } from "antd";
import { Button, Spin } from "antd";
import type { FormInstance } from "antd/es/form";
import React, { useContext, useEffect, useRef, useState } from "react";
import "antd/dist/antd.css";
import {  Dropdown, Menu, MenuProps } from "antd";

import DataType, { components } from "./typeDefinitions/datatype";
import styles from "../styles/SignupStyles.module.css";
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
  semCount,
  allCourses,
  branche,
  cpispichoosere,
} from "./typeDefinitions/recoilDeclarations";
import axios from "axios";
import getCreditsReceived from "./auxilliary_functions/getCreditsReceived";
// import { jsonOfCourseCredits } from './data/courseCredits';
import { useRecoilState, useRecoilValue } from "recoil";
import { recoilSessionState } from "../pkg/recoilDeclarations";
import {
  addAllData,
  defaultColumns,
} from "./essensial_functionality/columnDeclaration";
import { RepeatedSems } from "./repeated_sems";
import type { RadioChangeEvent } from "antd";
import { Input, Radio } from "antd";
import { json } from "react-router";
import { Space, Modal } from "antd";
import { PassThrough } from "stream";

let setVar = 4;
let userDataExist = 0;

let ver = 0;
export const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const [count, setCount] = useRecoilState(semCount);
  // setCount(dummyData.length);
  const [semData, setSemData] = useRecoilState(allSemsData);
  const [jsonOfCourseCredits, setjsonOfCourseCredits] =
    useRecoilState(allCourses);
  const [sem1, setSem1] = useRecoilState(Sem1Data);
  const [sem2, setSem2] = useRecoilState(Sem2Data);
  const [sem3, setSem3] = useRecoilState(Sem3Data);
  const [sem4, setSem4] = useRecoilState(Sem4Data);
  const [sem5, setSem5] = useRecoilState(Sem5Data);
  const [sem6, setSem6] = useRecoilState(Sem6Data);
  const [sem7, setSem7] = useRecoilState(Sem7Data);
  const [sem8, setSem8] = useRecoilState(Sem8Data);
  const [sem9, setSem9] = useRecoilState(Sem9Data);
  const [sem10, setSem10] = useRecoilState(Sem10Data);
  const [sem11, setSem11] = useRecoilState(Sem11Data);
  const [sem12, setSem12] = useRecoilState(Sem12Data);
  const [sem13, setSem13] = useRecoilState(Sem13Data);
  const [sem14, setSem14] = useRecoilState(Sem14Data);
  const [sem15, setSem15] = useRecoilState(Sem15Data);
  const [courseDataFetched, setCourseDataFetched] = useState(0);
  const [sem16, setSem16] = useRecoilState(Sem16Data);
  const [branch, setBranch] = useRecoilState(branche);
  const [cpispichooser,setCpispiChooser]=useRecoilState(cpispichoosere);
  var datagrades;
  const sessiondata = useRecoilValue(recoilSessionState);
  let userId = "45645464676gchghc";
  if (sessiondata?.user.id) {
    userId = sessiondata?.user.id;
  }
  const getCourseData = async () => {
    try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}courses`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch data (HTTP ${res.status})`);
    }
    const data = await res.json();
    setjsonOfCourseCredits(data.data);
  
  } catch (error) {
    console.error("Error fetching data:", error);
  }
    
  };
  if (!courseDataFetched) {
    getCourseData();
    setCourseDataFetched(1);
  }

  // const [count, setCount] = useRecoilState(semCount);
  const getdata = async () => {
    let email = "";
    if (sessiondata?.user.email) {
      email = sessiondata?.user.email;

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}getuser/${email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      if (data) {
        datagrades = data.data.gradesData;
        console.log(datagrades)
        // dummyData=data.gradesData;
        if (semData.length && datagrades.length > 0) {
          // alert(<h1>vcvcvcc</h1>)
          var actionUser = prompt(
            "If you want to replace entered courses with the one you have saved earlier go with Remove else Continue",
            "Remove or Continue"
          );

          if (actionUser === "Remove" || actionUser === "remove") {
            // if (actionUser)
            if (count < datagrades.length) {
              setCount(datagrades.length);
            } else {
            }
            if (ver == 0) {

              for (let y = 0; y < datagrades.length; y++) {
                semArray[y](datagrades[y]);
              }
              ver = 1;
            }
            userDataExist = 1;
          } else if (actionUser === "Continue" || actionUser === "Continue") {
            userDataExist = 1;
          }
        } else {
          if (count < datagrades.length) {
            setCount(datagrades.length);
          } else {
          }
          if (ver == 0) {

            for (let y = 0; y < datagrades.length; y++) {
              semArray[y](datagrades[y]);
            }
            ver = 1;
          }
          userDataExist = 1;
        }
      }

      if (res.status === 422) {
      } else {
      }
    }
  };
  

  // const getdatasembranchspi=async(sem:any,branch:string)=>{
    
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}coursesp/${sem}/${branch}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await res.json();
  //   if (data){
  //     datagrades=data.data.gradesData;
  //     if(semData.length && datagrades.length>0){
  //       setCount(1);
  //       semArray[0](datagrades[0]);
  //     }
  //   }

  // }
  const getdatasembranchcpi=async()=>{
    const sem="3";
    const branch="";
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}coursesa/${sem}/${branch}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data){
      datagrades=data.data.gradesData;
      if(semData.length && datagrades.length>0){
        setCount(datagrades.length);
        for(let y=0;y<datagrades.length;y++){
          semArray[y](datagrades[y]);
        }
      }
    }

  }
  const semArray = [
    setSem1,
    setSem2,
    setSem3,
    setSem4,
    setSem5,
    setSem6,
    setSem7,
    setSem8,
    setSem9,
    setSem10,
    setSem11,
    setSem12,
    setSem13,
    setSem14,
    setSem15,
    setSem16,
  ];
  const addinpdata = async () => {
    // e.preventDefault();

    const gradesData = semData;
    let email = "";
    if (sessiondata?.user.email) {
      email = sessiondata?.user.email;

      // const { name, email, work, add, mobile, desc, age } = {name:"saksham",email:"sakshamag2@gmail.com",
      //  work:"xnbc",add:"sf",mobile:845678923,desc:"yjsd",age:12};

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}register1`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            gradesData,
            email,
          }),
        }
      );

      const data = await res.json();
      alert("Data saved");

      // }
    } else {
      alert("You must login for saving ");
    }
  };

  const [alreadyLoggedin, setalredayLoggedin] = useState(false);
  if (userId && setVar && setVar !== 2 && !alreadyLoggedin) {
    getdata();
    setalredayLoggedin(true);
    setVar = setVar - 1;
  } else {
    setVar = setVar - 1;
  }
  const updateData = async () => {
    // e.preventDefault();
    const gradesData = semData;
    let email = "";
    if (sessiondata?.user.email) {
      email = sessiondata?.user.email;
    }

    const res2 = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}updateuser/${email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          gradesData,
          email,
        }),
      }
    );

    const data2 = await res2.json();
    alert("Data Updated");
  };

  const handleSave = (
    row: DataType,
    sem: DataType[],
    setSem: any,
    isCourse: boolean
  ) => {
    addAllData(
      setSemData,
      semData,
      sem1,
      sem2,
      sem3,
      sem4,
      sem5,
      sem6,
      sem7,
      sem8,
      sem9,
      sem10,
      sem11,
      sem12,
      sem13,
      sem14,
      sem15,
      sem16
    );
    const newData = [...sem];
    if (isCourse === true) {
      let courseAtHand = jsonOfCourseCredits.filter(
        (item) =>
          item.course === row.course
      );
      if (courseAtHand.length === 0) {
        row.credits = 0;
      } else {
        row.credits = courseAtHand[0].cred;
      }
    } else {
      row.credits_received = getCreditsReceived(row.credits, row.grade);
    }
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setSem(newData);
    addAllData(
      setSemData,
      semData,
      sem1,
      sem2,
      sem3,
      sem4,
      sem5,
      sem6,
      sem7,
      sem8,
      sem9,
      sem10,
      sem11,
      sem12,
      sem13,
      sem14,
      sem15,
      sem16
    );
  };

  const columns = (sem: DataType[], setSem: any, sem_num: number) =>
    defaultColumns(
      sem,
      setSem,
      sem_num,
      count,
      setCount,
      setSemData,
      semData,
      sem1,
      sem2,
      sem3,
      sem4,
      sem5,
      sem6,
      sem7,
      sem8,
      sem9,
      sem10,
      sem11,
      sem12,
      sem13,
      sem14,
      sem15,
      sem16
    ).map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: DataType) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave,
          sem,
          setSem,
          message: col.message,
          is_sx: record.is_sx,
        }),
      };
    });

    const [isLoading, setIsLoading] = React.useState(false);
    const inputFileRef = React.useRef<HTMLInputElement | null>(null);
    
    const handleOnClick = async (e: React.MouseEvent<HTMLInputElement>) => {

        e.preventDefault();

        if (!inputFileRef.current?.files?.length) {
            alert('Please, select file you want to upload');
            return;
        }

        setIsLoading(true);

        const formData = new FormData();
        Object.values(inputFileRef.current.files).forEach(file => {
            formData.append('file', file);
            
        })
        axios.post(`${process.env.NEXT_PUBLIC_INTERPRETER_URL}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(function (response:any) {
          let data = response.data
            console.log(data)
            let index = 0;
            for (index = 0; index < data['sems'].length; index++) {
            if( data['sems'][index]['sem_num'] === 1) {setSem1(data['sems'][index]['courses']); setCount(1)}
            else if( data['sems'][index]['sem_num'] === 2) {setSem2(data['sems'][index]['courses']); setCount(2)}
            else if(data['sems'][index]['sem_num'] === 3) {setSem3(data['sems'][index]['courses']); setCount(3)}
            else if(data['sems'][index]['sem_num'] === 4) {setSem4(data['sems'][index]['courses']); setCount(4)}
            else if(data['sems'][index]['sem_num'] === 5) {setSem5(data['sems'][index]['courses']); setCount(5)}
            else if(data['sems'][index]['sem_num'] === 6) {setSem6(data['sems'][index]['courses']); setCount(6)}
            else if(data['sems'][index]['sem_num'] === 7) {setSem7(data['sems'][index]['courses']); setCount(7)}
            else if(data['sems'][index]['sem_num'] === 8) {setSem8(data['sems'][index]['courses']); setCount(8)}
            else if(data['sems'][index]['sem_num'] === 9) {setSem9(data['sems'][index]['courses']); setCount(9)}
            else if( data['sems'][index]['sem_num'] === 10) {setSem10(data['sems'][index]['courses']); setCount(10)}
            else if( data['sems'][index]['sem_num'] === 11) {setSem11(data['sems'][index]['courses']); setCount(11)}
            else if( data['sems'][index]['sem_num'] === 12) {setSem12(data['sems'][index]['courses']); setCount(12)}
            else if( data['sems'][index]['sem_num'] === 13) {setSem13(data['sems'][index]['courses']); setCount(13)}
            else if( data['sems'][index]['sem_num'] === 14) {setSem14(data['sems'][index]['courses']); setCount(14)}
            else if( data['sems'][index]['sem_num'] === 15) {setSem15(data['sems'][index]['courses']); setCount(15)}
            else if( data['sems'][index]['sem_num'] === 16) {setSem16(data['sems'][index]['courses']); setCount(16)}
        }
        setIsLoading(false);
        })
        .catch(function (error:Error) {
          setIsLoading(false);
        });
        addAllData(setSemData,
          semData,
          sem1,
          sem2,
          sem3,
          sem4,
          sem5,
          sem6,
          sem7,
          sem8,
          sem9,
          sem10,
          sem11,
          sem12,
          sem13,
          sem14,
          sem15,
          sem16)
        // setIsLoading(false);
    };

  return (
    <div>
      <div>

      <form style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                <div >
                    <input 
                    type="file" name="myfile" ref={inputFileRef}  />
                    
                </div>
                <div >
                    <input type="submit" value="Upload" disabled={isLoading} onClick={handleOnClick} className={styles.submitTransButton}/>
                    
                </div>
            </form>
            <div style={{"position":"absolute",  display:'flex', alignItems:"center", justifyContent:"center",right:"50%", top:"20%"}}>

            <Spin spinning={isLoading} delay={200}>
              
            </Spin>

            </div>
            <div>
            <div className={styles.buttonF}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        <Button onClick={()=>{
          if (cpispichooser=="SPI"){
            console.log("spi",count,branch);
            getdatasembranchspi(count,branch)
          }else if(cpispichooser=="CPI"){
            console.log("cpi");
          }
          }}>Display Courses</Button>
      </div> */}


            </div>
        <RepeatedSems
          count={count}
          semData={semData}
          setSemData={setSemData}
          sem1={sem1}
          sem2={sem2}
          sem3={sem3}
          sem4={sem4}
          sem5={sem5}
          sem6={sem6}
          sem7={sem7}
          sem8={sem8}
          sem9={sem9}
          sem10={sem10}
          sem11={sem11}
          sem12={sem12}
          sem13={sem13}
          sem14={sem14}
          sem15={sem15}
          sem16={sem16}
          setSem1={setSem1}
          setSem2={setSem2}
          setSem3={setSem3}
          setSem4={setSem4}
          setSem5={setSem5}
          setSem6={setSem6}
          setSem7={setSem7}
          setSem8={setSem8}
          setSem9={setSem9}
          setSem10={setSem10}
          setSem11={setSem11}
          setSem12={setSem12}
          setSem13={setSem13}
          setSem14={setSem14}
          setSem15={setSem15}
          setSem16={setSem16}
          columns={columns}
          setCount={setCount}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            
          }}
        >
          <Button
            style={{ width: "150px" }}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            {" "}
            Add Sem{" "}
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Button
            style={{ width: "150px" }}
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              }
              if (count === 1) {
                setSem1([]);
              }
              if (count === 2) {
                setSem2([]);
              }
              if (count === 3) {
                setSem3([]);
              }
              if (count === 4) {
                setSem4([]);
              }
              if (count === 5) {
                setSem5([]);
              }
              if (count === 6) {
                setSem6([]);
              }
              if (count === 7) {
                setSem7([]);
              }
              if (count === 8) {
                setSem8([]);
              }
              if (count === 9) {
                setSem9([]);
              }
              if (count === 10) {
                setSem10([]);
              }
              if (count === 11) {
                setSem11([]);
              }
              if (count === 12) {
                setSem12([]);
              }
              if (count === 13) {
                setSem13([]);
              }
              if (count === 14) {
                setSem14([]);
              }
              if (count === 15) {
                setSem15([]);
              }
              if (count === 16) {
                setSem16([]);
              }
            }}
          >
            {" "}
            Delete Last Sem{" "}
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "50px",
          }}
        >
          <Button
            style={{ width: "150px" }}
            onClick={() => {
              addAllData(
                setSemData,
                semData,
                sem1,
                sem2,
                sem3,
                sem4,
                sem5,
                sem6,
                sem7,
                sem8,
                sem9,
                sem10,
                sem11,
                sem12,
                sem13,
                sem14,
                sem15,
                sem16
              );

              if (userDataExist) {
                updateData();
              } else {
                addinpdata();
              }
            }}
          >
            {" "}
            Save{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};