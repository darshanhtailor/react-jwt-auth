import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesinitial = [
        {
          "_id": "63734a69673e240a6a0e66c6",
          "user": "637243cc0cb587c5f382189a",
          "title": "do tcs",
          "description": "Exams comming",
          "tag": "Important",
          "date": "2022-11-15T08:14:33.105Z",
          "__v": 0
        },
        {
          "_id": "63737f1a6fc3c06511d1bade",
          "user": "637243cc0cb587c5f382189a",
          "title": "adding some",
          "description": "more notes",
          "tag": "Important",
          "date": "2022-11-15T11:59:22.646Z",
          "__v": 0
        },
        {
          "_id": "63737f1f6fc3c06511d1bae0",
          "user": "637243cc0cb587c5f382189a",
          "title": "adding some 2",
          "description": "more notes 2",
          "tag": "Important",
          "date": "2022-11-15T11:59:27.434Z",
          "__v": 0
        },
        {
          "_id": "63737f256fc3c06511d1bae2",
          "user": "637243cc0cb587c5f382189a",
          "title": "adding some 3",
          "description": "more notes 3",
          "tag": "Important",
          "date": "2022-11-15T11:59:33.550Z",
          "__v": 0
        }
      ]
    const [notes, setNotes] = useState(notesinitial)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;