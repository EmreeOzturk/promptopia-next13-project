import { NextRequest } from "next/server";
import { connectToDatabase } from "@/utils/database";
import Prompt from "@/models/prompt";
export const POST = async(req: NextRequest) => {
    const {userId,prompt,tag} = await req.json();
    try {
        await connectToDatabase();
        const newPrompt = await Prompt.create({
            creator: userId,
            prompt,
            tag,
        });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), {
            headers: { "Content-Type": "application/json" },
            status: 201,
            statusText: "Created",
        });

    } catch (error) {
        console.log(error);
        return new Response("Failed", {
            headers: { "Content-Type": "application/json" },
            status: 500,
            statusText: "Internal Server Error",
        });
    }


}