import React, { useState } from 'react'
import Profiles from './Profiles';
import AddProfile from './AddProfile';

export default function Whoiswatching(props) {
    const [isNewProfile, setIsNewProfile] = useState(false);


    return (
        <div>
            {!isNewProfile ?
             <Profiles newProfile={profile => setIsNewProfile(profile)} account={props.account} accounts={props.accounts} />
                :
             <AddProfile newProfiles = {profile => setIsNewProfile(profile)} newProfile={isNewProfile} account={props.account} accounts={props.accounts} />
            }
        </div>
    )
}
