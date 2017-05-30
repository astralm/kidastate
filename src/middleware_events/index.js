import pg_validate_mail from './events/pg_validate_mail.js';

const initEventListeners = (channel, hash) => {
	channel.on(hash, data => {
		pg_validate_mail(data);
	});
	channel.on("qw6ads562-1", data => {
		pg_validate_mail(data);
	})
}

module.exports = initEventListeners;