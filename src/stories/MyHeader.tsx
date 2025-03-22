import React from "react";

import { Logo } from "./Logo.tsx";
import "./header.css";

export const MyHeader = () => (
  <header>
    <div className="storybook-header">
      <Logo />
    </div>
  </header>
);
