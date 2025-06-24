const errorHandler = (err, req, res, next) => {
   req.status(404).json({msg : 'Error'})
};

export default errorHandler;
