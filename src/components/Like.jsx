import { useState } from 'react';

function LikeButton() { 
    const [likes, setLiked] = useState(0);
    return (
        <>
            <p>จำนวนไลค์: {likes}</p>
            <button onClick={() => setLiked(likes + 1)}>
                ถูกใจ
            </button>
            <button onClick={() => setLiked(0)}>
                รีเซ็ต
            </button>
        </>
    );
}
export default LikeButton;