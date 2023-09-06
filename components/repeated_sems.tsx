import { Button, Table } from "antd";
import { ColumnTypes } from "./essensial_functionality/tableSpecifications";
import DataType, { components, PropsType } from "./typeDefinitions/datatype";
import "antd/dist/antd.css";
import { addAllData } from "./essensial_functionality/columnDeclaration";

export function RepeatedSems(props: PropsType) {
  const getrandom = () => {
    return Math.floor(Math.random() * 1000000000000000000);
  };

  const handleAdd = (setSem: any, sem: DataType[], sem_num: number) => {
    addAllData(
      props.setSemData,
      props.semData,
      props.sem1,
      props.sem2,
      props.sem3,
      props.sem4,
      props.sem5,
      props.sem6,
      props.sem7,
      props.sem8,
      props.sem9,
      props.sem10,
      props.sem11,
      props.sem12,
      props.sem13,
      props.sem14,
      props.sem15,
      props.sem16
    );
    const newData: DataType = {
      key: getrandom(),
      course: ``,
      grade: "",
      credits: 0,
      credits_received: 0,
      is_repeated: false,
      is_sx: false,
    };
    if (props.count < sem_num) {
      props.setCount(sem_num);
    }
    setSem([...sem, newData]);
    addAllData(
      props.setSemData,
      props.semData,
      props.sem1,
      props.sem2,
      props.sem3,
      props.sem4,
      props.sem5,
      props.sem6,
      props.sem7,
      props.sem8,
      props.sem9,
      props.sem10,
      props.sem11,
      props.sem12,
      props.sem13,
      props.sem14,
      props.sem15,
      props.sem16
    );
  };
  return (
    <div>
      <div>
        {props.count > 0 && (
          <div>
            <p style={{ fontSize: "25px" }}>Semester 1:</p>
            

            <Table
              // size=''
              components={components}
              rowClassName={() => "editable-row"}
              bordered
              dataSource={props.sem1}
              pagination={false}
              columns={
                props.columns(props.sem1, props.setSem1, 1) as ColumnTypes
              }
            />
            <Button
              onClick={() => handleAdd(props.setSem1, props.sem1, 1)}
              type="primary"
              style={{ marginTop: 16 }}
            >
              Add a course
            </Button>
          </div>
        )}
      </div>
      <div>
        {props.count > 1 && (
          <div>
            <p style={{ fontSize: "25px" }}>Semester 2:</p>
            
            <Table
              components={components}
              pagination={false}
              rowClassName={() => "editable-row"}
              bordered
              dataSource={props.sem2}
              columns={
                props.columns(props.sem2, props.setSem2, 2) as ColumnTypes
              }
            />
            <Button
              onClick={() => handleAdd(props.setSem2, props.sem2, 2)}
              type="primary"
              style={{ marginTop: 16 }}
            >
              Add a course
            </Button>
          </div>
        )}
      </div>
      <div>
        {props.count > 2 && (
          <div>
            <p style={{ fontSize: "25px" }}>Semester 3:</p>
            
            <Table
              components={components}
              pagination={false}
              rowClassName={() => "editable-row"}
              bordered
              dataSource={props.sem3}
              columns={
                props.columns(props.sem3, props.setSem3, 3) as ColumnTypes
              }
            />
            <Button
              onClick={() => handleAdd(props.setSem3, props.sem3, 3)}
              type="primary"
              style={{ marginTop: 16 }}
            >
              Add a course
            </Button>
          </div>
        )}
      </div>
      <div>
        {props.count > 3 && (
          <div>
            <p style={{ fontSize: "25px" }}>Semester 4:</p>
            
            <Table
              components={components}
              pagination={false}
              rowClassName={() => "editable-row"}
              bordered
              dataSource={props.sem4}
              columns={
                props.columns(props.sem4, props.setSem4, 4) as ColumnTypes
              }
            />
            <Button
              onClick={() => handleAdd(props.setSem4, props.sem4, 4)}
              type="primary"
              style={{ marginTop: 16 }}
            >
              Add a course
            </Button>
          </div>
        )}
      </div>
      <div>
        {props.count > 4 && (
          <div>
            <p style={{ fontSize: "25px" }}>Semester 5:</p>
            
            <Table
              components={components}
              pagination={false}
              rowClassName={() => "editable-row"}
              bordered
              dataSource={props.sem5}
              columns={
                props.columns(props.sem5, props.setSem5, 5) as ColumnTypes
              }
            />
            <Button
              onClick={() => handleAdd(props.setSem5, props.sem5, 5)}
              type="primary"
              style={{ marginTop: 16 }}
            >
              Add a course
            </Button>
          </div>
        )}
      </div>
      <div>
        {props.count > 5 && (
          <div>
            <p style={{ fontSize: "25px" }}>Semester 6:</p>
            
            <Table
              components={components}
              pagination={false}
              rowClassName={() => "editable-row"}
              bordered
              dataSource={props.sem6}
              columns={
                props.columns(props.sem6, props.setSem6, 6) as ColumnTypes
              }
            />
            <Button
              onClick={() => handleAdd(props.setSem6, props.sem6, 6)}
              type="primary"
              style={{ marginTop: 16 }}
            >
              Add a course
            </Button>
          </div>
        )}
      </div>
      <div>
        {props.count > 6 && (
          <div>
            <p style={{ fontSize: "25px" }}>Semester 7:</p>
            
            <Table
              components={components}
              pagination={false}
              rowClassName={() => "editable-row"}
              bordered
              dataSource={props.sem7}
              columns={
                props.columns(props.sem7, props.setSem7, 7) as ColumnTypes
              }
            />
            <Button
              onClick={() => handleAdd(props.setSem7, props.sem7, 7)}
              type="primary"
              style={{ marginTop: 16 }}
            >
              Add a course
            </Button>
          </div>
        )}
      </div>
      <div>
        {props.count > 7 && (
          <div>
            <p style={{ fontSize: "25px" }}>Semester 8:</p>
            
            <Table
              components={components}
              pagination={false}
              rowClassName={() => "editable-row"}
              bordered
              dataSource={props.sem8}
              columns={
                props.columns(props.sem8, props.setSem8, 8) as ColumnTypes
              }
            />
            <Button
              onClick={() => handleAdd(props.setSem8, props.sem8, 8)}
              type="primary"
              style={{ marginTop: 16 }}
            >
              Add a course
            </Button>
          </div>
        )}
      </div>
      <div>
        {props.count > 8 && (
          <div>
            <p style={{ fontSize: "25px" }}>Semester 9:</p>
            
            <Table
              components={components}
              pagination={false}
              rowClassName={() => "editable-row"}
              bordered
              dataSource={props.sem9}
              columns={
                props.columns(props.sem9, props.setSem9, 9) as ColumnTypes
              }
            />
            <Button
              onClick={() => handleAdd(props.setSem9, props.sem9, 9)}
              type="primary"
              style={{ marginTop: 16 }}
            >
              Add a course
            </Button>
          </div>
        )}
      </div>
      <div>
        {props.count > 9 && (
          <div>
            <p style={{ fontSize: "25px" }}>Semester 10:</p>
            
            <Table
              components={components}
              pagination={false}
              rowClassName={() => "editable-row"}
              bordered
              dataSource={props.sem10}
              columns={
                props.columns(props.sem10, props.setSem10, 10) as ColumnTypes
              }
            />
            <Button
              onClick={() => handleAdd(props.setSem10, props.sem10, 10)}
              type="primary"
              style={{ marginTop: 16 }}
            >
              Add a course
            </Button>
          </div>
        )}
      </div>
      <div>
        {props.count > 10 && (
          <div>
            <p style={{ fontSize: "25px" }}>Semester 11:</p>
            
            <Table
              components={components}
              pagination={false}
              rowClassName={() => "editable-row"}
              bordered
              dataSource={props.sem11}
              columns={
                props.columns(props.sem11, props.setSem11, 11) as ColumnTypes
              }
            />
            <Button
              onClick={() => handleAdd(props.setSem11, props.sem11, 11)}
              type="primary"
              style={{ marginTop: 16 }}
            >
              Add a course
            </Button>
          </div>
        )}
      </div>
      <div>
        {props.count > 11 && (
          <div>
            <p style={{ fontSize: "25px" }}>Semester 12:</p>
            
            <Table
              components={components}
              pagination={false}
              rowClassName={() => "editable-row"}
              bordered
              dataSource={props.sem12}
              columns={
                props.columns(props.sem12, props.setSem12, 12) as ColumnTypes
              }
            />
            <Button
              onClick={() => handleAdd(props.setSem12, props.sem12, 12)}
              type="primary"
              style={{ marginTop: 16 }}
            >
              Add a course
            </Button>
          </div>
        )}
      </div>
      <div>
        {props.count > 12 && (
          <div>
            <p style={{ fontSize: "25px" }}>Semester 13:</p>
            
            <Table
              components={components}
              pagination={false}
              rowClassName={() => "editable-row"}
              bordered
              dataSource={props.sem13}
              columns={
                props.columns(props.sem13, props.setSem13, 13) as ColumnTypes
              }
            />
            <Button
              onClick={() => handleAdd(props.setSem13, props.sem13, 13)}
              type="primary"
              style={{ marginTop: 16 }}
            >
              Add a course
            </Button>
          </div>
        )}
      </div>
      <div>
        {props.count > 13 && (
          <div>
            <p style={{ fontSize: "25px" }}>Semester 14:</p>
            
            <Table
              components={components}
              pagination={false}
              rowClassName={() => "editable-row"}
              bordered
              dataSource={props.sem14}
              columns={
                props.columns(props.sem14, props.setSem14, 14) as ColumnTypes
              }
            />
            <Button
              onClick={() => handleAdd(props.setSem14, props.sem14, 14)}
              type="primary"
              style={{ marginTop: 16 }}
            >
              Add a course
            </Button>
          </div>
        )}
      </div>
      <div>
        {props.count > 14 && (
          <div>
            <p style={{ fontSize: "25px" }}>Semester 15:</p>
            
            <Table
              components={components}
              pagination={false}
              rowClassName={() => "editable-row"}
              bordered
              dataSource={props.sem15}
              columns={
                props.columns(props.sem15, props.setSem15, 15) as ColumnTypes
              }
            />
            <Button
              onClick={() => handleAdd(props.setSem15, props.sem15, 15)}
              type="primary"
              style={{ marginTop: 16 }}
            >
              Add a course
            </Button>
          </div>
        )}
      </div>
      <div>
        {props.count > 15 && (
          <div>
            <p style={{ fontSize: "25px" }}>Semester 16:</p>
            
            <Table
              components={components}
              pagination={false}
              rowClassName={() => "editable-row"}
              bordered
              dataSource={props.sem16}
              columns={
                props.columns(props.sem16, props.setSem16, 16) as ColumnTypes
              }
            />
            <Button
              onClick={() => handleAdd(props.setSem16, props.sem16, 16)}
              type="primary"
              style={{ marginTop: 16 }}
            >
              Add a course
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
