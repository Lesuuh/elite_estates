import type { ReactNode } from "react";
import { useAuth } from "../context/auth-context";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
