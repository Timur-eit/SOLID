import AdminBoard from "./AdminBoard";
import ModeratorBoard from "./ModeratorBoard";
import RobotBoard from "./RobotBoard";

const BoardProxy = ({ user }) => {
  const boardByType = {
    admin: AdminBoard,
    moderator: ModeratorBoard,
    robot: RobotBoard
  };

  const CurrentBoard = boardByType[user.type];

  return <CurrentBoard user={user} />;
};

export default BoardProxy;
