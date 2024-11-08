import React, { useState } from "react";
import Thread from "./Thread";  // A separate component to handle a single thread

function DiscussionBoard() {
  const [threads, setThreads] = useState([
    {
      id: 1,
      title: "Iphone vs Samsung: Which is better?",
      description: "Let's discuss the differences between React and Vue.js",
      replies: [
        { user: "John", text: "I personally prefer Iphone." },
        { user: "Jane", text: "I think Samsung has a better camera" }
      ]
    },
    {
      id: 2,
      title: "Best Smartphones in 2024",
      description: "What are the top phones right now?",
      replies: []
    }
  ]);
  const [newThread, setNewThread] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewThread({ ...newThread, [name]: value });
  };

  const handleCreateThread = () => {
    if (newThread.title && newThread.description) {
      setThreads([
        ...threads,
        {
          id: threads.length + 1,
          title: newThread.title,
          description: newThread.description,
          replies: []
        }
      ]);
      setNewThread({ title: "", description: "" }); // Reset form
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Discussion Board</h2>

      {/* New Thread Form */}
      <div className="border p-4 mt-4 rounded shadow-sm">
        <h4>Create a New Thread</h4>
        <div className="mb-3">
          <input
            type="text"
            name="title"
            placeholder="Thread Title"
            className="form-control"
            value={newThread.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <textarea
            name="description"
            placeholder="Thread Description"
            className="form-control"
            value={newThread.description}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleCreateThread}>
          Create Thread
        </button>
      </div>

      {/* Display existing threads */}
      <div className="mt-5">
        {threads.map((thread) => (
          <Thread key={thread.id} thread={thread} />
        ))}
      </div>
    </div>
  );
}

export default DiscussionBoard;
