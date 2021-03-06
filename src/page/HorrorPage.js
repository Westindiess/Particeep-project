import BackHome from "../components/Button/BackHome"
import CardList from "../components/Card/CardList"
import Header from "../components/Header/Header"
import { CardContextProvider } from "../context/CardContext"
import { useMovie } from "../context/MovieContext"

const HorrorPage = () => {
	const { list, searchFilter, postPerPages } = useMovie()

	const dataSearch = list.filter((item) => {
		return Object.keys(item).some((key) =>
			item[key]
				.toString()
				.toLowerCase()
				.includes(searchFilter.toString().toLowerCase())
		)
	})
	const newDataSearch = dataSearch.filter((item) => {
		return item.category.includes("Horror")
	})
	return (
		<div>
			<Header />
			<div className="bg-gray-900 h-screen">
				<BackHome />
				<div
					className={` py-5 gap-y-6 grid md:grid-cols-2 lg:grid-cols-3 ${
						postPerPages === "4" ? "xl:grid-cols-4" : "xl:grid-cols-5"
					}`}
				>
					{newDataSearch.map((el) => {
						const { id, image, title, category, synopsis } = el
						return (
							<ul key={id}>
								<li>
									<CardContextProvider>
										<CardList
											id={id}
											image={image}
											title={title}
											category={category}
											synopsis={synopsis}
											movie={el}
										/>
									</CardContextProvider>
								</li>
							</ul>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default HorrorPage
