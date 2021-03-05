import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    return (
        <div>
            <h3>this is friend detail component:{friendId}</h3>
        </div>
    );
};

export default FriendDetail;