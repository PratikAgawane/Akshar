import React, { useState } from 'react';
import { jsPDF } from "jspdf";


export default function TextForm(props) {
  const [Text, setText] = useState('Enter your text');
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const handleOnChange = (event) => {
    saveToHistory(Text);
    setText(event.target.value);
  };

  const saveToHistory = (currentText) => {
    setHistory([...history, currentText]);
    setRedoStack([]); // Clear redo stack on new action
  };

  const handleUpClick = () => {
    saveToHistory(Text);
    setText(Text.toUpperCase());
  props.showAlert("Converted to Uppercase!","success")

  };

  const handleLoClick = () => {
    saveToHistory(Text);
    setText(Text.toLowerCase());
  props.showAlert("Converted to Lowercase!","success")

  };

  const handleCapitalize = () => {
    saveToHistory(Text);
    let newText = Text.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    setText(newText);
  };

  const handleRemoveExtraSpaces = () => {
    saveToHistory(Text);
    let newText = Text.replace(/\s+/g, ' ').trim();
    setText(newText);
  props.showAlert("Removed extra spaces!","success")

  };

  const handleReverseText = () => {
    saveToHistory(Text);
    setText(Text.split('').reverse().join(''));
  props.showAlert("Texts are reversed!","success")

  };

  const handleReverseWords = () => {
    saveToHistory(Text);
    setText(Text.split(' ').reverse().join(' '));
  props.showAlert("Words are reversed!","success")

  };

  const handleClearText = () => {
    saveToHistory(Text);
    setText("");
    
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(Text);
    props.showAlert("Copied to clipboard!","Success");
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const prevText = history[history.length - 1];
      setRedoStack([Text, ...redoStack]);
      setHistory(history.slice(0, history.length - 1));
      setText(prevText);
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const nextText = redoStack[0];
      setHistory([...history, Text]);
      setRedoStack(redoStack.slice(1));
      setText(nextText);
    }
  };

  const handleSortAsc = () => {
  let words = Text.trim().split(/\s+/).sort((a, b) => a.localeCompare(b));
  setText(words.join(' '));
  props.showAlert("Sorted into Ascending Order!","success")

};

const handleSortDesc = () => {
  let words = Text.trim().split(/\s+/).sort((a, b) => b.localeCompare(a));
  setText(words.join(' '));
  props.showAlert("Sorted into Descending Order!","success")

};

const handleGrammarCheck = async () => {
  const res = await fetch("https://api.languagetool.org/v2/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      text: Text,
      language: "en-US"
    })
  });

  const data = await res.json();
  if (data.matches.length === 0) {
    props.showAlert("No issues found!","success");
  } else {
    let suggestions = data.matches.map(m => `✏️ ${m.message} → Suggestion: ${m.replacements[0]?.value || 'N/A'}`);
    props.showAlert("Check Grammer", "Warning")
    alert(suggestions.join('\n\n'));
    
  }
};

const handleExportTXT = () => {
  const element = document.createElement("a");
  const file = new Blob([Text], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = "AksharText.txt";
  element.click();
  props.showAlert("Exported Text as TXT","success")

};

const handleExportPDF = () => {
  const doc = new jsPDF();
  doc.text(Text, 10, 10);
  doc.save("AksharText.pdf");
  props.showAlert("Exported Text as PDF","success")
};

  const wordCount = Text.trim() === '' ? 0 : Text.trim().split(/\s+/).length;
  const characterCount = Text.length;
  const sentenceCount = Text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphCount = Text.split(/\n+/).filter(Boolean).length;


  return (
    <div style={props.myStyle} className="container my-3 p-3 rounded">
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            id="box"
            onChange={handleOnChange}
            rows="9"
            style={{
    backgroundColor: props.myStyle.backgroundColor,
    color: props.myStyle.color
  }}
  
          ></textarea>
        </div>
        <h3> Text Manipulating Tools</h3>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCapitalize}>Capitalize Words</button>
        <button className="btn btn-primary mx-1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleReverseText}>Reverse Text</button>
        <button className="btn btn-primary mx-1" onClick={handleReverseWords}>Reverse Word Order</button>
        <button className="btn btn-danger mx-1" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-success mx-1" onClick={handleCopyToClipboard}>Copy to Clipboard</button>
        <button className="btn btn-secondary mx-1" onClick={handleUndo}>Undo</button>
        <button className="btn btn-secondary mx-1" onClick={handleRedo}>Redo</button>
        <button className="btn btn-primary mx-1 my-3" onClick={handleSortAsc}>Sort A-Z</button>
        <button className="btn btn-primary mx-1 my-3" onClick={handleSortDesc}>Sort Z-A</button>
        <button className="btn btn-warning mx-1" onClick={handleGrammarCheck}>Check Grammar</button>


      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p><strong>{wordCount}</strong> words</p>
        <p><strong>{characterCount}</strong> characters</p>
        <p><strong>{sentenceCount}</strong> sentences</p>
        <p><strong>{paragraphCount}</strong> paragraphs</p>
        <p><strong>{0.008 * wordCount}</strong> Minutes read</p>
        <h2>Preview</h2>
        <p>{Text}</p>
        <button className="btn btn-outline-warning mx-1" onClick={handleExportTXT}>Export as TXT</button>
        <button className="btn btn-outline-warning mx-1" onClick={handleExportPDF}>Export as PDF</button>

      </div>
    </div>
  );
}
