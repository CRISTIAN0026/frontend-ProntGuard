import { useState } from "react";
import SignInSide from "../sign-in-side/SignInSide.jsx";

function App() {
  const [generatedPrompt, setGeneratedPrompt] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center transition-all duration-500">
      <div className="w-full max-w-2xl p-6">
        <SignInSide
          generatedPrompt={generatedPrompt}
          setGeneratedPrompt={setGeneratedPrompt}
        />
      </div>
    </div>
  );
}

export default App;
