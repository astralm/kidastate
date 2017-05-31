import pg_validate_mail from './events/pg_validate_mail.js';

const initEventListeners = (channel, mobile_hash) => {
	channel.on(mobile_hash, data => {
		pg_validate_mail(data);
	});
}

module.exports = initEventListeners;