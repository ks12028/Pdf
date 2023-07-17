import {useState} from 'react';
// import Chatbot from "react-simple-chatbot";
// import {Segment} from "semantic-ui-react";
import ChatBot from './ChatBot';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Document, Page, pdfjs } from 'react-pdf';

// Import Worker
import { Worker } from '@react-pdf-viewer/core';
// Import the main Viewer component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function App() {

  // creating new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // pdf file onChange state
  const [pdfFile, setPdfFile]=useState(null);

  // pdf file error state
  const [pdfError, setPdfError]=useState('');


  // handle file onChange event
  // const allowedFiles = ['application/pdf'];
  // const handleFile = (e) =>{
  //   let selectedFile = e.target.files[0];
  //    console.log(selectedFile);
  //   if(selectedFile){
  //     if(selectedFile&&allowedFiles.includes(selectedFile.type)){
  //       let reader = new FileReader();
  //       reader.readAsDataURL(selectedFile);
  //       reader.onloadend=(e)=>{
  //         setPdfError('');
  //         setPdfFile(e.target.result);
  //         console.log(e.target.result);
  //       }
  //     }
  //     else{
  //       setPdfError('Not a valid pdf: Please select only PDF');
  //       setPdfFile('');
  //     }
  //   }
  //   else{
  //     console.log('please select a PDF');
  //   }
  // }

  // chatbot steps:
  // const steps=[
  //   {
  //     id:'greet',
  //     message:"Hello Welcome to chat window",
  //     trigger:'Ask name'
  //   },{
  //     id:'ask Name',
  //     message:"What is your name",
  //     trigger:'waiting1'
  //   },{
  //     id:'waiting1',
  //     user:true,
  //     trigger:'Name'
  //   },{
  //     id:'Name',
  //     message: "hi {previousValue}, please Select your issue",
  //     trigger: 'issues'
  //   },{
  //     id:'issues',
  //     options:[
  //       {value:'Pdf',
  //     label:'Pdf',trigger:'Pdf'},{value:'Other',
  //     label:'Other',trigger:'Other'}],
        
      
  //   },
  //   {
  //     id:"Pdf",
  //     message:"Thanks for telling Pdf Issue",
  //     end:true
  //   },{
  //     id:'Other',
  //     message:"PLEase write other issue",
  //     end:true
  //   }
  // ]
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="container">
      <div className='row'>
        <div className='col-6'>
        <form>

<label><h5>Upload PDF</h5></label>
<br></br>

{/* <input type='file' className="form-control"
onChange={handleFile}></input> */}

{/* we will display error message in case user select some file
other than pdf */}
{/* {pdfError&&<span className='text-danger'>{pdfError}</span>} */}

</form>

{/* View PDF */}
<h5>View PDF</h5>
<div className="viewer">

{/* render this if we have a pdf file */}
{/* {pdfFile&&(
  <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
    <Viewer fileUrl={"/home/shivani.gupta/Downloads/cancleticket.pdf"}
    plugins={[defaultLayoutPluginInstance]}></Viewer>
  </Worker>
)} */}
<Document file="https://dspace.mit.edu/bitstream/handle/1721.1/3673/CS002.pdf?sequence=2" onLoadSuccess={onDocumentLoadSuccess}>
  <Page pageNumber={pageNumber  } />
</Document>

{/* render this if we have pdfFile state null   */}
{/* {!pdfFile&&<>No file is selected yet</>} */}

</div>
          
          </div>
          <div className='col-6'>
           
            <ChatBot/>
            
            
            
            
            

          </div>
          
          
      </div>
      

     

    </div>
  );
}

export default App;
