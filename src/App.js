import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import store from "./Utils/appStore";
import { Provider } from "react-redux";
const App = () => {
	return (
		<Provider store={store}>
			<div>
				<Header />
				<Body />
				{/*
        - Head
        - body 
          - sidebar
             - menu items
          - mainContainer
            - buttons list
            - video container
              - video card





           */}
			</div>
		</Provider>
	);
};

export default App;
