export default function promiseMiddleware() {
	return next => action => {
		const { promise, type, ...rest } = action;

		if (!promise) return next(action);

		const SUCCESS = type;
		const REQUEST = type + '_REQUEST';
		const FAILURE = type + '_FAILURE';

		next({...rest, type: REQUEST });

		return promise
			.then(res => {
				console.log('action', action);
				console.log('next', next);
				next({...rest, res, type: SUCCESS });

				return true;
			})
			.catch(error => {
				next({...rest, error, type: FAILURE });
				console.log(error);

				return false;
			});
	};
}