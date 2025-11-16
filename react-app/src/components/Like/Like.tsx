import styles from './Like.module.css';
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {useState} from "react";

interface Props {
    onClick: () => void;
}

const Like = (props: Props) => {
    const [fullHeart, setFullHeart] = useState(false);
    return (
        <>
            <div className={styles.like} onClick={() => {
                props.onClick();
                setFullHeart(!fullHeart)
            }}>
                {fullHeart ? <AiFillHeart color="#ff6b81" size={32}/> :
                    <AiOutlineHeart color="#ff6b81" size={32}/>}
            </div>
        </>
    )
        ;
}

export default Like;