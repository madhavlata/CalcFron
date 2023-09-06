import { Button, Dropdown, Menu, MenuProps } from "antd";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  Sem1Data,
  Sem2Data,
  semCount,
  allCourses,
  y22,
  set1Y22,
  set2Y22,
  allCoursesY22,
  set3Y22,
  set2Y222,
  set1Y221,
} from "../typeDefinitions/recoilDeclarations";
import styles from "../../styles/SignupStyles.module.css";

// PHY,SDS

export const BranchesSelect: any = () => {
  const [isy22, setisy22] = useRecoilState(y22);
  const [group, setGroup] = useRecoilState(allCoursesY22);
  const [set1, setSet1] = useRecoilState(set1Y22);
  const [set2, setSet2] = useRecoilState(set2Y22);
  const [set3, setSet3] = useRecoilState(set3Y22);
  const [set11, setSet11] = useRecoilState(set1Y221);
  const [set12, setSet12] = useRecoilState(set2Y222);
  const [courseDataFetched, setCourseDataFetched] = useState(0);

  let group2: any = [];
  let group1: any = [];

  let j: any = {};
  const getCourseSet1 = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}courses1/1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    setSet1(data.data);
  };
  const getCourseSet2 = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}courses1/2`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    setSet2(data.data);
  };
  if (!courseDataFetched) {
    getCourseSet1();
    getCourseSet2();
    setCourseDataFetched(1);
  }
  for (j in group) {
    if (group[j].category == "1") {
      group1.push(group[j]);
    } else {
      group2.push(group[j]);
    }
  }
  const test = [
    {
      key: 0,
      course: "hhhhh",
      value: "jjj",
      category: "1",
      credits: 10,
      grade: "jj",
      credits_received: 0,
      is_repeated: false,
      is_sx: false,
    },
  ];
  const [option, setOption] = useState(0);
  const [scount, setSemCount] = useState(0);
  const [count, setCount] = useRecoilState(semCount);
  const [sem1, setSem1] = useRecoilState(Sem1Data);
  const [sem2, setSem2] = useRecoilState(Sem2Data);
  const [branch, setBranch] = useState("");
  const [category,setCategory] = useState(0); 
  const displayTables = () => {
    if (scount !== 0 && category !== 0) {
      if (scount >= 1) {
        if (category === 1) {
          setSem1(set11);
          setCount(1);
        } else {
          setSem1(set12);
          setCount(1);
        }
        setCount(1);
      }
      if (scount === 2) {
        if (category === 1) {
          setSem2(set11);
        } else {
          setSem2(set12);
        }
        setCount(2);
        setCount(2);
      }
      if (scount === 3) {
        if (1) {
          setSem2(set3);
        } else {
          setSem2(set2);
        }
        setCount(3);
        setCount(3);
      }
    }
  };
  const branches = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                
                displayTables();
                setBranch("AE");
              }}
            >
              AE
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                
                displayTables();
                setBranch("BSBE");
              }}
            >
              BSBE
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                
                displayTables();
                setBranch("CE");
              }}
            >
              CE
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                
                displayTables();
                setBranch("CHE");
              }}
            >
              CHE
            </a>
          ),
        },
        {
          key: "5",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                
                displayTables();
                setBranch("CHM");
              }}
            >
              CHM
            </a>
          ),
        },
        {
          key: "6",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                
                displayTables();
                setBranch("CSE");
              }}
            >
              CSE
            </a>
          ),
        },
        {
          key: "7",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                
                displayTables();
                setBranch("ECO");
              }}
            >
              ECO
            </a>
          ),
        },
        {
          key: "8",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                
                displayTables();
                setBranch("EE");
              }}
            >
              EE
            </a>
          ),
        },
        {
          key: "9",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                
                displayTables();
                setBranch("ES");
              }}
            >
              ES
            </a>
          ),
        },
        {
          key: "10",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                
                displayTables();
                setBranch("ME");
              }}
            >
              ME
            </a>
          ),
        },
        {
          key: "11",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                
                displayTables();
                setBranch("MTH");
              }}
            >
              MTH
            </a>
          ),
        },
        {
          key: "12",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                
                displayTables();
                setBranch("MSE");
              }}
            >
              MSE
            </a>
          ),
        },
        {
          key: "13",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                
                displayTables();
                setBranch("PHY");
              }}
            >
              PHY
            </a>
          ),
        },
        {
          key: "14",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                
                displayTables();
                setBranch("SDS");
              }}
            >
              SDS
            </a>
          ),
        },
      ]}
    />
  );
  const semesters = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setSemCount(1);
                displayTables();
              }}
            >
              1st Semester
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setSemCount(2);
                displayTables();
              }}
            >
              2nd Semester
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setSemCount(3);
                displayTables();
              }}
            >
              3rd Semester
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setSemCount(4);
                displayTables();
              }}
            >
              4th Semester
            </a>
          ),
        },
        {
          key: "5",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setSemCount(5);
                displayTables();
              }}
            >
              5th Semester
            </a>
          ),
        },
        {
          key: "6",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setSemCount(6);
                displayTables();
              }}
            >
              6th Semester
            </a>
          ),
        },
        {
          key: "7",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setSemCount(7);
                displayTables();
              }}
            >
              7th Semester
            </a>
          ),
        },
        {
          key: "8",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setSemCount(1);
                displayTables();
              }}
            >
              8th Semester
            </a>
          ),
        },
      ]}
    />
  );

  const categories = (
    <Menu
      items = {[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setCategory(1)
              }}
            >
              TA
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setCategory(2)
              }}
            >
              ESC
            </a>
          ),
        },
      ]}
      />
  )

  return (
    <>
      <div className={styles.buttonF}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Dropdown overlay={semesters} placement="bottom">
          <Button>Semesters Done {scount != 0 && <> : {scount}</>}</Button>
        </Dropdown>
        <Dropdown overlay={branches} placement="bottom">
          <Button>
            {branch === "" && <>Select Branch</>}
            {branch !== "" && <>department: {branch}</>}
          </Button>
          
        </Dropdown>
        <Dropdown overlay={categories} placement="bottom">
          <Button>Category </Button>
        </Dropdown>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        <Button onClick={() => displayTables()}>Display Courses</Button>
      </div>
    </>
  );
};
