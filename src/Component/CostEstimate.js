import React, { useState, useContext, useEffect, useRef } from 'react';
import Cont from '../notecontext/noteContext';
import Form from './form';
import DataDisplay from './datadis';
import { useNavigate } from 'react-router-dom';

const CostEstimate = () => {
  const note = useContext(Cont);
  const Navigate = useNavigate();
  const { getNotes, modifiedata } = note;

  // Use state hook to store the fetched data
  const [initial, setInitial] = useState([]);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    async function fetchdata() {
      try {
        if (localStorage.getItem('token')) {
          const dae = await getNotes();
          console.log(dae);
          // Set the state with the fetched data
          setInitial(dae);
        }
        else {
          Navigate("/Login");
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchdata();
  }, [getNotes]); // Add getNotes to the dependency array to ensure useEffect re-runs when it changes


  const ref = useRef();
  const refClose = useRef();
  const [notes, setNote] = useState({ ed: "", einput: "", eoutput: "", eInterface: "", eproject: "", eelete: "", efdile: "", epf_range: "", echanged: "", edevtype: "", eadded: "", eenquiry: "" })
  const editdata = (data) => {
    console.log("updating data");
    ref.current.click()
    //console.log(data._id)
    //notes.ed=data._id;
    setNote({ ed: data._id, einput: data.input, eoutput: data.output, eInterface: data.Interface, eproject: data.project, eelete: data.elete, efdile: data.fdile, epf_range: data.pf_range, echanged: data.changed, edevtype: data.devtype, eadded: data.added, eenquiry: data.enquiry })
    //console.log(notes.ed)
  }

  const handlechange = (e) => {
    setNote({ ...notes, [e.target.name]: e.target.value })


  }
  const handlechangeclick=(e)=>{
    setNote({ ...notes, [e.target.name]: e.target.value })
  }
  const handleclick = () => {
    console.log('Updating.......', notes)

    console.log(notes.eInterface)
    modifiedata(notes.ed, notes.eproject, notes.einput, notes.eoutput, notes.efdile, notes.eInterface, notes.eelete, notes.epf_range, notes.echanged, notes.edevtype, notes.eadded, notes.eenquiry);
    refClose.current.click();
  }


  return (
    <div className='row'>
      <Form />
      <div>
        {/* Button trigger modal */}
        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>

        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modify</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
                  <center><h3>Data for Estimation</h3></center>
                  <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="eproject" style={{ marginBottom: '5px' }}>Project Type</label>
                    <input type="text" className="form-control" id="eproject" name="eproject" onChange={handlechange} value={notes.eproject} placeholder="Enter project type" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                  </div>
                  <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="einput" style={{ marginBottom: '5px' }}>Project Input File</label>
                    <input type="text" className="form-control" id="einput" name="einput" onChange={handlechange} value={notes.einput} placeholder="Enter input file" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                  </div>
                  <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="eoutput" style={{ marginBottom: '5px' }}>Project Output File</label>
                    <input type="text" className="form-control" id="eoutput" name="eoutput" onChange={handlechange} value={notes.eoutput} placeholder="Enter output file" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                  </div>
                  <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="eInterface" style={{ marginBottom: '5px' }}>Project Interface File</label>
                    <input type="text" className="form-control" id="eInterface" name="eInterface" onChange={handlechange} value={notes.eInterface} placeholder="Enter interface file" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                  </div>
                  <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="eenquiry" style={{ marginBottom: '5px' }}>Project Enquiry File</label>
                    <input type="text" className="form-control" id="eenquiry" name="eenquiry" onChange={handlechange} value={notes.eenquiry} placeholder="Enter enquiry file" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                  </div>
                  <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="efdile" style={{ marginBottom: '5px' }}>Project Number File</label>
                    <input type="text" className="form-control" id="efdile" name="efdile" onChange={handlechange} value={notes.efdile} placeholder="Enter number file" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                  </div>
                  <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="epf_range" style={{ marginBottom: '5px' }}>Project PF Range</label>
                    <select className="form-control" id="epf_range" name="epf_range" onClick={handlechangeclick} onChange={handlechange} value={notes.epf_range} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="edevtype" style={{ marginBottom: '5px' }}>Project DevType</label>
                    <select className="form-control" id="edevtype" name="edevtype" onClick={handlechangeclick} onChange={handlechange} value={notes.edevtype} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                      <option value="1">Development</option>
                      <option value="0">Maintenance</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="echanged" style={{ marginBottom: '5px' }}>Project Changed File</label>
                    <input type="text" className="form-control" id="echanged" name="echanged" onChange={handlechange} value={notes.echanged} placeholder="Enter changed file" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                  </div>
                  <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="eadded" style={{ marginBottom: '5px' }}>Project Added File</label>
                    <input type="text" className="form-control" id="eadded" name="eadded" onChange={handlechange} value={notes.eadded} placeholder="Enter added file" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                  </div>
                  <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="eelete" style={{ marginBottom: '5px' }}>Project Deleted File</label>
                    <input type="text" className="form-control" id="eelete" name="eelete" onChange={handlechange} value={notes.eelete} placeholder="Enter deleted file" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button onClick={handleclick} type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {// Render initial only if it's available
        initial.length ? (
          initial.map((data) => (
            <DataDisplay key={data._id} editdata={editdata} data={data} />
          ))
        ) : (
          <p>No data is found for this user...</p>
        )
      }
    </div>

  );
}

export default CostEstimate;
