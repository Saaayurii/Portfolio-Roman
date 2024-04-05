'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
	const { ref } = useSectionInView('About')

	return (
		<motion.section
			ref={ref}
			className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id='about'
		>
			<SectionHeading>Обо мне</SectionHeading>
			<p className='mb-3'>
      Пока я еще не закончил университет по специальности{' '}
				<span className='font-medium'>ИВТ</span>, но продолжаю идти 
				к мечте, к программированию. Я освоил{' '}
				<span className='font-medium'>полный стек веб-разработки</span>.{' '}
				<span className='italic'>Мне особенно нравится</span> аспект решения
				проблем в программировании. Я <span className='underline'>люблю</span>{' '}
				ощущение, когда наконец-то удается найти решение проблемы. Мой основной
				стек технологий -{' '}
				<span className='font-medium'>React, Next.js, Node.js и PostgreSQL</span>.
				Я также знаком с TypeScript и Prisma. Я всегда стремлюсь изучать новые
				технологии. В настоящее время я ищу{' '}
				<span className='font-medium'>полноценную должность</span> разработчика.
			</p>

			<p>
				<span className='italic'>Когда я не программироваю</span>, мне нравится
				играть в видеоигры, смотреть фильмы и играть с моей собакой. Я также
				люблю <span className='font-medium'>учиться чему-то новому</span>.
				Сейчас я изучаю <span className='font-medium'>историю и философию</span>
				. Также я учусь играть на гитаре.
			</p>
		</motion.section>
	)
}
