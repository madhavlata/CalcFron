import { Form, InputRef, AutoComplete, Table, FormInstance } from "antd";
import React from "react";
import { useState, useRef, useContext, useEffect } from "react";
// import { options } from "../data/courseOptions";
import DataType, { optionsGrade, optionsSX } from "../typeDefinitions/datatype";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  allCourses,
  allCoursesY22,
  y22,
} from "../typeDefinitions/recoilDeclarations";
const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
  key: string;
  course: string;
  credits: number;
  credits_obtained: number;
  grade: string;
}

interface EditableRowProps {
  index: number;
}

export const EditableRow: React.FC<EditableRowProps> = ({
  index,
  ...props
}) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof Item;
  record: Item;
  handleSave: (
    record: Item,
    sem: DataType[],
    setSem: any,
    isCourse: boolean
  ) => void;
  sem: DataType[];
  setSem: any;
  message: string;
  is_sx: boolean;
}

export const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  sem,
  setSem,
  message,
  is_sx,
  ...restProps
}) => {
  const [group, setGroup] = useRecoilState(allCoursesY22);
  const [isy22, setisy22] = useRecoilState(y22);
  const [jsonOfCourseCredits, setjsonOfCourseCredits] =
    useRecoilState(allCourses);
  let options: any = [];
  let courseY22: any = [];
  let i: number = 0;
  for (i; i < 1375; i++) {
    // console.log(jsonOfCourseCredits);
    if (jsonOfCourseCredits[i] && !jsonOfCourseCredits[i].category) {
      options.push({ value: jsonOfCourseCredits[i].course });
    } else if (jsonOfCourseCredits[i] && jsonOfCourseCredits[i].category) {
      courseY22.push(jsonOfCourseCredits[i]);
    }
  }
  if (!isy22) {
    setisy22(1);
    setGroup(courseY22);
  }

  const [editing, setEditing] = useState(false);
  const [wasEdited, setWasEdited] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;
  const [isCourse, setIsCourse] = useState(true);
  if (dataIndex === "course" && isCourse === false) {
    setIsCourse(true);
  }
  if (dataIndex === "grade" && isCourse === true) {
    setIsCourse(false);
  }
  useEffect(() => {
    if (editing) {
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();

      toggleEdit();
      handleSave({ ...record, ...values }, sem, setSem, isCourse);
    } catch (errInfo) {
      // console.log("Save failed:", errInfo);
    }
  };
  let childNode = children;
  if (
    childNode?.toString() !== ",[object Object]" &&
    childNode?.toString() !== "," &&
    childNode?.toString() !== ",0" &&
    wasEdited === false
  ) {
    setWasEdited(true);
  }

  if (editable) {
    childNode = editing ? (
      <div>
        <div>
          {" "}
          {isCourse && (
            <Form.Item
              style={{ margin: 0 }}
              name={dataIndex}
              rules={[
                {
                  required: true,
                  message: `${title} is required.`,
                },
              ]}
            >
              <AutoComplete
                value={inputRef}
                options={options}
                placeholder="Course ID (ex: MTH101A)"
                // onPressEnter={save}
                filterOption={(inputValue, option) =>
                  typeof option!.value === "string" &&
                  option!
                    .value!.toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
                onBlur={save}
                onSelect={save}
              />
            </Form.Item>
          )}
        </div>
        <div>
          {" "}
          {!isCourse && (
            <Form.Item
              style={{ margin: 0 }}
              name={dataIndex}
              rules={[
                {
                  required: true,
                  message: `${title} is required.`,
                },
              ]}
            >
              <AutoComplete
                value={inputRef}
                options={is_sx ? optionsSX : optionsGrade}
                placeholder={is_sx ? "Grade(S, X)" : "Grade(A*, A, B+, etc)"}
                // onPressEnter={save}
                filterOption={(inputValue, option) =>
                  typeof option!.value === "string" &&
                  option!
                    .value!.toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
                onBlur={save}
                onSelect={save}
              />
            </Form.Item>
          )}
        </div>
      </div>
    ) : !wasEdited ? (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24, color: "lightgray" }}
        onClick={() => {
          setWasEdited(true), toggleEdit(), setWasEdited(true);
        }}
      >
        {isCourse ? message : is_sx ? "Grade(S, X)" : message}
      </div>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

export type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;
