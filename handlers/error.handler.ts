export default function (error: Bun.ErrorLike) {
  console.error(error);
  return new Response(`Internal Error: ${error.message}`, {
    status: 500,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
