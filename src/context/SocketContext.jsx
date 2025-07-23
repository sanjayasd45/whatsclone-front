import { createContext, useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = new WebSocket('ws://localhost:8000/ws/chat');

    socketRef.current.onopen = () => {
      console.log('Connected to WebSocket');
    };

    socketRef.current.onclose = () => {
      console.log('WebSocket disconnected');
    };

    socketRef.current.onerror = (err) => {
      console.error('WebSocket error:', err);
    };

    return () => {
      socketRef.current.close();
    };
  }, []);

  return (
    <SocketContext.Provider value={socketRef.current}>
      {children}
    </SocketContext.Provider>
  );
};

SocketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useSocket = () => useContext(SocketContext);
