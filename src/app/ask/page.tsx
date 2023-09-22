"use client";

import React, { useState } from "react"; 
import { TagsInput } from "react-tag-input-component";
import TextField from '@mui/material/TextField';

export default function Page(){
    const [selected, setSelected] = useState(["gfg"]);
    return (
        <>
            <h1>Ask</h1>
            <form action="/api/ask" method="post">
                <label htmlFor="title">Title</label>
                <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                maxRows={4}
                />                
                <br />
                <label htmlFor="description">Description</label>
                <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                />
                <br />
                <label htmlFor="tags">Tags</label>
                <div>
                    <div>
                    {/* <pre>{JSON.stringify(selected)}</pre> */}
                    <TagsInput
                        value={selected}
                        onChange={setSelected}
                        name="tags"
                        placeHolder="tags"
                    />
                    </div>
                </div>
                <input type="submit" value="Submit" />
            </form>
            
        </>
    )
}
