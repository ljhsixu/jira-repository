import React from "react";
import { User } from "./Search-panel";

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}

interface ListProps {
  list: Project[];
  users: User[];
}
export const List = ({ list, users }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((v, index) => (
          <tr>
            <td key={v.personId}>{v.name}</td>
            <td key={index}>{users.find((z) => z.id === v.personId)?.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
