import { Task } from '../models';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all tasks
 * @param req
 * @param res
 * @returns void
 */
export const getTasks = (req, res) => {
	Task.find().sort('-dateAdded').exec((err, tasks) => {
		if (err) {
			res.status(500).send(err);
		}

		res.json({ tasks });
	});
};

// console.log('getTasks', getTasks());
/**
 * Save a task
 * @param req
 * @param res
 * @returns void
 */
export const addTask = (req, res) => {
	if (!req.body.task.title || !req.body.task.description) {
		res.status(403).end();
	}

	const newTask = new Task(req.body.task);

	// Let's sanitize inputs
	newTask.description = sanitizeHtml(newTask.description);
	newTask.title = sanitizeHtml(newTask.title);
	newTask.cuid = cuid();
	newTask.save((err, task) => {
		if (err) {
			res.status(500).send(err);
		}

		res.json({ task });
	});
};

/**
 * Get a single task
 * @param req
 * @param res
 * @returns void
 */
export const getTask = (req, res) => {
	Task.findOne({ cuid: req.params.cuid }).exec((err, task) => {
		if (err) {
			res.status(500).send(err);
		}

		res.json({ task });
	});
};

/**
 * Delete a task
 * @param req
 * @param res
 * @returns void
 */
export const deleteTask = (req, res) => {
	Task.findOne({ cuid: req.params.cuid }).exec((err, task) => {
		if (err) {
			res.status(500).send(err);
		}

		task.remove(() => {
			res.status(200).end();
		});
	});
};