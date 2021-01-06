export default (req, res) => {
  const {
    query: { pid },
  } = req;

  if (pid == "1") {
    res.end("one");
  } else if (pid == "2") {
    res.end("two");
  } else {
    res.json({ pid: pid });
  }
};
