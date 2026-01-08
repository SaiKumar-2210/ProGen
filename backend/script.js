import * as docx from "docx-preview";
import {Document, Packer, Paragraph,HeadingLevel} from "docx"
import { GoogleGenAI } from "@google/genai";
import { Children } from "react";
import express from "express";
import cors from "cors";
const app = express();
const port = 5000;

//Model setup (Gemini)


const ai = new GoogleGenAI({});
async function demo() {
    const response= await ai.models.generateContent({
        model:"gemini-2.5-flash",
        config: {
            systemInstruction: "You are required to generate a abstract on the project title given by the user. Give the abstract in from of three paragraphs of maximum 200 words each if the user doesnt specify.",
          },
        contents: "Farmer portal"
    });
    console.log(response.text);
    return response.text
}
// demo();

app.use(cors());
app.get("/", async (req,res)=>{


    // try{
    //     const text = await demo();
    //     // return res.send(text);
        
    // }
    // catch(err){
    //     console.log(err);
    // }
        const document = new Document({
            sections:[
                {
                    children:[
                         new Paragraph({
                            text: "Test",
                            heading:HeadingLevel.TITLE
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