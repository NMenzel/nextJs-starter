import useOnlineStatus from "../../hooks/useOnlineStatus";
import React from "react";
import { Alert } from "antd";

export const ShowOfflineError = () => {
  const isOnline = useOnlineStatus();

  return (
    <div>
      {!isOnline && (
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            padding: "10px",
            zIndex: "999",
          }}
        >
          <Alert
            message="Bitte überprüfen Sie Ihre Internetverbindung!"
            showIcon
            description="Sie sind offline. Einige Funktionen funktionieren möglicherweise nicht ohne eine Internetverbindung."
            type="error"
            style={{
              maxWidth: "420px",
            }}
          />
        </div>
      )}
    </div>
  );
};
