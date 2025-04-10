'use client';

import React, { useState } from "react";
import DashboardPage from "../../../../components/dashboard/vendor-dashboard/add-hotel";
import VendorLogin from "../../../../components/auth/VendorLogin";

export default function Page() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {!isAuthenticated ? (
        <VendorLogin onLogin={setIsAuthenticated} />
      ) : (
        <DashboardPage />
      )}
    </>
  );
}
