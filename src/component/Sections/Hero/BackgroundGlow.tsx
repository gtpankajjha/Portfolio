const BackgroundGlow = () => {
  return (
    <>
      {/* Left Glow */}
      <div
        className="
        absolute
        top-20
        -left-40
        h-96
        w-96
        rounded-full
        bg-indigo-500/20
        blur-[120px]
        "
      />

      {/* Right Glow */}
      <div
        className="
        absolute
        bottom-10
        right-0
        h-80
        w-80
        rounded-full
        bg-cyan-500/20
        blur-[120px]
        "
      />
    </>
  );
};

export default BackgroundGlow;