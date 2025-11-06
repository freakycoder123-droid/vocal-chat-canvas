import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const Voice = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTranscript("Listening...");
      // Simulate voice recognition
      setTimeout(() => {
        setTranscript("This is a demo transcription of your voice input.");
      }, 2000);
    } else {
      setTranscript("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 gap-8">
      {/* Header */}
      <div className="glass shimmer rounded-2xl p-6 max-w-md w-full">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-pulse">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              AI Assistant
            </h1>
            <p className="text-sm text-muted-foreground">Voice Mode</p>
          </div>
        </div>
      </div>

      {/* Voice Visualization */}
      <div className="relative">
        {/* Outer glow rings */}
        {isListening && (
          <>
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
            <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping [animation-delay:0.5s]" />
          </>
        )}

        {/* Main mic button */}
        <div
          className={cn(
            "relative glass shimmer rounded-full p-8 transition-all duration-300",
            isListening && "shadow-[0_0_60px_rgba(0,150,255,0.8)]"
          )}
        >
          <Button
            onClick={toggleListening}
            size="lg"
            className={cn(
              "w-32 h-32 rounded-full transition-all duration-300",
              isListening
                ? "bg-gradient-to-br from-destructive to-destructive/70 hover:shadow-[0_0_40px_rgba(255,50,50,0.6)]"
                : "bg-gradient-to-br from-primary to-primary-glow hover:shadow-[0_0_40px_rgba(0,150,255,0.6)]"
            )}
          >
            {isListening ? (
              <MicOff className="w-16 h-16" />
            ) : (
              <Mic className="w-16 h-16" />
            )}
          </Button>
        </div>
      </div>

      {/* Transcript Display */}
      <div className="glass shimmer rounded-2xl p-6 max-w-md w-full min-h-[120px] flex items-center justify-center">
        {transcript ? (
          <p className="text-center text-muted-foreground">{transcript}</p>
        ) : (
          <p className="text-center text-muted-foreground/50">
            Press the microphone to start speaking
          </p>
        )}
      </div>

      {/* Status Indicator */}
      <div className="glass rounded-full px-6 py-2 flex items-center gap-2">
        <div
          className={cn(
            "w-2 h-2 rounded-full transition-all",
            isListening ? "bg-primary animate-pulse" : "bg-muted"
          )}
        />
        <span className="text-sm text-muted-foreground">
          {isListening ? "Listening..." : "Ready"}
        </span>
      </div>
    </div>
  );
};

export default Voice;
