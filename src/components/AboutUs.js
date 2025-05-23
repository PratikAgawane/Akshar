import React from 'react'

export default function AboutUs(props) {
  return (
     <div className="container my-5" style={props.myStyle}>
      <h1 className="text-center mb-4">About Akshar 📝</h1>
      <div className="card shadow-sm p-4 border-0 rounded-3">
        <p>
          <strong>Akshar</strong> is your all-in-one text utility app designed to help you transform, analyze, and polish your written content with ease. Whether you're a student, content creator, developer, or just someone who deals with text daily — Akshar provides tools that make your work smarter and faster.
        </p>
        <h4 className="mt-4">✨ What You Can Do with Akshar:</h4>
        <ul>
          <li>🔠 Convert text to Uppercase, Lowercase, or Capitalized case.</li>
          <li>✂️ Remove extra spaces from messy text inputs.</li>
          <li>🔄 Reverse the entire text or reverse word order for fun and utility.</li>
          <li>📊 Analyze your text with word, character, sentence, and paragraph counters.</li>
          <li>📋 Copy your formatted text to the clipboard instantly.</li>
          <li>↩️ Undo or redo changes as you type and transform text.</li>
          <li>🌗 Switch between Light Mode and Dark Mode to reduce eye strain.</li>
        </ul>

        <p className="mt-4">
          Akshar is built with <strong>React.js</strong> and styled using <strong>Bootstrap</strong> for a responsive and clean interface. Our mission is to make text processing fast, user-friendly, and accessible to everyone.
        </p>
        <p>
          Thanks for using Akshar! 💙
        </p>
      </div>
    </div>
  );
}

