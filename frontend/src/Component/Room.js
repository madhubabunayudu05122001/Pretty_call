import { Routes, Route, Link } from "react-router-dom";
import "./Room.css";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";

function Room() {
  return (
    <div className="Room">
        <Link path="/room">Rooms </Link>
        <Link path="/room/:roomId" element={<RoomPage />}>Room</Link>
    </div>
  );
}

export default Room;