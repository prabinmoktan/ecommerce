import React from "react";
import Layout from "@/Components/Layout";
import { useState, useEffect } from "react";
import axios from "axios";

const category = () => {
  const [name, setName] = useState("");
  const [parentCategory, setParentCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [editedCategory, setEditedCategory] = useState(null);

  useEffect(() => {
    getCategories();
    // console.log(categories);
  }, []);

  const getCategories = async () => {
    const response = await axios.get("/api/categories");
    setCategories(response.data);
  };

  const saveCategory = async (e) => {
    e.preventDefault();
    const data = {
      name,
      parentCategory
      ,
    };
    console.log(data);

    let response;
    if(editedCategory) {
        data._id = editCategory._id;
        response= axios.put('/api/categories', data);
        setEditedCategory(null);
        setName('');
        setParentCategory('');
    }
    else{
        response= await axios.post('/api/categories',data)
    }

    if (response.status === 200) {
      getCategories();
    } else {
    }
  };
  const editCategory= (category)=> {
    setEditedCategory(category);
    setName(category.name);
    setParentCategory(category?.parent?._id);
  }
  const deleteCategory= (category) => {

  }

  return (
    <Layout>
      <h1 className="text-center">categories</h1>
      <form onSubmit={saveCategory} className="w-full  my-10 ">
        <div className="flex justify-evenly ">
          <input
            type="text"
            placeholder="Category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select value={parentCategory} onChange={(e) => setParentCategory(e.target.value)}>
            <option value=''>no parent category</option>
            {categories.length>0 &&
            categories.map((category)=> {
              return <option key={category._id} value={category._id}> {category.name}</option>
            })}
          </select>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Save
          </button>
        </div>
      </form>

      <table className="w-4/5 my-20 mx-10 p-5 border rounded-lg">
        <thead className="border border-gray-400 border-rounded-md">
          <tr>
            <td>Category Name</td>
            <td>Parent Category</td>
            <td></td>
          </tr>
        </thead>

        <tbody>
          {categories.length > 0 &&
            categories.map((category) => {
              return (
                <tr key={category._id}>
                  <td className="mx-3">{category.name}</td>
                  <td>{category?.parent?.name}</td>
                  <td className="">
                    <button className="bg-blue-500 mx-5 rounded-md p-2"
                    onClick={(category) => editCategory(category)}>
                      Edit
                    </button>
                    <button className="bg-red-500 rounded-md p-2"
                    onClick={(category) => deleteCategory(category)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Layout>
  );
};

export default category;
