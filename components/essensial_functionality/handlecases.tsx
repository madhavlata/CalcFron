import DataType from "../typeDefinitions/datatype";
import { addAllData } from "./columnDeclaration";

export const handleEdit = (
  key: number,
  sem: DataType[],
  setSem: any,
  sem_num: number,
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
  let newData: DataType[] = [];
  for (let ind = 0; ind < sem.length; ind++) {
    let temp: DataType = {
      key: sem[ind].key,
      course: sem[ind].course,
      credits: sem[ind].credits,
      credits_received: sem[ind].credits_received,
      grade: sem[ind].grade,
      is_repeated: sem[ind].is_repeated,
      is_sx: false,
    };
    newData.push(temp);
    if (newData[ind].key === key) {
      if (newData[ind].is_repeated === true) {
        newData[ind].is_repeated = false;
      } else {
        newData[ind].is_repeated = true;
      }
    }
  }
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

export const handleDelete = (
  key: number,
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
  const newData = sem.filter((item) => item.key !== key);
  setSem(newData);
  if (sem_num === count && newData.length === 0) {
    setCount(sem_num - 1);
  }
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
