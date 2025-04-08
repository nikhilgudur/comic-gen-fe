import React, { useState } from "react";

const ComicGeneratorWithAPI = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [error, setError] = useState(null);

  const generateImage = async () => {
    setIsGenerating(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
          negative_prompt: "low quality, bad anatomy, worst quality",
          num_inference_steps: 50,
          guidance_scale: 7.5,
          width: 512,
          height: 512,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Failed to generate image");
      }

      setGeneratedImage(data.image);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="comic-generator">
      <h1>Comic Generator</h1>

      <div className="input-section">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          disabled={isGenerating}
        />
        <button
          onClick={generateImage}
          disabled={isGenerating || !prompt.trim()}
        >
          {isGenerating ? "Generating..." : "Generate Image"}
        </button>
      </div>

      {error && <div className="error-message">Error: {error}</div>}

      {generatedImage && (
        <div className="result-container">
          <h2>Generated Image</h2>
          <img
            src={generatedImage}
            alt="Generated comic"
            className="generated-image"
          />
          <a
            href={generatedImage}
            download="generated-comic.png"
            className="download-button"
          >
            Download Image
          </a>
        </div>
      )}
    </div>
  );
};

export default ComicGeneratorWithAPI;
