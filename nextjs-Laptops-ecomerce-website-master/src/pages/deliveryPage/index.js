import React, { useState, useEffect } from 'react';
import GlobalStyle, { Container } from '../../globalStyles';
import Layout from '../../components/mainlayout/mainlayout'
import Spining from '../../components/Spining';
import Hero from '../../components/Banner/Hero';
import BannerSlider from '../../components/Banner/bannerSlider';
import PagesContent from '../../deliveryComponent/PagesContent';

const Delivery = () => {
	const [spining, setSpining] = useState(true);
	useEffect(() => {
		setSpining(true);
		setTimeout(() => {
			setSpining(false);
		}, 2000);
	}, []);

	return (
		<>
			<Layout>
				<Spining spining={spining} />
				
				<Hero hero='deliverybanner'>
					<BannerSlider
						title='delivery page'
						subtitle='Packages are generally dispatched within 2 days'
					/>
				</Hero>
				<Container>
					<PagesContent
						title='Delivery'
						subtitle='Shipments and returns Your pack shipment'
					/>
				</Container>
			</Layout>
		</>
	);
};

export default Delivery;
