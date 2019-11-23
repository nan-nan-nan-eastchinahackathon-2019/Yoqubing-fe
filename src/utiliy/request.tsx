import axios from "axios";

const server = "";

const withToken = (body : any) : any => {
  if (!body) body = {};
  if (!window.localStorage.session) return {...body, token: ""};
  return {...body, token: JSON.parse(window.localStorage.session).token};
}

export default function request(url : string, body ?: any) : any {
  body = withToken(body);
  return axios({
    method: "POST",
    headers: { "Content-type": "application/json" },
    url: server + url,
    data: body,
    withCredentials: true,
  }).then(res => {
    return res.data;
  }).catch(error => {
    console.log(error);
  });
}