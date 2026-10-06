import "../css/ui.css";

function Profile() {
  return (
    <div>
      <div className="profile-card">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
          className="profile-image"
        />

        <div className="profile-info">
          <h2>Hanif</h2>
          <p>New React Developer</p>
          <span>Learning React</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
