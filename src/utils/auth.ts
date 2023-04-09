import axios from "axios";

const instance = axios.create({ //공통부분
  baseURL: "https://www.pre-onboarding-selection-task.shop",
  headers: {
    "Content-Type": "application/json", // axios 이지만 나중에 혹시 모르니 넣기
  },
});

export const signin = ( email : string, password : string ) => {
  return instance.post("/auth/signin", {
    email: email,
    password: password,
  });
};

export const signup = (email : string, password : string) => {
  return instance.post("/auth/signup", {
    email: email,
    password: password,
  });
};