const UserIcon = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="192"
      height="192"
      fill="#8f9857"
      viewBox="0 0 256 256"
      className={`icon ${props.className}`}
    >
      <rect width="256" height="256" fill="none"></rect>
      <path d="M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"></path>
    </svg>
  );
};

export default UserIcon;
