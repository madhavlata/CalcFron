import { Button, Dropdown, Menu, MenuProps } from "antd";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  Sem1Data,
  Sem2Data,
  Sem3Data,
  Sem4Data,
  Sem5Data,
  Sem6Data,
  Sem7Data,
  Sem8Data,
  Sem9Data,
  Sem10Data,
  semCount,
  allCourses,
  y22,
  set1Y22,
  set2Y22,
  allCoursesY22,
  set3Y22,
  set4Y22,
  set5Y22,
  set6Y22,
  set7Y22,
  set8Y22,
  set9Y22,
  set10Y22
} from "../typeDefinitions/recoilDeclarations";
import styles from "../../styles/SignupStyles.module.css";

// PHY,SDS

export const BranchesSelect: any = () => {
  const [isy22, setisy22] = useRecoilState(y22);
  const [group, setGroup] = useRecoilState(allCoursesY22);
  const [set1, setSet1] = useRecoilState(set1Y22);
  const [set2, setSet2] = useRecoilState(set2Y22);
  const [set3, setSet3] = useRecoilState(set3Y22);
  const [set4, setSet4] = useRecoilState(set4Y22);
  const [set5, setSet5] = useRecoilState(set5Y22);
  const [set6, setSet6] = useRecoilState(set6Y22);
  const [set7, setSet7] = useRecoilState(set7Y22);
  const [set8, setSet8] = useRecoilState(set8Y22);
  const [set9, setSet9] = useRecoilState(set9Y22);
  const [set10, setSet10] = useRecoilState(set10Y22);
  const [courseDataFetched, setCourseDataFetched] = useState(0);
  

  let group2: any = [];
  let group1: any = [];

  let j: any = {};
  const getCourseSet1 = async () => {
    try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}courses1/1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`Fetch failed with status: ${res.status}`);
    }

    const data = await res.json();

    setSet1(data.data);
  } catch (error) {
    console.error("Fetch error:", error);
    // Handle the error appropriately, e.g., show an error message to the user
  }
    
  };
  const getCourseSet2 = async () => {
    try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}courses1/2`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if(!res.ok){
      throw new Error(`Fetch failed with status: ${res.status}`);
    }
    const data = await res.json();

    setSet2(data.data);
  } catch (error){
    console.error("Fetch error:",error);
  }
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
  const [sem3, setSem3] = useRecoilState(Sem3Data);
  const [sem4, setSem4] = useRecoilState(Sem4Data);
  const [sem5, setSem5] = useRecoilState(Sem5Data);
  const [sem6, setSem6] = useRecoilState(Sem6Data);
  const [sem7, setSem7] = useRecoilState(Sem7Data);
  const [sem8, setSem8] = useRecoilState(Sem8Data);
  const [sem9, setSem9] = useRecoilState(Sem9Data);
  const [sem10, setSem10] = useRecoilState(Sem10Data);
  const [branch, setBranch] = useState("");
  const [category,setCategory] = useState(0); 
  const displayTables = () => {
    if (scount !== 0 && category !== 0) {
      if (scount === 1) {
        if (category === 1) {
          setSem1(set1);
        } else {
          setSem1(set2);
        }
        setCount(1);
        setCount(1);
      }
      if (scount === 2) {
        if (category=== 1) {
          setSem1(set1);
          setSem2(set2);
        } else {
          setSem1(set2);
          setSem2(set1);
        }
        setCount(2);
        setCount(2);
      }
      if (scount === 3) {
        if (category === 1) {
          setSem1(set1);
          setSem2(set2);
          setSem3(set3);
        } else {
          setSem1(set2);
          setSem2(set1);
          setSem3(set3);
        }
        setCount(3);
        setCount(3);
      }
      if (scount === 4) {
        if (category === 1) {
          setSem1(set1);
          setSem2(set2);
          setSem3(set3);
          setSem4(set4);
        } else {
          setSem1(set2);
          setSem2(set1);
          setSem3(set3);
          setSem4(set4);
        }
        setCount(4);
        setCount(4);
      }
      if (scount === 5) {
        if (category === 1) {
          setSem1(set1);
          setSem2(set2);
          setSem3(set3);
          setSem4(set4);
          setSem5(set5);
        } else {
          setSem1(set2);
          setSem2(set1);
          setSem3(set3);
          setSem4(set4);
          setSem5(set5);
        }
        setCount(5);
        setCount(5);
      }
      if (scount === 6) {
        if (category === 1) {
          setSem1(set1);
          setSem2(set2);
          setSem3(set3);
          setSem4(set4);
          setSem5(set5);
          setSem6(set6);
        } else {
          setSem1(set2);
          setSem2(set1);
          setSem3(set3);
          setSem4(set4);
          setSem5(set5);
          setSem6(set6);
        }
        setCount(6);
        setCount(6);
      }
      if (scount === 7) {
        if (category===1) {
          setSem1(set1);
          setSem2(set2);
          setSem3(set3);
          setSem4(set4);
          setSem5(set5);
          setSem6(set6);
          setSem7(set7);
        } else {
          setSem1(set2);
          setSem2(set1);
          setSem3(set3);
          setSem4(set4);
          setSem5(set5);
          setSem6(set6);
          setSem7(set7);
        }
        setCount(7);
        setCount(7);
      }
      if (scount === 8) {
        if (category === 1) {
          setSem1(set1);
          setSem2(set2);
          setSem3(set3);
          setSem4(set4);
          setSem5(set5);
          setSem6(set6);
          setSem7(set7);
          setSem8(set8);
        } else {
          setSem1(set2);
          setSem2(set1);
          setSem3(set3);
          setSem4(set4);
          setSem5(set5);
          setSem6(set6);
          setSem7(set7);
          setSem8(set8);
        }
        setCount(8);
        setCount(8);
      }
      if (scount === 9) {
        if (category===1) {
          setSem1(set1);
          setSem2(set2);
          setSem3(set3);
          setSem4(set4);
          setSem5(set5);
          setSem6(set6);
          setSem7(set7);
          setSem8(set8);
          setSem9(set9);
        } else {
          setSem1(set2);
          setSem2(set1);
          setSem3(set3);
          setSem4(set4);
          setSem5(set5);
          setSem6(set6);
          setSem7(set7);
          setSem8(set8);
          setSem9(set9);
        }
        setCount(9);
        setCount(9);
      }
      if (scount === 10) {
        if (category===1) {
          setSem1(set1);
          setSem2(set2);
          setSem3(set3);
          setSem4(set4);
          setSem5(set5);
          setSem6(set6);
          setSem7(set7);
          setSem8(set8);
          setSem9(set9);
          setSem10(set10);
        } else {
          setSem1(set2);
          setSem2(set1);
          setSem3(set3);
          setSem4(set4);
          setSem5(set5);
          setSem6(set6);
          setSem7(set7);
          setSem8(set8);
          setSem9(set9);
          setSem10(set10);
        }
        setCount(10);
        setCount(10);
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
                                    setSemCount(8);
                                    displayTables();
                                  }}
                                >
                                  8th Semester
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
                                        setSemCount(9);
                                        displayTables();
                                      }}
                                    >
                                      9th Semester
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
                                            setSemCount(10);
                                            displayTables();
                                          }}
                                        >
                                          10th Semester
                                        </a>
                                       ),
                                      },
          
      ]}
    />
  )
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
              SEM1:TA,SEM2:ESC
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
              SEM1:ESC,SEM2:TA
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
          <Button>
            CATEGORY
          </Button>
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