import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};



function AddModal({isOpen,closeModal ,addMovie}){
 const[name , setName] = useState ('')
 const[category , setCategory] = useState ('')
 const[year , setYear] = useState (null)
 const[image , setImage] = useState ('')
 const[rating , setRating] = useState (0)




    return (
      <div>
        
        <Modal
          isOpen={isOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >

<form onSubmit={(e)=>{
e.preventDefault();
addMovie({name,category,image,year,rating})
 closeModal()
setRating(0);setYear(null);setCategory('');setImage('');setName('')

}}> 
  <div class="mb-3">
    <label  class="form-label">Movie Title</label>
    <input onChange={(e)=>setName(e.target.value)} required type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label  class="form-label">category</label>
    <input onChange={(e)=>setCategory(e.target.value)} required type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <div class="mb-3">
    <label  class="form-label">Year</label>
    <input onChange={(e)=>setYear(e.target.value)} required type="number" min="1900" max="2021" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label  class="form-label">image</label>
    <input onChange={(e)=>setImage(e.target.value)} required type="text" class="form-control" id="exampleInputPassword1"/>
  </div>

  <div class="mb-3">
    <label  class="form-label">rating</label>
    <input onChange={(e)=>setRating(e.target.value)} required type="number" min="0" max="9" class="form-control" id="exampleInputPassword1"/>
  </div>






  <button type="submit" class="btn btn-primary">Submit</button>
</form>
          <button onClick={closeModal}>close</button>
        
        </Modal>
      </div>
    );
}

export default AddModal