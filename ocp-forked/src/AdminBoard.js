import User from "./User";

const AdminBoard = ({ ...user }) => {
  return (
    <>
      <User {...user} />
      <span>Some of super secret information</span>
    </>
  );
};

export default AdminBoard;
