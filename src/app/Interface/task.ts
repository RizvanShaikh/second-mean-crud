export interface TaskSchema {
  _id: string;
  title: string;
  isCompleted: boolean;
  // message:string;
}


/* 
data in a api is 
[
{
isCompleted: false,
_id: "5d9b05de7840be0e50cc7300",
title: "try it",
__v: 0
},
{
isCompleted: false,
_id: "5d8e4968770cff25dc0565a4",
title: "i did it",
__v: 0
}
]*/