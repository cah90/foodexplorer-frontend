import { useRef, useEffect } from "react"
import { register } from "swiper/element/bundle"

import { useAuth } from "../../hooks/auth"

import { Card } from "../../components/Card"
import { api } from "../../services/api"

register()

export function Slider({ categoryId, dishes }) {
	const { user } = useAuth()
	const isAdmin = user.role == "admin"

	const swiperRef = useRef(null)

	useEffect(() => {
		const swiperContainer = swiperRef.current
		const params = {
			navigation: true,
			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 8,
				},
				375: {
					slidesPerView: 1.5,
					spaceBetween: 8,
				},
				425: {
					slidesPerView: 1.8,
					spaceBetween: 16,
				},
				768: {
					slidesPerView: 3.3,
					spaceBetween: 16,
				},
				1024: {
					slidesPerView: 3.3,
					spaceBetween: 27,
				},
			},
			injectStyles: [
				`
				swiper-container {
					width: 100%;
				}
			  
				swiper-slide {
					width: 210px;
				}

			  .swiper-button-next,
			  .swiper-button-prev {
			    display: none;
			    position: absolute;
			    top: 22px;
			    height: 100%;
			    width: 2.5rem;
			    color: white;
			  }

			  .swiper-button-next {
			    right: 0;
			    background: linear-gradient(90deg, transparent, #000A0F);
			    justify-content: flex-end;
			    padding-right: 1.6rem;
			  }

			  .swiper-button-prev {
			    left: 0;
			    background: linear-gradient(90deg, #000A0F, transparent);
			    justify-content: flex-start;
			    padding-left: 1.6rem;
			  }

			   @media (min-width: 1024px) {
			    swiper-slide {
			      width: 304px;
			    }

			    .swiper-button-next,
			    .swiper-button-prev {
			      display: flex;
			    }

			    .swiper-button-disabled {
			      display: none;
			    }
			   }
			 `,
			],
		}

		Object.assign(swiperContainer, params)
		swiperContainer.initialize()
	}, [])

	return (
		<swiper-container ref={swiperRef} init={false} pagination={false}>
			{dishes
				?.filter((dish) => categoryId === dish.category_id)
				.map((filteredDish) => (
					<swiper-slide key={filteredDish.dishes_id}>
						<Card
							isAdmin={isAdmin}
							id={filteredDish.dishes_id}
							img={`${api.defaults.baseURL}/files/${filteredDish.image}`}
							name={filteredDish.dishes_name}
							description={filteredDish.description}
							price={filteredDish.price}
							buttonTitle="incluir"
						/>
					</swiper-slide>
				))}
		</swiper-container>
	)
}
