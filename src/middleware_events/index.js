import pg_validate_mail from './events/pg_validate_mail.js';

const initEventListeners = (channel, hash) => {
	console.log(hash);
	channel.on(hash, data => {
		pg_validate_mail(data);
	});
}

module.exports = initEventListeners;