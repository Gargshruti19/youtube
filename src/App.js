import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import store from "./Utils/appStore";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Body />,
		children: [
			{
				path: "/",
				element: <MainContainer />,
			},
			{
				path: "/watch",
				element: <WatchPage />,
			},
		],
	},
]);
const App = () => {
	return (
		<Provider store={store}>
			<div className="bg-black text-white">
				<Header />
				<RouterProvider router={appRouter}>
					<Body />
				</RouterProvider>
			</div>
		</Provider>
	);
};

export default App;
