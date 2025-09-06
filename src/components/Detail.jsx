
import React from 'react';
import { motion } from 'framer-motion';

const stories = [
	{
		title: 'Reception',
		desc: 'Join us for enchanting evening celebration! Our wedding ceremony will begin at 4pm in the evening, followed by a reception under the stars.',
	},
	{
		title: 'Accomodation',
		desc: 'We are pleased to offer our guests a special room at Green Nirvana Resort. To ensure availability please make your reservation clearly by 25th November.',
	},
	{
		title: 'Transportation',
		desc: 'To ensure a seamless arrival experience, we will provide complimentary transportation from the airport to the wedding venue.',
	},
	{
		title: 'Schedule Note',
		desc: 'While we have planned a detailed schedule for our special day, we understand that unforeseen circumstances may arise. Should you need to adjust your arrival or departure plans, kindly inform our contact person, [Nadya] , at +62 821-5829-8599 so we can accommodate your needs accordingly.',
	}
];

const Detail = () => {
	return (
		<section className="py-20 px-6 flex flex-col items-center text-white-gold">
			<motion.h2
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false }}
				transition={{ duration: 0.8 }}
				className="text-5xl text-center mb-12"
			>
				Details
			</motion.h2>
			<div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full max-w-5xl">
				{stories.map((story, idx) => (
					<motion.div
						key={story.title}
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: false, amount: 0.5 }}
						transition={{ duration: 0.7, delay: idx * 0.2 }}
						className="bg-white/10 backdrop-blur-md p-8 rounded-lg text-start w-full border border-white/20 shadow-lg"
					>
						<h3 className="text-3xl font-bold mb-2">{story.title}</h3>
						<p className="text-light-cream text-lg">{story.desc}</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Detail;
