import React from "react";
import styles from "./paint.css";

function Paint(props) {
  return (
    <div>
      <svg width="1115" height="717" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
        <path className={styles.animated} d="M1115 0H-24l8 497 4 122c16 70 93 114 
          166 93 42-13 78-75 78-75l172-206c45-39 81-45 
          124-36 30 5 44 15 96 81 52 67 133 78 
          188 21 56-57 303-497 303-497z"
          // fill="#FFF491"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}


export default Paint;

