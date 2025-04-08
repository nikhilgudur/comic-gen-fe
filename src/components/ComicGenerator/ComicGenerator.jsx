import React, { useEffect, useState } from "react";
import styles from './ComicGenerator.module.css'
// import * as images from '../../assets/images'

const MODELS = [
  {name: 'SD XL'},
  {name: 'FLUX'},
  {name: 'lumina'},
  {name: 'PixArt-Sigma'},
]


const images = import.meta.glob('../../assets/images/*.{jpg,jpeg,png,gif,svg}', {
  eager: true,
  import: 'default',
});

const ComicGeneratorWithAPI = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState(null);
  const [error, setError] = useState(null);


  const generateImage = async (e) => {
    console.log(e)
    if (e.key === 'Enter' || e.type  === 'click') {
      
      
      setTimeout(() => {
        
        setGeneratedImages(Object.values(images))
      }, 500)
    }
    // setIsGenerating(true);
    // setError(null);

    // try {
    //   const response = await fetch("http://localhost:8000/generate", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       prompt: prompt,
    //       negative_prompt: "low quality, bad anatomy, worst quality",
    //       num_inference_steps: 50,
    //       guidance_scale: 7.5,
    //       width: 512,
    //       height: 512,
    //     }),
    //   });

    //   const data = await response.json();

    //   if (!response.ok) {
    //     throw new Error(data.detail || "Failed to generate image");
    //   }

    //   setGeneratedImages(data.image);
    // } catch (err) {
    //   setError(err.message);
    // } finally {
    //   setIsGenerating(false);
    // }
  };

  const modelOptions = MODELS.map(model => <option key={model.name}>{model.name}</option>)


  return (
    <div className="comic-generator">
      <h1>Comic Generator</h1>
    
    <div className={styles.chat__container}>
      {generatedImages && (
        <div className="result-container">
          <h2>Generated Image</h2>
          {generatedImages.map((image) =>
            <img
            key={image}
            src={image}
            alt="Generated comic"
            className="generated-image"
            style={{border: '1px solid black'}}
            />
            )}
          {/* <a
            href={generatedImages}
            download="generated-comic.png"
            className="download-button"
            >
            Download Image
          </a> */}
        </div>
      )}
      </div>

      <div className={styles.input__section}>
        <div style={{padding: 10}}>
          <select>
            {modelOptions}
          </select>
        </div>
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={generateImage}
          placeholder="Enter your prompt here..."
          disabled={isGenerating}
          style={{padding: 10}}
        />
        <button
          onClick={generateImage}
          disabled={isGenerating || !prompt.trim()}
        >
          {isGenerating ? "Generating..." : "Generate Image"}
        </button>
      </div>

      {error && <div className="error-message">Error: {error}</div>}
    </div>
  );
};

export default ComicGeneratorWithAPI;
