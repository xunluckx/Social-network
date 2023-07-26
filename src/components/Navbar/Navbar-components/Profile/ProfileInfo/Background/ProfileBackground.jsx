import p from './ProfileBackground.module.css';

const ProfileBackground = () => {
  return (
    <div>
      <img
        className={p.img}
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        alt="img"
      ></img>
    </div>
  );
};

export default ProfileBackground;
