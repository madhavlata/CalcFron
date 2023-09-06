import { useRecoilState, useRecoilValue } from "recoil";
import DataType from "../typeDefinitions/datatype";
import {
  allSemsData,
  loginStatus,
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
} from "../typeDefinitions/recoilDeclarations";
import { useState } from "react";
import { SPIstruct } from "../navigation";
export const getSPICPI = (
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
  sem16: DataType[],
  setCpi: any,
  setShowStat2: any,
  results: any,
  setResults: any
) => {
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
