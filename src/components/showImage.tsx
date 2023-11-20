"use client";
import React, { useState } from "react";
import { FC } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const PinterestGrid: FC = () => {
  const [todoId, setTodoId] = useState(12);
  const fetchTodo = async (todoId: any) => {
    const response = await axios(`/api/view?preview=${todoId}`);

    return response.data.data;
  };

  const { data, isLoading, error } = useQuery(["todo", todoId], () =>
    fetchTodo(todoId)
  );

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error && !data) {
    console.log(error);
    return <div>Error</div>;
  }

  const add = () => setTodoId((value) => (value += 12));

  return (
    <div className="p-8 h-screen">
      <div className="grid lg:grid-cols-3 gap-6">
        {data.map(
          (
            data: { id: string; name: string; message: string },
            key: number
          ) => (
            <div
              key={key}
              className="bg-primary rounded-md  flex flex-col space-y-2 p-4 text-white"
            >
              <div className="text-lg font-medium italic">
                &ldquo; {data.message} &rdquo;
              </div>
              <div className="text-base font-semibold">{data.name}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PinterestGrid;
