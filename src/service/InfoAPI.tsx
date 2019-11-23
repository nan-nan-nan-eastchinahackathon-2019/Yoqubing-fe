import request from "../utiliy/request";

const apiname = "/info";

interface publishBody {
  title : string,
  content : string,
}

interface cancelInfoBody {
  id: number,
}

export function login(body : publishBody) {
  return request(apiname + "/publish", body);
}

export function getInfoList() : Promise<{code: number, data: {id: number, title: string, name: string, content: string, createtime: number, uid: number}}> {
  return request(apiname + "/getInfoList");
}

export function cancelInfo(body : cancelInfoBody) {
  return request(apiname + "/cancelInfo", body);
}