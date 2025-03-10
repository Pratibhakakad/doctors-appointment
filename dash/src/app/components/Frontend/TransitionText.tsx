'use client'
import React from 'react'
import TextTransition, { presets } from 'react-text-transition';

// Ensure that TextTransition is forwarded a ref if needed.
const ForwardedTextTransition = React.forwardRef((props, ref) => (
  <TextTransition {...props} ref={ref} />
));

export default function TransitionText({ TEXTS }: { TEXTS: string[] }) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearInterval(intervalId); // Fixed clearTimeout to clearInterval
  }, []);

  return (
    <span>
      <ForwardedTextTransition springConfig={presets.wobbly}>
        {TEXTS[index % TEXTS.length]}
      </ForwardedTextTransition>
    </span>
  );
};
