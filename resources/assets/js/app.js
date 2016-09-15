
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// Vue.component('example', require('./components/Example.vue'));
const ExemploComponent = require('./components/Example.vue');
const LoginComponent = require('./components/Login.vue');

const router = new VueRouter();
router.map({
	'/minha-primeira-rota': {
		name: 'helloworld',
		component: ExemploComponent
	},
	'/login': {
		name: 'auth.login',
		component: LoginComponent
	}
});

router.start({}, 'body');
