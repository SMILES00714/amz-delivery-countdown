import { useEffect, useState } from "react";

export default function useNoise() {
  // const audioref = useRef<HTMLAudioElement>(null);
  const [noise, _setNoise] = useState({ enable: false });

  useEffect(() => {
    // audioref.current = new Audio("airhorn.mp3");
    // audioref.current.load();
    // audioref.current.play();
  }, []);

  return noise;
}
