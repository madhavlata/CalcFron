import { Button } from "antd";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { allSemsData } from "../typeDefinitions/recoilDeclarations";

import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface SPIstruct {
  sem_name: string;
  spi: number;
  credits_completed: number;
}

export default function SPIFinder() {
  const [semData, setSemData] = useRecoilState(allSemsData);
  const [results, setResults] = useState<SPIstruct[]>([]);
  const [cpi, setCpi] = useState(0);
  const [showStat, setShowStat] = useState(false);

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
    let totCreds = 0;
    let receivedCreds = 0;
    let res = results;
    res = [];
    for (let index = 0; index < semData.length; index++) {
      let spi_cred = 0;
      let spi_cred_done = 0;
      let cred = 0;
      for (let index2 = 0; index2 < semData[index].length; index2++) {
        if (
          semData[index][index2].grade !== "S" &&
          semData[index][index2].grade !== "X"
        ) {
          if (semData[index][index2].is_repeated === false) {
            totCreds = totCreds + semData[index][index2].credits;
            receivedCreds =
              receivedCreds + semData[index][index2].credits_received;
          }
          spi_cred = spi_cred + semData[index][index2].credits;
          spi_cred_done =
            spi_cred_done + semData[index][index2].credits_received;
        }
      }
      let sem_name = index.toString();
      let singleSem: SPIstruct = {
        sem_name: sem_name,
        spi: (spi_cred_done / spi_cred) * 10,
        credits_completed: spi_cred,
      };
      res.push(singleSem);
    }
    setCpi((receivedCreds / totCreds) * 10);
    setResults(res);
    setShowStat(true);
  };
  return (
    <div>
      {/* <p style={{"fontSize":"50px"}}>SPI finding</p> */}
      {/* <App /> */}
      <Button onClick={() => getSPI()}> Get SPI / CPI </Button>
      <div>
        {showStat && (
          <div>
            <Table columns={columns} dataSource={results} />
            <p style={{ fontSize: "50px" }}>Overall CPI : {cpi}</p>
          </div>
        )}
      </div>
    </div>
  );
}
