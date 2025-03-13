"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [predictionResult, setPredictionResult] = useState("");

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth");
    }
  }, [user, loading, router]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setPredictionResult(""); // Reset prediction when new image is uploaded
    }
  };

  const handleRemoveImage = () => {
    setFile(null);
    setPreview("");
    setPredictionResult("");
  };

  const handlePredict = async () => {
    if (!file) return alert("Please upload a file first!");

    const formData = new FormData();
    formData.append("file", file);

    try {
      console.log("Sending request to backend...");

      const response = await fetch("http://localhost:5000/predict/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Raw Response:", data); // Debugging

      // 🔥 Manual Check: Ensure the backend actually returns a prediction
      if (!data.prediction) {
        console.error("No prediction received:", data);
        setPredictionResult("Error: No prediction received from the server.");
        return;
      }

      // ✅ Update the UI with the prediction result
      setPredictionResult(`Prediction: ${data.prediction} | Accuracy: ${(data.accuracy * 100).toFixed(2)}%`);

    } catch (error) {
      console.error("Prediction failed:", error);
      setPredictionResult("Prediction failed. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin h-10 w-10 border-4 border-blue-800 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="container px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-900">
        Welcome to your Dashboard, {user.displayName}
      </h1>

      <div className="mt-8">
        <div className="flex gap-4">
          <Button className="bg-blue-800 hover:bg-blue-700 text-white w-40">
            <label htmlFor="file-upload" className="cursor-pointer w-full h-full flex items-center justify-center">
              Upload
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
              />
            </label>
          </Button>
          <Button onClick={handlePredict} className="bg-blue-800 hover:bg-blue-700 text-white w-40">
            Predict
          </Button>
        </div>

        {preview && (
          <div className="mt-4 relative max-w-xs">
            <img src={preview} alt="Uploaded" className="rounded-lg shadow-lg w-full" />
            <button
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-2 hover:bg-red-500"
            >
              ✖
            </button>
          </div>
        )}

        {/* 🔥 Prediction Result Section */}
        {predictionResult && (
          <div className="mt-4 p-4 border border-blue-300 rounded-lg shadow-md bg-gray-100">
            <h3 className="text-lg font-semibold text-blue-900">Prediction Result:</h3>
            <p className="text-gray-800">{predictionResult}</p>
          </div>
        )}
      </div>
    </div>
  );
}
