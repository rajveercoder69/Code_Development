import React ,{useContext} from 'react';
import Cont from '../notecontext/noteContext';

function DataDisplay(props) {
    const { data, editdata  } = props;
    //console.log(data);
    const note = useContext(Cont);
    const { deletedata }= note;

    return (
        <div className='col-md-3'>
        <div className="card" style={{ width: "18rem", marginBottom: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3"> 
              <h5 className="card-title mb-0">Project No.</h5>
              <p className="card-title mb-0">{data.project}</p>
              <div>
                <i className="fa fa-trash mx-2" onClick={() => {deletedata(data._id)}} style={{ cursor: 'pointer' }}></i>
                <i className='far fa-edit mx-2' onClick={() => {editdata(data)}} style={{ cursor: 'pointer' }}></i>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 text-muted">Input:</p>
              <p className="mb-0">{data.input}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 text-muted">Output:</p>
              <p className="mb-0">{data.output}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 text-muted">Interface:</p>
              <p className="mb-0">{data.Interface}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 text-muted">File:</p>
              <p className="mb-0">{data.fdile}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 text-muted">Enquiry:</p>
              <p className="mb-0">{data.enquiry}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 text-muted">Dev Type:</p>
              <p className="mb-0">{data.devtype}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 text-muted">Range:</p>
              <p className="mb-0">{data.pf_range}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 text-muted">Added:</p>
              <p className="mb-0">{data.added}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 text-muted">Changed:</p>
              <p className="mb-0">{data.changed}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 text-muted">Deleted:</p>
              <p className="mb-0">{data.elete}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 text-muted">Version:</p>
              <p className="mb-0">{data.__v}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 text-muted">Effort:</p>
              <p className="mb-0">{data.effort}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 text-muted">MaxEffort:</p>
              <p className="mb-0">{data.maxeffort}</p>
            </div>
             <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 text-muted">CapitalCost:</p>
              <p className="mb-0">{data.cost}</p>
            </div>
          </div>
        </div>
      </div>
      
    );
}

export default DataDisplay;
