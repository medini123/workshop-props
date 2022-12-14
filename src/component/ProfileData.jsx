import React from 'react'
import Profile from '/profile/Profile'

export default function ProfileData(name) {
    const SaymyName = () => { alert(`its me ${name}`); }
    const ProfileData = [
        {
          img : "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/300379143_3262941180654988_9104706331710546147_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zX2J0iEE1V0AX-WP7Zp&_nc_ht=scontent.ftun16-1.fna&oh=00_AfC-jW2wGCGYx6sWs3pDa4HrhttuL3bL6ooZkUHnlFEP8A&oe=638FEF0C",
        fullName: "Medini Zied",
        bio: " Licence in management ",
      profession :"Web Development",
      },
    ];
    return (
      <div>
            <Profile ProfileFn={SaymyName}
                {...ProfileData[0]} />
      </div>
    );
}