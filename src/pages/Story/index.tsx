import { Button } from "antd";
import React, { useCallback } from "react";
import { useHistory } from "react-router";

export default function Story() {
  const history = useHistory();
  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);
  return (
    <div>
      准备中...
      <br />
      <Button style={{ backgroundColor: "#cc0033" }} onClick={goBack}>
        返回
      </Button>
    </div>
  );
}
