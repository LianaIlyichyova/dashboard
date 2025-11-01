import { Avatar } from "antd";
import { CommentOutlined } from "@ant-design/icons";

import Card from "@components/Card";
import {
  StyledText,
  StyledInfo,
  StyledName,
  StyledRole,
} from "./Feedback.styles";

import { mockData } from "@data/feedback";

function Feedback() {
  return (
    <Card style={{ padding: "0", height: "max-content" }}>
      <StyledText>
        <CommentOutlined style={{ fontSize: "40px" }} />
        <p>{mockData.text}</p>
      </StyledText>
      <StyledInfo>
        <Avatar
          src="https://randomuser.me/api/portraits/women/44.jpg"
          size={52}
        />
        <div>
          <StyledName>{mockData.name}</StyledName>
          <StyledRole>{mockData.role}</StyledRole>
        </div>
      </StyledInfo>
    </Card>
  );
}

export default Feedback;
