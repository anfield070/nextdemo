import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { pid, type, limit } = router.query;

  return (
    <p>
      Post: {pid}, {type}, {limit}
    </p>
  );
};

export default Post;
