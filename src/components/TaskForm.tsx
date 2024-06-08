import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Task } from "../interfaces/Task";
import { AiOutlinePlus } from "react-icons/ai";

interface Props {
  addANewTask: (task: Task) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const inititalState = {
  title: "",
  description: "",
};

export const TaskForm = ({ addANewTask }: Props) => {
  const [task, setTask] = useState<Task>(inititalState);
  const titleInput = useRef<HTMLInputElement>(null);

  const handleNewTask = (e: FormEvent<HTMLFormElement>): any => {
    e.preventDefault();
    addANewTask(task);
    setTask(inititalState);
    titleInput.current?.focus();
  };

  const handleInputChange = ({ target: { name, value } }: HandleInputChange) =>
    setTask({ ...task, [name]: value });

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Thêm công việc nào!</h1>

      <form onSubmit={handleNewTask}>
        <input
          type="text"
          placeholder="Thêm Tiêu Đề!"
          name="title"
          onChange={handleInputChange}
          value={task.title}
          className="form-control mb-3 rounded-0 shadow-none border-0"
          autoFocus
          ref={titleInput}
        />
        <textarea
          onChange={handleInputChange}
          name="description"
          className="form-control mb-3 shadow-none border-0"
          placeholder="Thêm Nội Dung!"
          value={task.description}
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Lưu <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
};
