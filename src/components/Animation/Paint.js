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

      {/* <svg width="1115" height="717" viewBox="0 0 1115 717" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path className={styles.animated} d="M1114.5 0H46.5H-24L-16 497L-12.5 618.5C3.79863 689.399 80.5892 732.944 153.5 711.5C196 699 232 636.5 232 636.5L404 430.5C449 392 484.5 386 528 394.5C558 400.362 572 409.5 624 476C676 542.5 756.5 554 812 497C867.5 440 1114.5 0 1114.5 0Z" 
      fill="#FFF491"
      fill="currentColor"
    
      /> */}
      
      {/* </svg> */}

    </div>
  );
}


export default Paint;

