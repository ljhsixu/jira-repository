import React, { FormEvent } from "react";
import { useAuth } from "../context/auth-context";

// import * as qs from "qs";
// import { cleanObject } from "../../utils";

export const RegisterScreen = () => {
  const { register, user } = useAuth();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLFormElement).value;

    const password = (event.currentTarget.elements[1] as HTMLFormElement).value;
    register({ username, password });

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
      <button type={"submit"}>注册</button>
    </form>
  );
};
