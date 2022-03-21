import React from "react";

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
        <input
          type="text"
          value={param.name}
          onChange={(event) =>
            setParam({
              ...param,
              name: event.target.value,
            })
          }
        />
        <select
          value={param.personId}
          onChange={(event) =>
            setParam({
              ...param,
              personId: event.target.value,
            })
          }
        >
          <option value={""}>负责人</option>
          {users.map((users) => (
            <option key={users.id} value={users.id}>
              {" "}
              {users.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
