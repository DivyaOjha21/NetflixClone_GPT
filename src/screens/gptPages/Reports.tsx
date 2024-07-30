


    import React from 'react';
    import * as XLSX from 'xlsx';
    import saveAs from 'file-saver';
    
    const Reports = ({ data, fileName }) => {
      const handleExport = () => {
        
        const workbook = XLSX.utils.book_new();
        // Convert the data to a worksheet
        const worksheet = XLSX.utils.json_to_sheet(data);
        // Append the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        // Write the workbook and convert it to a binary string
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        // Create a Blob object and trigger the download
        const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
        saveAs(blob, `${fileName}.xlsx`);
      };
    
      return (
        <button onClick={handleExport}>
          Export to Excel
        </button>
      );
    };
    
   
    

export default Reports;
