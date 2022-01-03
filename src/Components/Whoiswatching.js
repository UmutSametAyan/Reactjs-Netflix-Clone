import React, { useState } from 'react'
import Profiles from './Profiles';
import AddProfile from './AddProfile';
import Smiles from '../smilesn.png'

export default function Whoiswatching(props) {
    const [isNewProfile, setIsNewProfile] = useState(false);

    const accounts = [
        { name: "Umut Samet", picture: "https://occ-0-784-2773.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41" },
        { name: "Fatma Sandal", picture: Smiles },
        { name: "Çocuk", picture: "https://occ-0-784-2773.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABT5ixFQbYisnc8BoIn1xc_zMKDXVUUZsRdfNhsya9b89L6TukHzcbTefYwHzK-81f0E1jrC-R9AK9KRRBwGCLxs6FtBY.png?r=8f0" },
    ];

    return (
        <div>
            {!isNewProfile ?
             <Profiles newProfile={profile => setIsNewProfile(profile)} account={props.account} accounts={accounts} />
                :
             <AddProfile newProfile={isNewProfile} account={props.account} accounts={accounts} />
            }
        </div>
    )
}
