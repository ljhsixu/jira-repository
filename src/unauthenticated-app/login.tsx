import React, { FormEvent } from "react";
import { useAuth } from "../context/auth-context";
// import * as qs from "qs";
// import { cleanObject } from "../../utils";

export const LoginScreen = () => {
  const { login, register, user } = useAuth();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLFormElement).value;

    const password = (event.currentTarget.elements[1] as HTMLFormElement).value;
    login({ username, password }).then((res) => {
      console.log("111");
    });

    // register({ username, password }).then(res=>{console.log('111')});
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id={"password"} />
      </div>
      <button type={"submit"}>登录</button>
    </form>
  );
};
