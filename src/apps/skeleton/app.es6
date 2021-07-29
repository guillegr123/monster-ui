import $ from 'jquery';
import monster from 'monster';

export const render = container => {
	const appContext = eval('this'), // Hack to get app context, only works on render function
		$template = $(appContext.getTemplate({
			name: 'layout',
			data: {
				user: monster.apps.auth.currentUser
			}
		}));

	monster.ui.insertTemplate(container, $template);
};
