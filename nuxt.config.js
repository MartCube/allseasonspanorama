export default {
	// Target (https://go.nuxtjs.dev/config-target)
	target: 'static',
	components: true,

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'panorama',
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: '' }],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
	},

	// Customize the progress-bar color
	loading: { color: '#4A88C8' },

	css: ['~/assets/main.scss', '~/assets/colors.scss'],

	plugins: [{ src: `~/plugins/lazysizes.client.js` }, { src: `~/plugins/vee-validate.js` }],

	modules: ['nuxt-i18n', '@nuxtjs/prismic', '@nuxtjs/pwa'],

	i18n: {
		defaultLocale: 'en',
		lazy: true,
		langDir: 'locales/',
		locales: [
			{
				code: 'mk',
				name: 'MK',
				file: 'mk.js',
			},
			{
				code: 'en',
				name: 'EN',
				file: 'en.js',
			},
		],
	},

	prismic: {
		endpoint: 'https://allseasonsadventure.cdn.prismic.io/api/v2',
		linkResolver: '@/plugins/link-resolver',
		htmlSerializer: '@/plugins/html-serializer',
		preview: false,
	},

	pwa: {
		manifest: {
			name: 'All Seasons Adventure',
			short_name: 'Panorama',
			theme_color: '#24292e',
			background_color: '#24292e',
		},
	},

	build: {
		hotMiddleware: {
			client: {
				quiet: true,
			},
		},
		transpile: ['vee-validate/dist/rules'],
		extend(config, { isClient, loaders: { vue } }) {
			if (isClient) {
				vue.transformAssetUrls.img = ['data-src', 'src']
				vue.transformAssetUrls.source = ['data-srcset', 'srcset']
			}
		},
	},

	generate: {
		fallback: '404.html',
	},
}
