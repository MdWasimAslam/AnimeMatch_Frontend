import React, { useState } from 'react';
import axios from 'axios';
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";



function Admin() {
  const [imageData, setImageData] = useState('');
  const [newAnime, setNewAnime] = useState({
    name: '',
    desc: '',
    serial: '',
  });
const apiUrl ="https://glorious-plum-caridea.cyclic.app";
const localApiUrl ="http://localhost:8080";



  const encodeImageToBase64 = (file, callback) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64Data = reader.result;
      callback(base64Data);
    };

    reader.readAsDataURL(file);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageData(file);
  };

  const handleNewAnime = () => {
    encodeImageToBase64(imageData, (base64String) => {
      const formattedBase64 = base64String.replace(/^data:image\/(.*);base64,/, '');

      const payload = {
        name: newAnime.name,
        desc: newAnime.desc,
        serial: newAnime.serial,
        image: formattedBase64,
      };

      axios
        .post(`${apiUrl}/addNewAnime`, payload)
        .then((response) => {
          console.log(response);
          alert('Data uploaded successfully');
          setNewAnime({
            name: '',
            desc: '',
            serial: '',
          });
          setImageData('');
        })
        .catch((error) => {
          console.error(error);
          alert('An error occurred while uploading the image');
        });
    });
  };

  const handleChange = (e) => {
    setNewAnime({ ...newAnime, [e.target.name]: e.target.value });
  };



  //Styles
  const formStyle = {
    padding: '20px',
    textAlign: 'center',
    width:"390px"
  };

  const inputStyle = {
    padding: '10px',
    margin: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
  };

  const buttonStyle = {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const labelStyle = {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
   <>
   <Navbar/>
   <div style={formStyle}>
      {/* <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} id="imageUpload" />
      <label htmlFor="imageUpload" style={labelStyle}>Upload Image</label>
      <br /><br /> */}
      <input type="text" name="name" value={newAnime.name} onChange={handleChange} style={inputStyle} placeholder="Name" />
      <br />
      <input type="text" name="desc" value={newAnime.desc} onChange={handleChange} style={inputStyle} placeholder="Description" />
      <br />
      <input type="text" name="serial" value={newAnime.serial} onChange={handleChange} style={inputStyle} placeholder="Serial" />
      <br />
      <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} id="imageUpload" />
      <label htmlFor="imageUpload" style={labelStyle}>Upload Image</label>
      <br /><br />
      <button onClick={handleNewAnime} style={buttonStyle}>Submit</button>
    </div>
   <Footer/>
   
   </>
  );
}

export default Admin;
