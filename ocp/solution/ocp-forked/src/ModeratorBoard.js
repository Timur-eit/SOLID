import User from "./User";

const ModeratorBoard = ({ ...user }) => {
  return (
    <>
      <User {...user} />
      <span>Some of private information</span>
    </>
  );
};

export default ModeratorBoard;
