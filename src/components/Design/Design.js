import React, { useEffect, useState } from 'react';
import sanityClient from '../../client.js';
// // import styles from "../AllPosts./allPosts.module.scss";
import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom"
import styles from './design.module.scss';
import Paint from '../Animation/Paint';

export default function Design() {
    const [designData, setDesignData] = useState(null);
    
   

	// const { slug } = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "design" ]{
                    title,
                    slug,
                    tags,
                    mainImage{
                        asset ->{
                            _id,
                            url,
                            alt,
                        }
                    }
                }`
			)
			.then((data) => setDesignData(data))
			.catch(console.error);
    }, []);
    console.log(designData)

	// let internshipData = () => {
	//     const internship = tags.filter(tags === "internship");
	//     this.setState({tags: 'internship'});
	//     console.log(internship);
	//   }

	if (!designData) return <div>Loading... What is happening? OMG 🎪😬 😱</div>;

	return (
		<div className={styles.flex}>
				<Paint className={styles.animation} color="#FFF490" />
			<div className={styles.landingTitle}>
			
				<h1 className={styles.verticalText}>Design</h1>
			</div>
			<div className={styles.wrapper}>
				{designData &&
					designData.map((design, index) => (
						<Link to={'/' + design.slug.current} key={design.slug.current}>
							<span key={index}>
								<img
									className={styles.heroImage}
									src={design.mainImage.asset.url}
									alt={design.mainImage.alt}
								/>
								<h2 className={styles.title}>{design.title}</h2>
							</span>
						</Link>
					))}
			</div>
		</div>
	);
}
