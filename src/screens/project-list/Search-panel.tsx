import React from "react";
import { Input, Select } from "antd";

// import {useEffect, useState} from "react";
interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}
export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  token: string;
  organization: string;
}

export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  return (
    <form action="">
      <div>
        <Input
          type="text"
          value={param.name}
          onChange={(event) =>
            setParam({
              ...param,
              name: event.target.value,
            })
          }
        />
        <Select
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        >
          <Select.Option value={""}>负责人</Select.Option>
          {users.map((users) => (
            <Select.Option key={users.id} value={users.id}>
              {" "}
              {users.name}
            </Select.Option>
          ))}
        </Select>
      </div>
    </form>
  );
};
