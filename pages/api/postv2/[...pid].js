export default (req, res) => {
  const {
    query: { pid },
  } = req;

  res.json(pid);
};
