export default function (req: Request) {
  return Response.json(
    {
      status: false,
      message: `${req.url} doesn't exist 😿. Try /me for fun cat fact 😸`,
    },
    { status: 404 }
  );
}
