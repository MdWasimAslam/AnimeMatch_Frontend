import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar.js';
import Footer from '../Components/Footer.js';
import { getAllAnime } from './APIS/getAllAnime.js';
import { DataGrid } from '@mui/x-data-grid';
import "../Components/Styles/Score.css";

const columns = [
  {
    field: 'imgUrl',
    headerName: 'Image',
    flex: 1,
    renderCell: (params) => (
      <img
        src={params.row.imageUrl}
        alt="img"
        style={{ width: 100, height: 100 }} // Adjust the height as needed
      />
    ),
  },
  {
    field: 'name',
    headerName: 'Character Name',
    flex: 2,
    renderCell: (params) => (
      <p style={{ textDecoration: 'none', color: '#000000', fontSize: '1rem' }}>
        {params.row.name}
      </p>
    ),
  },
  {
    field: 'score',
    headerName: 'Total Score',
    flex: 1.5,
    renderCell: (params) => (
      <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#000000' }}>
        {params.row.score}
      </p>
    ),
  },
];



// Add some inline CSS styles for the data grid
const dataGridStyle = {
  height: '60vh',
  width: '90%',
  margin: '0 auto',
  borderRadius: '8px',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
  // Use a gradient background for the data grid
  background: '#F0F0F0',
};

function Score() {
  const [anime, setAnime] = useState([]);

  const sortingModel = [
    {
      field: 'score',
      sort: 'desc', // 'desc' for descending order
    },
  ];

  useEffect(() => {
    getAllAnime().then((data) => {
      const finalData = data?.data?.items.map((item, index) => {
        return { ...item, id: index + 1 };
      });
      setAnime(finalData);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold', marginBottom: '20px', color: '#000000', textShadow: '1px 1px #ccc' }}>Scoreboard</h1>
        <div style={dataGridStyle}>
          <DataGrid
            rows={anime}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            sortModel={sortingModel} // Set the initial sorting
      
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Score;


