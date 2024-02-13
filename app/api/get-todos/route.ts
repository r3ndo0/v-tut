import todos from "@/data/db.json";

export async function GET(req: Request) {
  console.log(req.body);
  return Response.json(todos);
}
