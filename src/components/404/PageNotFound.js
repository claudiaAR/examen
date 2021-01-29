import React from "react";
import styles from "./pageNotFound.module.scss";
import NotFound from '../Animation/NotFound';
import NotFoundTop from '../Animation/NotFoundTop';

export default function PageNotFound() {

    return (
        <div className={styles.lol}>
            <div className={styles.topWrapper}>
                <NotFoundTop />
            
            </div>
            <div className={styles.wrapper}>
                <NotFound />
            </div>
        </div>
    )
}