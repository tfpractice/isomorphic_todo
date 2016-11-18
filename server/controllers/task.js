import { Task } from '../models';
// import cuid from 'cuid';
// import sanitizeHtml from 'sanitize-html';

/**
 * Get all tasks
 * @param req
 * @param res
 * @returns void
 */
export const getTasks = (req, res) =>
  Task.find().sort('-dateAdded').exec()
    .then(tasks => res.json({ tasks }))
    .catch(err =>   res.status(500).send(err));

/**
 * Save a task
 * @param req
 * @param res
 * @returns void
 */
export const addTask = (req, res) =>
  Task.create(req.body)
    .then(task => res.json({ task }))
    .catch(err => {
      console.error('Task model insert error', err);
      return res.status(500).send(err);
    });

export const updateTask = (req, res) =>
  Task.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec()
    .then(task => res.json({ task }))
    .catch(err => {
        console.log('error in Task Model Update', err);
        res.status(500).send(err);
      });

/**
 * Get a single task
 * @param req
 * @param res
 * @returns void
 */
export const getTask = (req, res) =>
    Task.findOne({ cuid: req.params.cuid }).exec()
    .then(task => res.json({ task }))
    .catch(err => res.status(500).send(err));


/**
 * Delete a task
 * @param req
 * @param res
 * @returns void
 */
export const deleteTask = (req, res) => {
    Task.findOne({ id: req.params.id }).exec((err, task) => {
        if (err) {
          console.log('DB ERROR,', err);
          
          res.status(500).send(err);
        }
        
        console.log('WEF OUND THE TASK TO REMOVE,', task);
        
        task.remove(() => {
            res.status(200).end();
          });
      });
  };
