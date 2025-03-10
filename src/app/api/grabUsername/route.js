import { Page } from "@/models/Page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req) {
  const { username } = await req.json();
  await mongoose.connect(process.env.MONGO_URI);
  const existingPageDoc = await Page.findOne({ uri: username });
  if (existingPageDoc) {
    return  new Response(JSON.stringify({ success: false }), { status: 200 });
  } else {
    const session = await getServerSession(authOptions);
    await Page.create({ 
        uri: username,
        owner: session?.user?.email,
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }
}

export async function GET(req) {
  return new Response('Method Not Allowed', { status: 405 });
}