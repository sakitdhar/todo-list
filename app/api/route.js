import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/config/models/TodoModel";
import { NextResponse } from "next/server";

const LOADDB = async () => {
  await ConnectDB();
};

LOADDB();

export async function GET() {
  const todos = await TodoModel.find({});
  return NextResponse.json({ todos: todos });
}

export async function POST(request) {
  const { title, description } = await request.json();

  await TodoModel.create({
    title,
    description,
  });
  return NextResponse.json({ msg: "Todo Created" });
}

export async function DELETE(request) {
  const mongoId = await request.nextUrl.searchParams.get("mongoId");
  await TodoModel.findByIdAndDelete(mongoId);

  return NextResponse.json({ msg: "Todo Deleted " });
}

export async function PUT(request) {
  const mongoId = await request.nextUrl.searchParams.get("mongoId");
  await TodoModel.findByIdAndUpdate(mongoId, {
    $set: {
      isCompleted: true,
    },
  });

  return NextResponse.json({ msg: "Todo Completed " });
}
