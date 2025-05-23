import React from 'react';

export default function Footer({ myStyle }) {
  return (
    <footer style={{
      backgroundColor: myStyle.backgroundColor,
      color: myStyle.color,
      padding: '15px',
      textAlign: 'center',
      marginTop: '30px',
      borderTop: '2px solid gray'
    }}>
      <p>&copy; {new Date().getFullYear()} Akshar | Built with ❤️ by SP TechVerse</p>
    </footer>
  );
}
