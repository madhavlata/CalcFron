import { atom } from "recoil";
import DataType from "./datatype";

export const loginStatus = atom<Boolean>({
  key: "login",
  default: false,
})

export const allSemsData = atom<DataType[][]>({
  key: "semall",
  default: [],
});

export const semCount = atom<number>({
  key: "sems-to-display",
  default: 0,
})

export const Sem1Data = atom<DataType[]>({
  key: "sem1",
  default: [],
});

export const Sem2Data = atom<DataType[]>({
  key: "sem2",
  default: [],
});

export const Sem3Data = atom<DataType[]>({
  key: "sem3",
  default: [],
});

export const Sem4Data = atom<DataType[]>({
  key: "sem4",
  default: [],
});

export const Sem5Data = atom<DataType[]>({
  key: "sem5",
  default: [],
});

export const Sem6Data = atom<DataType[]>({
  key: "sem6",
  default: [],
});

export const Sem7Data = atom<DataType[]>({
  key: "sem7",
  default: [],
});

export const Sem8Data = atom<DataType[]>({
  key: "sem8",
  default: [],
});

export const Sem9Data = atom<DataType[]>({
  key: "sem9",
  default: [],
});

export const Sem10Data = atom<DataType[]>({
  key: "sem10",
  default: [],
});

export const Sem11Data = atom<DataType[]>({
  key: "sem11",
  default: [],
});

export const Sem12Data = atom<DataType[]>({
  key: "sem12",
  default: [],
});

export const Sem13Data = atom<DataType[]>({
  key: "sem13",
  default: [],
});

export const Sem14Data = atom<DataType[]>({
  key: "sem14",
  default: [],
});

export const Sem15Data = atom<DataType[]>({
  key: "sem15",
  default: [],
});

export const Sem16Data = atom<DataType[]>({
  key: "sem16",
  default: [],
});

export const y22 = atom({
  key: "y22",
  default: 0,
});


export const cpispichoosere = atom({
  key: "cpispichooser",
  default: "",
});
export const branche = atom({
  key: "branch",
  default: "",
});

export const allCourses = atom({
  key: "allCourses",
  default: [{key:0,course:"", value:"" ,category:"" ,cred:0, grade:"", credits_received:0, is_repeated: false,is_sx:false}],
});
export const allCoursesY22 = atom({
  key: "allCoursesY22",
  default: [{key:0,course:"", value:"" ,category:"" ,cred:0, grade:"", credits_received:0, is_repeated: false,is_sx:false}],
});

export const set1Y22 = atom({
  key: "set1y22",
  default: [{key:0,course:"TA101", value:"" ,category:"" ,credits:9, grade:"", credits_received:0, is_repeated: false,is_sx:false}],
});

export const set2Y22 = atom({
  key: "set2y22",
  default: [{key:0,course:"ESC111", value:"" ,category:"" ,credits:7, grade:"", credits_received:0, is_repeated: false,is_sx:false}],
});
export const set3Y22 = atom({
  key: "set3y22",
  default: [{key:0,course:"", value:"" ,category:"" ,credits:0, grade:"", credits_received:0, is_repeated: false,is_sx:false}],
});
// export const set1Y221 = atom({
//   key: "set1y221",
//   default: [{key:0,course:"TA101", value:"" ,category:"" ,credits:0, grade:"", credits_received:0, is_repeated: false,is_sx:false}],
// });
// export const set2Y222 = atom({
//   key: "set2y222",
//   default: [{key:0,course:"ESC111", value:"" ,category:"" ,credits:0, grade:"", credits_received:0, is_repeated: false,is_sx:false}],
// });
export const set4Y22 = atom({
  key: "set4y22",
  default: [{key:0,course:"", value:"" ,category:"" ,credits:0, grade:"", credits_received:0, is_repeated: false,is_sx:false}],
});
export const set5Y22 = atom({
  key: "set5y22",
  default: [{key:0,course:"", value:"" ,category:"" ,credits:0, grade:"", credits_received:0, is_repeated: false,is_sx:false}],
});
export const set6Y22 = atom({
  key: "set6y22",
  default: [{key:0,course:"", value:"" ,category:"" ,credits:0, grade:"", credits_received:0, is_repeated: false,is_sx:false}],
});
export const set7Y22 = atom({
  key: "set7y22",
  default: [{key:0,course:"", value:"" ,category:"" ,credits:0, grade:"", credits_received:0, is_repeated: false,is_sx:false}],
});
export const set8Y22 = atom({
  key: "set8y22",
  default: [{key:0,course:"", value:"" ,category:"" ,credits:0, grade:"", credits_received:0, is_repeated: false,is_sx:false}],
});
export const set9Y22 = atom({
  key: "set9y22",
  default: [{key:0,course:"", value:"" ,category:"" ,credits:0, grade:"", credits_received:0, is_repeated: false,is_sx:false}],
});
export const set10Y22 = atom({
  key: "set10y22",
  default: [{key:0,course:"", value:"" ,category:"" ,credits:0, grade:"", credits_received:0, is_repeated: false,is_sx:false}],
});