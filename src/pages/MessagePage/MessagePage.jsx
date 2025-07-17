// MessagePage.jsx
import React, { useEffect, useState } from "react";
import "./MessagePage.css";

const mockUser = {
  id: "u1",
  name: "You",
  avatar: "https://i.pravatar.cc/100?img=1",
};

const MessagePage = () => {
  const [conversations, setConversations] = useState([]);
  const [selected, setSelected] = useState(null);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data = [
      {
        id: "c1",
        name: "Indie Folk Duo",
        avatar: "https://i.pravatar.cc/100?img=2",
        unread: 2,
        messages: [
          {
            id: "m1",
            senderId: "u1",
            text: "Hi! I'm interested in booking you.",
            time: "10:00 AM",
          },
          {
            id: "m2",
            senderId: "u2",
            text: "We'd love to perform!",
            time: "10:30 AM",
          },
        ],
      },
      {
        id: "c2",
        name: "Electronic Producer",
        avatar: "https://i.pravatar.cc/100?img=3",
        unread: 0,
        messages: [
          {
            id: "m3",
            senderId: "u1",
            text: "Are you available next weekend?",
            time: "Yesterday",
          },
          {
            id: "m4",
            senderId: "u3",
            text: "Let me check my calendar.",
            time: "Yesterday",
          },
        ],
      },
    ];
    setConversations(data);
  }, []);

  const handleSend = () => {
    if (!message.trim() || !selected) return;
    const newMsg = {
      id: Date.now().toString(),
      senderId: mockUser.id,
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === selected.id
          ? { ...conv, messages: [...conv.messages, newMsg] }
          : conv
      )
    );
    setSelected((prev) => ({ ...prev, messages: [...prev.messages, newMsg] }));
    setMessage("");
  };

  const filtered = conversations.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="message-page">
      <div className="conversation-list">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul>
          {filtered.map((c) => (
            <li
              key={c.id}
              onClick={() => setSelected(c)}
              className={selected?.id === c.id ? "active" : ""}
            >
              <img src={c.avatar} alt={c.name} />
              <div>
                <strong>{c.name}</strong>
                <p style={{ fontSize: "0.8rem", color: "#666" }}>
                  {c.messages.at(-1)?.text}
                </p>
              </div>
              {c.unread > 0 && <span className="badge">{c.unread}</span>}
            </li>
          ))}
        </ul>
      </div>

      <div className="chat-window">
        {selected ? (
          <>
            <div className="chat-header">
              <img src={selected.avatar} alt={selected.name} />
              <div>
                <strong>{selected.name}</strong>
                <p style={{ fontSize: "0.8rem", color: "#666" }}>
                  Online recently
                </p>
              </div>
            </div>
            <div className="chat-body">
              {selected.messages.map((m) => (
                <div
                  key={m.id}
                  className={`msg ${
                    m.senderId === mockUser.id ? "sent" : "received"
                  }`}
                >
                  {m.text}
                  <span>{m.time}</span>
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <button onClick={handleSend}>Send</button>
            </div>
          </>
        ) : (
          <div className="no-chat">
            Select a conversation to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagePage;
