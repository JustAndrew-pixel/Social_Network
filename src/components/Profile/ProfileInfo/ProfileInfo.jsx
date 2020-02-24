import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://images.wallpaperscraft.com/image/venice_river_pier_building_sky_28597_1920x1080.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      {/* <img src='https://nevadahumanesociety.org/wp-content/uploads/2018/08/NHS-Slider-03-1024x731.jpg' /> */}
      </div>

    </div>
  )
}

export default ProfileInfo;