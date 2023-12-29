import { trpc } from "../utils/trpc";

const LastPost = () => {
  const { data, isPending } = trpc.post.all.useQuery();

  return isPending ? (
    <p>Loading...</p>
  ) : (
    <pre>{JSON.stringify(data)}</pre>
  );
};

export default LastPost;
