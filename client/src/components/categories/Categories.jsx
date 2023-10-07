import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Button, Form, Input, message, Modal } from "antd";
import "./style.css";
import Add from "./Add";
import Edit from "./Edit";

const Categories = ({ categories, setCategories }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <ul className="flex gap-4 md:flex-col text-lg">
      {categories.map((item) => (
        <li
          className="bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all text-center min-w-[145px] flex items-center justify-center"
          key={item._id}
        >
          <span>{item.title}</span>
        </li>
      ))}

      <li
        className="px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all text-center min-w-[145px] flex items-center justify-center !bg-purple-800 hover:opacity-90"
        onClick={() => setIsAddModalOpen(true)}
      >
        <PlusOutlined className="md:text-2xl" />
      </li>
      <li
        className="px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all text-center min-w-[145px] flex items-center justify-center !bg-orange-800 hover:opacity-90"
        onClick={() => setIsEditModalOpen(true)}
      >
        <EditOutlined className="md:text-2xl" />
      </li>
      <Add
        setIsAddModalOpen={setIsAddModalOpen}
        isAddModalOpen={isAddModalOpen}
        categories={categories}
        setCategories={setCategories}
      />
      <Edit
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        categories={categories}
        setCategories={setCategories}
      />
    </ul>
  );
};

export default Categories;
