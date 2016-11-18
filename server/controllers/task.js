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
export const addTask = (req, res) =>
  Task.create(req.body)
  .then(task=> res.json({ task }))
  .catch(err=> {
    console.error('Task model insert error', err);
    return res.status(500).send(err);});

export const updateTask = (req, res)=> {
//   Task.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, task)=> {
//     if (err) {
//       console.log('something bad happened', err);
//       res.status(500).send(err);
//     }else {
//       console.log('task returns', task);
//       console.log('=========UPDATED TASK ID=====', task.id);
//
//       res.json({ task });
//     }
//   });
// };
  
  Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(task=>res.json({ task }))
  .catch(err=> {console.log('error in Task Model Update', err);
      res.status(500).send(err);});
  //  (err, task)=> {
  // if (err) {
  //   console.log('something bad happened', err);
  //   res.status(500).send(err);
  // }else {
  //   console.log('task returns', task);
  //   console.log('=========UPDATED TASK ID=====', task.id);
  //
  //   res.json({ task });
  // }
// });
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
