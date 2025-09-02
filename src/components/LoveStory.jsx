
import React from 'react';
import { motion } from 'framer-motion';

const stories = [
	{
		title: 'Awal Bertemu',
		date: '2018',
		desc: 'Kami pertama kali bertemu di kampus saat mengikuti kegiatan organisasi. Dari pertemuan itu, kami mulai saling mengenal dan berteman baik.',
	},
	{
		title: 'Tunangan',
		date: '2024',
		desc: 'Setelah beberapa tahun bersama, kami memutuskan untuk melangkah ke jenjang yang lebih serius dan resmi bertunangan di hadapan keluarga.',
	},
	{
		title: 'Pernikahan',
		date: '2025',
		desc: 'Akhirnya, kami memutuskan untuk mengikat janji suci pernikahan dan memulai babak baru dalam hidup kami bersama.',
	},
];

const LoveStory = () => {
	return (
		<section className="py-20 px-6 flex flex-col items-center text-white-gold">
			<motion.h2
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false }}
				transition={{ duration: 0.8 }}
				className="text-5xl text-center mb-12"
			>
				Our Love Story
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
						<h3 className="text-2xl font-bold mb-2">{story.title}</h3>
						<p className="text-gold font-semibold mb-2 text-lg">{story.date}</p>
						<p className="text-light-cream">{story.desc}</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default LoveStory;
