import request from "../utiliy/request";

const apiname = "/resource";

interface uploadBody {
  title : string,
  type: string,
  url: string,
  content : string,
}

interface removeBody {
  id: number,
}

export function upload(body : uploadBody) {
  return request(apiname + "/publish", body);
}

export function remove(body : removeBody) {
  return request(apiname + "/remove", body);
}

export function getResourceList() : Promise<{code: number, data: {resources: [{id: number, name: string, uid: number, updatetime: number, type:string, url: string, content: string, uname: string}]}}> {
  return request(apiname + "/getResourceList");
}