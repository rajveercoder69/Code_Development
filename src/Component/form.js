import React,{useContext,useState} from 'react'
import Context from '../notecontext/noteContext';

const Form=()=> {
    const contData= useContext(Context);
    const {adddata}=  contData;
    const [note, setNote]= useState({input:"",output:"",project:"",Interface:"",elete:"",fdile:"",pf_range:"",added:"",changed:"",enquiry:"",devtype:""})
const handlechange=(e)=>{
 setNote({...note,[e.target.name]:e.target.value})
}
const handlechangeclick=(e)=>{
  setNote({ ...note, [e.target.name]: e.target.value })
}
    const handleclick=()=> {
        adddata(note.project,note.input,note.output,note.fdile,note.Interface,note.elete,note.pf_range,note.added,note.changed,note.enquiry,note.devtype)
    }
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
    <center><h3>Data for Estimation</h3></center>
    <div className="form-group" style={{ marginBottom: '15px' }}>
      <label htmlFor="project" style={{ marginBottom: '5px' }}>Project Number</label>
      <input type="text" className="form-control" id="project" name="project" onChange={handlechange} placeholder="Enter project type" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
    </div>
    <div className="form-group" style={{ marginBottom: '15px' }}>
      <label htmlFor="input" style={{ marginBottom: '5px' }}>Project Input File</label>
      <input type="text" className="form-control" id="input" name="input" onChange={handlechange} placeholder="Enter input file" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
    </div>
    <div className="form-group" style={{ marginBottom: '15px' }}>
      <label htmlFor="output" style={{ marginBottom: '5px' }}>Project Output File</label>
      <input type="text" className="form-control" id="output" name="output" onChange={handlechange} placeholder="Enter output file" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
    </div>
    <div className="form-group" style={{ marginBottom: '15px' }}>
      <label htmlFor="elete" style={{ marginBottom: '5px' }}>Project Interface File</label>
      <input type="text" className="form-control" id="elete" name="elete" onChange={handlechange} placeholder="Enter interface file" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
    </div>
    <div className="form-group" style={{ marginBottom: '15px' }}>
      <label htmlFor="enquiry" style={{ marginBottom: '5px' }}>Project Enquiry File</label>
      <input type="text" className="form-control" id="enquiry" name="enquiry" onChange={handlechange} placeholder="Enter enquiry file" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
    </div>
    <div className="form-group" style={{ marginBottom: '15px' }}>
      <label htmlFor="fdile" style={{ marginBottom: '5px' }}>Project Number File</label>
      <input type="text" className="form-control" id="fdile" name="fdile" onChange={handlechange} placeholder="Enter number file" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
    </div>
    <div className="form-group" style={{ marginBottom: '15px' }}>
  <label htmlFor="pf_range" style={{ marginBottom: '5px' }}>Project PF Range</label>
  <select className="form-control" id="pf_range" name="pf_range" onClick={handlechangeclick} onChange={handlechange} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select>
</div>
    <div className="form-group" style={{ marginBottom: '15px' }}>
  <label htmlFor="devtype" style={{ marginBottom: '5px' }}>Project DevType</label>
  <select className="form-control" id="devtype" name="devtype" onClick={handlechangeclick} onChange={handlechange} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
    <option value="1">Development</option>
    <option value="0">Maintenance</option>
  </select>
</div>

    <div className="form-group" style={{ marginBottom: '15px' }}>
      <label htmlFor="added" style={{ marginBottom: '5px' }}>Project Added File</label>
      <input type="text" className="form-control" id="added" name="added" onChange={handlechange} placeholder="Enter added file" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
    </div>
    <div className="form-group" style={{ marginBottom: '15px' }}>
      <label htmlFor="changed" style={{ marginBottom: '5px' }}>Project Changed File</label>
      <input type="text" className="form-control" id="changed" name="changed" onChange={handlechange} placeholder="Enter changed file" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
    </div>
    <div className="form-group" style={{ marginBottom: '15px' }}>
      <label htmlFor="Interface" style={{ marginBottom: '5px' }}>Project Deleted File</label>
      <input type="text" className="form-control" id="Interface" name="Interface" onChange={handlechange} placeholder="Enter deleted file" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
    </div>
    <center><button type="submit" className="btn btn-primary my-3" onClick={handleclick} style={{ padding: '10px 20px', borderRadius: '5px' }}>Submit</button></center>
  </div>
  
  )
}

export default Form;
