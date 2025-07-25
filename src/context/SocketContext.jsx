// SocketContext.js
import { createContext, useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const socketRef = useRef(null);

  useEffect(() => {
    const value = localStorage.getItem("userData");
    const parsedValue = value ? JSON.parse(value) : null;

    if (!parsedValue?.phone_number) return;

    socketRef.current = new WebSocket("ws://localhost:8000/ws/chat");

    socketRef.current.onopen = () => {
      console.log("Connected to WebSocket");
      const payload = {
        type: "connect",
        user: parsedValue.phone_number,
      };
      socketRef.current.send(JSON.stringify(payload));
    };
    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("WebSocket message received:", data);
    };
    socketRef.current.onclose = () => {
      console.log("WebSocket disconnected");
    };

    socketRef.current.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    return () => {
      socketRef.current?.close();
    };
  }, []);

  return (
    <SocketContext.Provider value={socketRef}>
      {children}
    </SocketContext.Provider>
  );
};

SocketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useSocket = () => useContext(SocketContext);
