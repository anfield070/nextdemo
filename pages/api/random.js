export default (req, res) => {
  res.statusCode = 200;
  res.json({ random: `${Math.random()}` });
};
