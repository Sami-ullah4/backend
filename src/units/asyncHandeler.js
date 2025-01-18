const asyncHandeler = (requestHandeler) => {
  (req, res, next) => {
    Promise.resolve(requestHandeler(req.res.next)).catch((error) =>
      next(error)
    );
  };
};

export default asyncHandeler;

// const asyncHandeler  = () =>{};
// const asyncHandeler =()=>{()=>{}};//we just revoved the curleybrases from the function
// const asyncHandeler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       sucess: false,
//       message: error.message || "Internal Server Error",
//     });
//   }
// };
