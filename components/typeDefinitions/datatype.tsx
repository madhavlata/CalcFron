import { Popconfirm, Tag } from 'antd';
import React from 'react'
import { EditableCell, EditableRow } from '../essensial_functionality/tableSpecifications';

export default interface DataType {
//   key: React.Key;
    key: number;
    course: string;
    grade: string;
    credits: number;
    credits_received: number;
    is_repeated: boolean;
    is_sx: boolean;
}

export interface PropsType {
  count: number,
  semData:DataType[][],setSemData:any,
  setSem1:any, setSem2:any, setSem3:any, setSem4:any, setSem5:any, setSem6:any, setSem7:any, setSem8:any, 
  setSem9:any, setSem10:any, setSem11:any, setSem12:any, setSem13:any, setSem14:any, setSem15:any, setSem16:any,
  sem1:DataType[], sem2:DataType[], sem3:DataType[], 
  sem4:DataType[], sem5:DataType[], sem6:DataType[], sem7:DataType[], sem8:DataType[], sem9:DataType[], 
  sem10:DataType[], sem11:DataType[], sem12:DataType[], sem13:DataType[], sem14:DataType[], sem15:DataType[], 
  sem16:DataType[],
  columns:any,
  setCount:any,
}


export const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
export const optionsGrade:any = [
    {value: 'A*'}, 
    {value: 'A'},
    {value: 'B+'},
    {value: 'B'},
    {value: 'C+'}, 
    {value: 'C'},
    {value: 'D+'}, 
    {value: 'D'}, 
    {value: 'E(old)'},
    {value: 'E(new)'}, 
    {value: 'F'}, 
    {value: 'S'}, 
    {value: 'X'}
  ]
  export const optionsSX:any = [
    {value: 'S'}, 
    {value: 'X'},
  ]


