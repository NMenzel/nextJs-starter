import * as React from "react";
import { Table } from "antd";

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

interface TableProps {
  data: DataItem[];
}

const UserTable: React.FC<TableProps> = ({ data }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return <Table dataSource={data} columns={columns} />;
};

export default UserTable;
