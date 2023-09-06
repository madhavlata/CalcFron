import { Popconfirm, Tag } from "antd";
import DataType from "../typeDefinitions/datatype";
import { handleDelete, handleEdit } from "./handlecases";
import {Tooltip} from "antd";
export const addAllData = (
  setSemData: any,
  semData: DataType[][],
  sem1: DataType[],
  sem2: DataType[],
  sem3: DataType[],
  sem4: DataType[],
  sem5: DataType[],
  sem6: DataType[],
  sem7: DataType[],
  sem8: DataType[],
  sem9: DataType[],
  sem10: DataType[],
  sem11: DataType[],
  sem12: DataType[],
  sem13: DataType[],
  sem14: DataType[],
  sem15: DataType[],
  sem16: DataType[]
) => {
  setSemData([]);
  let semDataAll = semData;
  semDataAll = [];
  if (sem1.length !== 0) {
    semDataAll = [sem1];
  }
  if (sem2.length !== 0) {
    semDataAll?.push(sem2);
  }
  if (sem3.length !== 0) {
    semDataAll?.push(sem3);
  }
  if (sem4.length !== 0) {
    semDataAll?.push(sem4);
  }
  if (sem5.length !== 0) {
    semDataAll?.push(sem5);
  }
  if (sem6.length !== 0) {
    semDataAll?.push(sem6);
  }
  if (sem7.length !== 0) {
    semDataAll?.push(sem7);
  }
  if (sem8.length !== 0) {
    semDataAll?.push(sem8);
  }
  if (sem9.length !== 0) {
    semDataAll?.push(sem9);
  }
  if (sem10.length !== 0) {
    semDataAll?.push(sem10);
  }
  if (sem11.length !== 0) {
    semDataAll?.push(sem11);
  }
  if (sem12.length !== 0) {
    semDataAll?.push(sem12);
  }
  if (sem13.length !== 0) {
    semDataAll?.push(sem13);
  }
  if (sem14.length !== 0) {
    semDataAll?.push(sem14);
  }
  if (sem15.length !== 0) {
    semDataAll?.push(sem15);
  }
  if (sem16.length !== 0) {
    semDataAll?.push(sem16);
  }
  setSemData(semDataAll);
};

export const defaultColumns = (
  sem: DataType[],
  setSem: any,
  sem_num: number,
  count: number,
  setCount: any,
  setSemData: any,
  semData: DataType[][],
  sem1: DataType[],
  sem2: DataType[],
  sem3: DataType[],
  sem4: DataType[],
  sem5: DataType[],
  sem6: DataType[],
  sem7: DataType[],
  sem8: DataType[],
  sem9: DataType[],
  sem10: DataType[],
  sem11: DataType[],
  sem12: DataType[],
  sem13: DataType[],
  sem14: DataType[],
  sem15: DataType[],
  sem16: DataType[]
) => [
  {
    key: "key",
    title: "Course",
    dataIndex: "course",
    width: "30%",
    editable: true,
    message: "Course ID (ex: MTH101A)",
  },
  {
    title: "Credits",
    dataIndex: "credits",
    message: "",
  },
  {
    title: "Grade",
    dataIndex: "grade",
    editable: true,
    message: "Grade(A*, A, B+, etc)",
  },
  {
    title: "operation",
    dataIndex: "operation",
    render: (_: any, record: { key: number; is_repeated: boolean }) =>
      sem.length >= 1 ? (
        <div>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() =>
              handleDelete(
                record.key,
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
              )
            }
          >
            <a>Delete </a>
          </Popconfirm>
          |
          {record.is_repeated === false && (
            <Popconfirm
              title="Only click Ok if you have done this course once again 
          after failing this course ( Make sure you do not select the best attempt )"
              onConfirm={() =>
                handleEdit(
                  record.key,
                  sem,
                  setSem,
                  sem_num,
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
                )
              }
            >
              <Tooltip placement="topLeft" title="Click on Repeated if you have done this course later ahead">

              <a> Repeated</a></Tooltip>
            </Popconfirm>
          )}
          {record.is_repeated === true && (
            <Popconfirm
              title="Click Ok to make this course counted for both SPI and CPI"
              onConfirm={() =>
                handleEdit(
                  record.key,
                  sem,
                  setSem,
                  sem_num,
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
                )
              }
            >
              {/* <Tooltip placement="topLeft" title=""> */}
              <a> Undo Repeat</a>
            </Popconfirm>
          )}
        </div>
      ) : null,
  },
  {
    title: "Repeated",
    dataIndex: "is_repeated",

    render: (_: any, record: { is_repeated: Boolean }) => (
      <>
        {record.is_repeated === true && (
          <Tag color="volcano">Counted for SPI (NOT CPI)</Tag>
        )}
        {record.is_repeated === false && (
          <Tag color="green">Counted for SPI and CPI</Tag>
        )}
      </>
    ),
  },
];
