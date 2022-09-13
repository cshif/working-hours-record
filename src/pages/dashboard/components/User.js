import avatar from '../../../assets/img/avatar.png';

const user = {
  name: 'Morty Smith',
  avatar
};

export default function User() {
  return (
    <div className="user">
      <div className="user-avatar">
        <img src={user.avatar} alt="user-avatar"/>
      </div>
      <p className="user-name">{user.name}</p>
    </div>
  );
}