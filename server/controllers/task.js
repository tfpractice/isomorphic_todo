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

/**
 * Save a task
 * @param req
 * @param res
 * @returns void
 */
export const addTask = (req, res) => {
    Task.create(req.body, (err, task) => {
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
