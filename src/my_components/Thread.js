import React, { useState } from "react";

function Thread({ thread }) {
  const [newReply, setNewReply] = useState("");

  const handleReplyChange = (e) => {
    setNewReply(e.target.value);
  };

  const handleAddReply = () => {
    if (newReply.trim()) {
      thread.replies.push({ user: "Anonymous", text: newReply });
      setNewReply(""); // Clear the input after adding reply
    }
  };

  return (
    <div className="border p-3 mt-4 rounded shadow-sm">
      <h5>{thread.title}</h5>
      <p>{thread.description}</p>

      <div className="mt-4">
        <h6>Replies</h6>
        {thread.replies.length > 0 ? (
          thread.replies.map((reply, index) => (
            <div key={index} className="bg-light p-2 mb-3 rounded">
              <strong>{reply.user}: </strong>{reply.text}
            </div>
          ))
        ) : (
          <p>No replies yet. Be the first to reply!</p>
        )}
      </div>

      <div className="mt-3">
        <textarea
          value={newReply}
          onChange={handleReplyChange}
          className="form-control"
          rows="3"
          placeholder="Type your reply..."
        />
        <button className="btn btn-warning mt-2" onClick={handleAddReply}>
          Post Reply
        </button>
      </div>
    </div>
  );
}

export default Thread;
