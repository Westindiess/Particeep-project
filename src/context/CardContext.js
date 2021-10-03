import React, { createContext, useContext, useReducer } from "react"
import { reducer } from "../reducer/reducer"

export const CardContext = createContext()

export const CardContextProvider = ({ children }) => {
	const [state, CardDispatch] = useReducer(reducer, {
		toggleLikes: false,
		toggleDisLikes: false,
		readMore: false,
	})
	const { toggleLikes, toggleDisLikes, readMore } = state
	return (
		<CardContext.Provider
			value={{ toggleLikes, toggleDisLikes, readMore, CardDispatch }}
		>
			{children}
		</CardContext.Provider>
	)
}

export const useCard = () => {
	const context = useContext(CardContext)
	if (context === undefined) {
		throw new Error(
			"It seems that you are trying to use GradientContext outside of its provider"
		)
	}
	return context
}
