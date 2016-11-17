import { Task } from '../models';
// import cuid from 'cuid';
// import sanitizeHtml from 'sanitize-html';

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
    console.log('NOW IN tHE CONTROLLER');
    const newTask = new Task(req.body);
    
    Task.create(req.body, (err, task) => {
        if (err) {
          console.log('something bad happened');
          res.status(500).send(err);
        }else {
          console.log('=========newTask=====', task);
          console.log('=========newTaskID=====', task.id);
          res.json({ task });
        }
      });
  };

export const updateTask = (req, res)=> {
  console.log('===========request params========', req.params);
  console.log('===========request body========', req.body);
  Task.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, task)=> {
    if (err) {
      console.log('something bad happened', err);
      res.status(500).send(err);
    }else {
      console.log('task returns', task);
      console.log('=========UPDATED TASK ID=====', task.id);
      
      res.json({ task });
    }
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
