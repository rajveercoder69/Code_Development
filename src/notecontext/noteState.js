import React, { useState } from 'react';
import noteContext from './noteContext';

const Notestate = (props) => {
    const host = "http://localhost:5000";
    const [note, setNote] = useState([]);

    // to get all note
    // to get all note
    const getNotes = async() => {
        try {
            const response = await fetch(`${host}/api/dataa/fetchalldata`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                }
            });
            const json = await response.json();
            //console.log(json);

            // Update the state using setnote
            setNote(json);

            console.log(note); // Spread the fetched data into a new array
            return json;
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    }




    // to add data into database
    const adddata = async(project, input, output, fdile, elete, Interface, pf_range, added, changed, enquiry, devtype) => {
        // to make api calls
        const response = await fetch(`${host}/api/dataa/adddata`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ project, input, output, fdile, elete, Interface, pf_range, added, changed, enquiry, devtype })
        });
        const json = await response.json();
        console.log({ "success": "Success fully updated", json: json });

        const notes = {
            "_id": "661c3e84lko2a9aec119da1357d",
            "user": "661bee7c0bc1de12c8548e04",
            "project": project,
            "input": input,
            "output": output,
            "fdile": fdile,
            "elete": elete,
            "Interface": Interface,
            "changed": changed,
            "pf_range": pf_range,
            "devtype": devtype,
            "added": added,
            "enquiry": enquiry
        };
        console.log(notes)
        setNote(note.push(notes));
    }

    /// to delete data from database

    const deletedata = async(id) => {
        console.log("deletedata" + id);
        /// api call to delete data from database
        try {
            const response = await fetch(`${host}/api/dataa/deletedata/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                }
            });
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }



        const newnote = note.filter((item) => { return item._id !== id });
        setNote(newnote);
    }

    /// to modify data from database

    const modifiedata = async(id, project, input, output, fdile, Interface, elete, pf_range, changed, devtype, added, enquiry) => {
        //API call
        console.log(id);
        const response = await fetch(`${host}/api/dataa/updatedata/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ id, project, input, output, fdile, Interface, elete, pf_range, changed, devtype, added, enquiry })
        });
        const json = await response.json();
        console.log("Successfully modified", json);



        //logic to edit data
        for (let i = 0; i < note.length; i++) {
            const elemenet = note[i];
            if (elemenet._id === id) {
                console.log(elete + " " + Interface + " " + project + "" + input)
                elemenet._id = id;
                elemenet.project = project;
                elemenet.input = input;
                elemenet.output = output;
                elemenet.fdile = fdile;
                elemenet.elete = elete;
                elemenet.Interface = Interface;
                elemenet.pf_range = pf_range;
                elemenet.changed = changed;
                elemenet.devtype = devtype;
                elemenet.added = added;
                elemenet.enquiry = enquiry;
            }
        }
    }









    return ( <
        noteContext.Provider value = {
            { note, adddata, modifiedata, deletedata, getNotes }
        } > { props.children } <
        /noteContext.Provider> 
    )
}
export default Notestate;