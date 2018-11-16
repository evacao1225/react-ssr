import Home from './components/home';
import JSProjects from './components/js_projects';
import Movies from './components/movies';

const routes = [
	{
		path: '/',
		exact: true,
		component: Home
	},
	{
		path: '/top5movies',
		exact: true,
		component: Movies
	},
	{
		path: '/top5js',
		exact: true,
		component: JSProjects
	}
];

export default routes;
