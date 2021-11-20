import React from 'react';
import type { NextPage } from 'next'

import cardStyles from './Card.module.css'

type CardProps = {
	name: string;
	discount: number;

}
const Card: NextPage<CardProps> = ({name, discount}) => {
	return (
		<div className={cardStyles.container}>
			<p>Name: <span>{name}</span></p>
			<p>Discount: <span>{discount}</span></p>
		</div>
	);
};

export default Card;
