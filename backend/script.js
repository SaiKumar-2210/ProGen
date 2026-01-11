import * as docx from "docx-preview";
import {Document, Packer, Paragraph,HeadingLevel, AlignmentType} from "docx"
import { GoogleGenAI } from "@google/genai";
import {z} from "zod";
import {zodToJsonSchema} from "zod-to-json-schema";
import { Children } from "react";
import express from "express";
import cors from "cors";
const app = express();
const port = 5000;

//Model setup (Gemini)


const ai = new GoogleGenAI({});
async function demo(title) {

    //output shema
    const outputSchema= z.object({
        head: z.string().describe("Heading of abstract"),
        body: z.string().describe("Body of abstract")
    })

    const response= await ai.models.generateContent({
        model:"gemini-2.5-flash",
        config: {
            systemInstruction: "You are required to generate a abstract on the project title given by the user. Give the abstract in from of three paragraphs of maximum 200 words each if the user doesnt specify. Return the output in from of json conating 2keys head and body example: {head:'example',body: 'three paras'}. Dont start the json with ```json",
            responseMimeType: "application/json",
            responseJsonSchema: zodToJsonSchema(outputSchema)
          },
        contents: title
    });
    const gentext=outputSchema.parse(JSON.parse(response.text));
    return gentext;
}
// demo();

app.use(cors(),express.json());
app.post("/", async (req,res)=>{
    const {Search}= req.body;
    console.log(Search)
    const atext=await demo(Search);
    const document = new Document({
        sections:[
            {
                children:[
                        new Paragraph({
                            text:atext.head,
                            heading:HeadingLevel.HEADING_1,
                            alignment:AlignmentType.CENTER
                        }),
                        new Paragraph({
                        text: atext.body,
                        
                        })
                ]
            }
        ]
    });
    // return document;
    const data= await Packer.toBase64String(document);
    res.json({filedata:data});
    }
);


app.listen(port,()=>{
    console.log("listening..");
})