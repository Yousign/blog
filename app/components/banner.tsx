import * as React from 'react';

export const Banner: React.VFC = () => {
  return (
    <section className="banner">
      <h1 className="text-3xl sm:text-6xl text-center font-extrabold">
        Yousign par ceux <div className="text-coral">qui le construisent</div>
      </h1>
    </section>
  );
};
